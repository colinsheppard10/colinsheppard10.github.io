import { Exercise, PoseType } from "./exercise";

const handleReverse = ({ start, repCompletionPercent, end }: any) => {
  if (end < start) {
    start = start * -1;
    repCompletionPercent = repCompletionPercent * -1;
    end = end * -1;
  }
  return { start, repCompletionPercent, end }
}

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

const countExercise = (poseLandmarks: any, exercise: Exercise, direction: number, count: number) => {
  let [anchor1, anchor2] = exercise.anchors
  let [start, end] = exercise.angles

  let p1 = poseLandmarks[anchor1]
  let p2 = poseLandmarks[anchor2]

  let repCompletionPercent;

  repCompletionPercent = findBinary({ p1, p2 });

  ({ start, repCompletionPercent, end } = handleReverse({ start, repCompletionPercent, end }))

  if (repCompletionPercent != null && repCompletionPercent == 100) {
    if (direction == 0) {
      count++;
      direction = 1
    }
  } else if (repCompletionPercent != null && repCompletionPercent == 0) {
    if (direction == 1) {
      direction = 0
    }
  }
  return { direction, count, repCompletionPercent }
}

export default countExercise;