const TIE = "MATCH DRAW";
const PLAYER_1_WIN = "PLAYER 1 WINS!";
const PLAYER_2_WIN = "PLAYER 2 WINS!";

// Keyboard bindings (values are `KeyboardEvent.key`)
const KEYS = {
  player1: { left: "a", right: "e", jump: "z", attack: " " },
  player2: {
    left: "ArrowLeft",
    right: "ArrowRight",
    jump: "ArrowUp",
    attack: "Enter",
  },
  fullscreen: "f",
};

const TIMES = 30;

const VELO_RUN = 5;
const VELO_JUMP = 10;

const GRAVITY = 0.7;

export { KEYS, TIE, PLAYER_1_WIN, PLAYER_2_WIN, TIMES, VELO_RUN, VELO_JUMP, GRAVITY };
