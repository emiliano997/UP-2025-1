import { GAME_STATUS } from "../../utils/constants";

export function Hangman({ wrongGuesses, gameStatus }) {
  return (
    <svg
      width="200"
      height="250"
      viewBox="0 0 200 250"
      className="border rounded-lg bg-white"
    >
      {/* Base */}
      <line
        x1="10"
        y1="230"
        x2="100"
        y2="230"
        stroke="#8B4513"
        strokeWidth="4"
      />

      {/* Poste vertical */}
      {wrongGuesses >= 1 && (
        <line
          x1="30"
          y1="230"
          x2="30"
          y2="20"
          stroke="#8B4513"
          strokeWidth="4"
        />
      )}

      {/* Viga horizontal */}
      {wrongGuesses >= 2 && (
        <line
          x1="30"
          y1="20"
          x2="120"
          y2="20"
          stroke="#8B4513"
          strokeWidth="4"
        />
      )}

      {/* Cuerda */}
      {wrongGuesses >= 3 && (
        <line
          x1="120"
          y1="20"
          x2="120"
          y2="50"
          stroke="#8B4513"
          strokeWidth="2"
        />
      )}

      {/* Cabeza */}
      {wrongGuesses >= 4 && (
        <circle
          cx="120"
          cy="65"
          r="15"
          stroke="#000"
          strokeWidth="2"
          fill="none"
        />
      )}

      {/* Cuerpo */}
      {wrongGuesses >= 5 && (
        <line
          x1="120"
          y1="80"
          x2="120"
          y2="150"
          stroke="#000"
          strokeWidth="2"
        />
      )}

      {/* Brazo izquierdo */}
      {wrongGuesses >= 6 && (
        <line
          x1="120"
          y1="100"
          x2="90"
          y2="120"
          stroke="#000"
          strokeWidth="2"
        />
      )}

      {/* Brazo derecho */}
      {wrongGuesses >= 6 && (
        <line
          x1="120"
          y1="100"
          x2="150"
          y2="120"
          stroke="#000"
          strokeWidth="2"
        />
      )}

      {/* Pierna izquierda */}
      {wrongGuesses >= 6 && (
        <line
          x1="120"
          y1="150"
          x2="90"
          y2="180"
          stroke="#000"
          strokeWidth="2"
        />
      )}

      {/* Pierna derecha */}
      {wrongGuesses >= 6 && (
        <line
          x1="120"
          y1="150"
          x2="150"
          y2="180"
          stroke="#000"
          strokeWidth="2"
        />
      )}

      {/* Cara triste si perdió */}
      {gameStatus === GAME_STATUS.LOST && (
        <g>
          <circle cx="115" cy="60" r="2" fill="#000" />
          <circle cx="125" cy="60" r="2" fill="#000" />
          <path
            d="M 112 72 Q 120 68 128 72"
            stroke="#000"
            strokeWidth="1"
            fill="none"
          />
        </g>
      )}

      {/* Cara feliz si ganó */}
      {gameStatus === GAME_STATUS.WON && wrongGuesses > 0 && (
        <g>
          <circle cx="115" cy="60" r="2" fill="#000" />
          <circle cx="125" cy="60" r="2" fill="#000" />
          <path
            d="M 112 68 Q 120 75 128 68"
            stroke="#000"
            strokeWidth="1"
            fill="none"
          />
        </g>
      )}
    </svg>
  );
}
