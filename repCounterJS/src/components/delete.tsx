import { useEffect, useState } from "react";

const DeleteComp = () => {
  const [exerciseProgress, setExerciseProgress] = useState(() => {
    console.log('in here')
    return {
      direction: 0,
      count: 0,
      repCompletionPercent: 0
    }
  })

  useEffect(() => {
    console.log('in useEffect')
  })

  return (
    <div onClick={() => {
      let { direction, count, repCompletionPercent } = exerciseProgress
      count = count + 1;
      setExerciseProgress({ direction, count, repCompletionPercent })
    }}>
      {exerciseProgress.count}
    </div>
  )
}

export default DeleteComp;