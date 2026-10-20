import { StartOver, Overlay } from "./styles";

const StartOverlay = ({ isStarted, handleStartButton }) => (
  <Overlay isStarted={isStarted}>
    <StartOver onClick={!isStarted ? handleStartButton : null}>PLAY</StartOver>
  </Overlay>
);

export default StartOverlay;
