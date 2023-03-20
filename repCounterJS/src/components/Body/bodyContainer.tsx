import { useEffect, useRef, useState } from 'react';
import {
  drawConnectors,
  drawLandmarks,
} from '@mediapipe/drawing_utils';
import { Pose, POSE_CONNECTIONS, Results } from '@mediapipe/pose';
import countExercise from '../Excercise/exerciseCounter';
import { Exercise, upper } from '../Excercise/exercise';
import ProgressBar from "@ramonak/react-progress-bar";

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
  const activeExerciseRef = useRef(-1);
  activeExerciseRef.current = exerciseProgress.activeExercise
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
      if (poseLandmarks && activeExerciseRef.current >= 0) {
        setRepCompletionPercent(countExercise(poseLandmarks, upper[activeExerciseRef.current]));
      }
    }
  };

  useEffect(() => {
    let { direction, count, set, exerciseSelectionIndex, activeExercise } = exerciseProgress
    if (repCompletionPercent == 100) {
      if (direction == 0) {
        count++;
        direction = 1
      }
    } else if (repCompletionPercent == 0) {
      if (direction == 1) {
        direction = 0
      }
    }

    let exercise = upper[activeExercise]
    if (exercise) {
      if (count >= exercise.reps && direction == 0) {
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

  let { set, count, exerciseSelectionIndex } = exerciseProgress
  return (
    <div>
      <div>
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
      </div>
      <div>
        {exerciseSelection.map((exercise: any, index: number) => {
          let { workoutKey, index: workoutIndex, } = exercise
          let isActiveExercise = index == exerciseSelectionIndex
          return <div
            key={index}
            onClick={() => {
              setExerciseSelection((prevExercise: any[]) => {
                let newExercise = prevExercise.filter((ex) => ex.workoutKey !== workoutKey)
                return newExercise
              })
            }}
          >
            {`${index} - ${upper[workoutIndex as number].name} ${isActiveExercise ? '<=' : ''}`}
          </div>
        })}
      </div>
      <div>
        {`set:${set} count:${count}`}
      </div>
      <div
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
      </div>
      <div>
        <ProgressBar
          transitionDuration={'.5s'}
          completed={repCompletionPercent}
        />
      </div>
      <video
        autoPlay
        height={0}
        width={0}
        ref={(el) => {
          inputVideoRef.current = el;
          setInputVideoReady(!!el);
        }}
      />
      <canvas ref={canvasRef} width={window.screen.availWidth - 10} height={window.screen.availHeight - 100} />
      {!loaded && (
        <div className="message">Loading</div>
      )}
    </div>
  );
};

export default BodyContainer;
