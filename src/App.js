import { useEffect, useState } from "react";
import { useGame } from "./hooks/useGame";
import "twin.macro";
import { Canvas, Layout, Container, GlobalStyles } from "./styles";
import HealthBar from "./components/HealthBar/HealthBar";
import StartOverlay from "./components/StartOverlay/StartOverlay";

const GAME_WIDTH = 1024;
const GAME_HEIGHT = 576;

const getScale = () =>
  Math.min(window.innerWidth / GAME_WIDTH, window.innerHeight / GAME_HEIGHT);

const toggleFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen?.();
  }
};

function App() {
  const [scale, setScale] = useState(getScale);

  useEffect(() => {
    const onResize = () => setScale(getScale());
    const onKey = (e) => {
      if (e.key === "f" || e.key === "F") toggleFullscreen();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const {
    canvasRef,
    playerOneHealth,
    playerTwoHealth,
    timer,
    result,
    isStarted,
    handleStartButton,
  } = useGame();

  return (
    <Layout>
      <GlobalStyles />
      <Container style={{ transform: `scale(${scale})`, marginBottom: 0 }}>
        <HealthBar
          playerOneHealth={playerOneHealth}
          playerTwoHealth={playerTwoHealth}
          timer={timer}
          result={result}
        />
        <StartOverlay
          isStarted={isStarted}
          handleStartButton={handleStartButton}
        />
        <Canvas ref={canvasRef} />
      </Container>
    </Layout>
  );
}

export default App;
