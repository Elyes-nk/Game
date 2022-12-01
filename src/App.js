import { useGame } from "./hooks/useGame";
import "twin.macro";
import { Canvas, Layout, Container, GlobalStyles } from "./styles";
import HealthBar from "./components/HealthBar/HealthBar";
import StartOverlay from "./components/StartOverlay/StartOverlay";

function App() {
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
      <Container>
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
