import { useEffect, useRef, useState } from 'react';
import {
  drawConnectors,
  drawLandmarks,
} from '@mediapipe/drawing_utils';
import { Pose, POSE_CONNECTIONS, Results } from '@mediapipe/pose';
import countExercise from '../Excercise/exerciseCounter';
import { Exercise, upper } from '../Excercise/exercise';
import ProgressBar from "@ramonak/react-progress-bar";
import CountDislay from '../countDisplay';
import styled from 'styled-components';

const BodyContainer = () => {
  const [inputVideoReady, setInputVideoReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const inputVideoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const [exerciseProgress, setExerciseProgress] = useState({
    direction: 0,
    count: 0,
    set: 0,
    exerciseSelectionIndex: -1,
    activeExercise: -1
  } as {
    direction: number;
    count: number;
    set: number;
    exerciseSelectionIndex: number,
    activeExercise: number;
  })
  const activeExerciseRef = useRef({
    activeExercise: -1,
    count: -1,
    set: -1
  });
  activeExerciseRef.current = {
    activeExercise: exerciseProgress.activeExercise,
    count: 1,
    set: 1
  }

  const [repCompletionPercent, setRepCompletionPercent] = useState(0);
  const [exerciseSelection, setExerciseSelection] = useState([] as any)

  useEffect(() => {
    if (inputVideoReady && inputVideoRef.current && canvasRef.current) {
      contextRef.current = canvasRef.current.getContext('2d');
      const constraints = {
        video: { width: { min: 1280 }, height: { min: 720 } },
      };
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        if (inputVideoRef.current) {
          inputVideoRef.current.srcObject = stream;
        }
        sendToMediaPipe();
      });

      const pose = new Pose({
        locateFile: (file: any) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
        }
      });
      pose.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: true,
        smoothSegmentation: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      });
      pose.onResults(onResults);

      const sendToMediaPipe = async () => {
        if (inputVideoRef.current) {
          if (!inputVideoRef.current.videoWidth) {
            //console.log(inputVideoRef.current.videoWidth);
            requestAnimationFrame(sendToMediaPipe);
          } else {
            await pose.send({ image: inputVideoRef.current });
            requestAnimationFrame(sendToMediaPipe);
          }
        }
      };
    }
  }, [inputVideoReady]);

  const onResults = (results: Results) => {
    if (canvasRef.current && contextRef.current) {
      setLoaded(true);

      contextRef.current.save();
      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      contextRef.current.drawImage(
        results.image,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      drawConnectors(contextRef.current, results.poseLandmarks, POSE_CONNECTIONS,
        { color: '#00FF00', lineWidth: 4 });
      drawLandmarks(contextRef.current, results.poseLandmarks,
        { color: '#FF0000', lineWidth: 2 });

      contextRef.current.restore();
      let { poseLandmarks } = results
      if (poseLandmarks && activeExerciseRef.current?.activeExercise >= 0) {
        setRepCompletionPercent(countExercise(poseLandmarks, upper[activeExerciseRef.current.activeExercise]));
      }
    }
  };

  useEffect(() => {
    let { direction, count, set, exerciseSelectionIndex, activeExercise } = exerciseProgress
    if (repCompletionPercent === 100) {
      if (direction === 0) {
        count++;
        direction = 1
      }
    } else if (repCompletionPercent === 0) {
      if (direction === 1) {
        direction = 0
      }
    }

    let exercise = upper[activeExercise]
    if (exercise) {
      if (count >= exercise.reps && direction === 0) {
        if (exerciseSelectionIndex < exerciseSelection.length - 1)
          exerciseSelectionIndex++;
        else {
          set++;
          exerciseSelectionIndex = 0;
        }
        count = 0;
      }

      activeExercise = exerciseSelection[exerciseSelectionIndex].index;
      setExerciseProgress({ direction, count, set, exerciseSelectionIndex, activeExercise })
    }

  }, [repCompletionPercent])


  let { set, count, exerciseSelectionIndex, activeExercise } = exerciseProgress
  let workoutStarted = activeExercise > -1;
  return (
    <MainContainer>
      {!workoutStarted ?
        <>
          <WorkoutSelection>
            <WorkoutItem>
              <Title>
                WORKOUT OPTIONS:
              </Title>
              {upper.map((exercise, index) => {
                return <div
                  key={index}
                  onClick={() => {
                    let workoutKey = Math.random();
                    setExerciseSelection((prevExerciseSelection: any[]) => {
                      return [...prevExerciseSelection, { workoutKey, index }];
                    })
                  }}
                >{exercise.name}</div>
              })}
            </WorkoutItem>
            <WorkoutItem>
              <Title>
                CURRENT SELECTION:
              </Title>
              {exerciseSelection.map((exercise: any, index: number) => {
                let { workoutKey, index: workoutIndex, } = exercise
                return <div
                  key={index}
                  onClick={() => {
                    setExerciseSelection((prevExercise: any[]) => {
                      let newExercise = prevExercise.filter((ex) => ex.workoutKey !== workoutKey)
                      return newExercise
                    })
                  }}
                >
                  {`${index} - ${upper[workoutIndex as number].name}`}
                </div>
              })}
            </WorkoutItem>
          </WorkoutSelection>
          <WorkoutSelection>
            <WorkoutItem
              onClick={() => {
                if (exerciseSelection.length)
                  setExerciseProgress({
                    direction: 0,
                    count: 0,
                    set: 0,
                    exerciseSelectionIndex: 0,
                    activeExercise: exerciseSelection[0].index
                  })
              }}
            >start
            </WorkoutItem>
          </WorkoutSelection>
          <div>
          </div>
        </>

        : <CountDislay
          repCompletionPercent={repCompletionPercent}
          exerciseName={upper[activeExercise].name}
          set={set}
          count={count}
          resetWorkout={() => {
            setExerciseProgress({
              direction: 0,
              count: 0,
              set: 0,
              exerciseSelectionIndex: -1,
              activeExercise: -1
            })
          }}
        />}

      <div>
        <video
          autoPlay
          height={0}
          width={0}
          ref={(el) => {
            inputVideoRef.current = el;
            setInputVideoReady(!!el);
          }}
        />
        <canvas ref={canvasRef} width={window.screen.availWidth * (3 / 4)} height={window.screen.availHeight * (3 / 4)} />
        {!loaded && (
          <div className="message">Loading</div>
        )}
      </div>
    </MainContainer>
  );
};

export default BodyContainer;

const MainContainer = styled.div`
  text-transform: uppercase;
`;

const Title = styled.div`
  border-bottom: 1rem solid;
`;

const WorkoutSelection = styled.div`
  font-size: 5vh;
  display: flex;
`;

const WorkoutItem = styled.div`
  text-align: center;
  font-family: 'Dosis', sans-serif;
  flex-grow: 1;
`;