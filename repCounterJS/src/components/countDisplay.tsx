import ProgressBar from "@ramonak/react-progress-bar"
import styled from 'styled-components';


const CountDislay = ({ repCompletionPercent, exerciseName, set, count, resetWorkout }: any) => {
  return <CountContainer
    onClick={resetWorkout}
  >
    <ProgressBar
      transitionDuration={'.5s'}
      completed={repCompletionPercent}
    />
    <InfoContainer>{`S:${set}`}</InfoContainer>
    <InfoContainer>{`R:${count}`}</InfoContainer>
    <InfoContainer>{exerciseName}</InfoContainer>
  </CountContainer>
}

export default CountDislay


const CountContainer = styled.div`
  width: 100vw;
  height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 23vh;
  font-weight: bold;
  font-family: 'Dosis', sans-serif;
`;