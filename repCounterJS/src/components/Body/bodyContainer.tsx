import { useEffect, useRef, useState } from 'react';
import {
  drawConnectors,
  drawLandmarks,
} from '@mediapipe/drawing_utils';
import { Pose, POSE_CONNECTIONS, Results } from '@mediapipe/pose';
import countExercise from '../Excercise/exerciseCounter';
import { upper } from '../Excercise/exercise';
import ProgressBar from "@ramonak/react-progress-bar";

const BodyContainer = () => {
  const [inputVideoReady, setInputVideoReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const inputVideoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const currentExercise = upper[2]

  const [exerciseProgress, setExerciseProgress] = useState(() => {
    console.log('in here')
    return {
      direction: 0,
      count: 0,
      repCompletionPercent: 0
    }
  })

  useEffect(() => {
    if (!inputVideoReady) {
      return;
    }
    if (inputVideoRef.current && canvasRef.current) {
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
      if (poseLandmarks) {
        let {direction, count} = exerciseProgress
        // let { direction: d, count: c, repCompletionPercent: p } = countExercise(poseLandmarks, currentExercise, direction, count)
        // console.log(`after d:${d} c:${c} p:${p}`)
        setExerciseProgress(countExercise(poseLandmarks, currentExercise, direction, count))
      }
    }
  };

  let {repCompletionPercent, count} =  exerciseProgress
  return (
    <div>
      <div>
        {upper.map((exercise) => {
          return <div
            onClick={()=>{}}
          >{exercise.name}</div>
        })}
      </div>
      <div>
      {count}
      </div>
      <div>
      <ProgressBar 
        transitionDuration={'.5s'}
        completed={repCompletionPercent} 
      />;
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
