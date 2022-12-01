import {
  Timer,
  Result,
  Counter,
  PlayerOneBar,
  PlayerTwoBar,
  PlayerOneInner,
  PlayerTwoInner,
  TopBarContainer,
  StatusContainer,
} from "./styles";

const HealthBar = ({ playerOneHealth, playerTwoHealth, timer, result }) => (
  <TopBarContainer>
    <StatusContainer>
      <PlayerOneBar>
        <PlayerOneInner health={playerOneHealth} />
      </PlayerOneBar>
      <Timer>
        <Counter>{timer}</Counter>
      </Timer>
      <PlayerTwoBar>
        <PlayerTwoInner health={playerTwoHealth} />
      </PlayerTwoBar>
    </StatusContainer>
    <Result>{result}</Result>
  </TopBarContainer>
);

export default HealthBar;
