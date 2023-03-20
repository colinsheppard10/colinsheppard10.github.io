import { Exercise } from "./exercise";

const findAngle = ({ p1, p2, p3 }: any) => {
  let { x: x1, y: y1 } = p1;
  let { x: x2, y: y2 } = p2;
  let { x: x3, y: y3 } = p2;

  let radians = Math.atan2(y3 - y2, x3 - x2) - Math.atan2(y1 - y2, x1 - x2)
  let degrees = radians * (180 / Math.PI)
  return degrees;
}

const findBinary = ({ p1, p2 }: any): number => {
  let { y: y1 } = p1;
  let { y: y2 } = p2;

  if (y1 > y2)
    return 0;
  else
    return 100;
}

const countExercise = (poseLandmarks: any, exercise: Exercise) => {
  let [anchor1, anchor2] = exercise.anchors
  let p1 = poseLandmarks[anchor1]
  let p2 = poseLandmarks[anchor2]
  let repCompletionPercent = findBinary({ p1, p2 });
  return repCompletionPercent
}

export default countExercise;