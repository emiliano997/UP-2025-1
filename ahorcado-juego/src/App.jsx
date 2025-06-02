import { useEffect, useState } from "react";
import "./App.css";
import {
  alphabet,
  GAME_STATUS,
  MAX_WRONG_GUESSES,
  WORDS,
} from "./utils/constants";
import { Word } from "./components/Word/Word";
import { GameStatus } from "./components/GameStatus/GameStatus";
import { Hangman } from "./components/Hangman/Hangman";

function App() {
  const [currentWord, setCurrentWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuessed, setWrongGuessed] = useState(0);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.PLAYING);

  const initializeGame = () => {
    const word = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCurrentWord(word);
    setGuessedLetters([]);
    setWrongGuessed(0);
    setGameStatus(GAME_STATUS.PLAYING);
  };

  useEffect(() => {
    console.log("Initializing game...");

    initializeGame();
  }, []);

  useEffect(() => {
    if (currentWord) {
      const wordLetters = new Set(currentWord);
      const correctGuesses = guessedLetters.filter((letter) =>
        wordLetters.has(letter)
      );

      if (correctGuesses.length === wordLetters.size) {
        setGameStatus(GAME_STATUS.WON);
      } else if (wrongGuessed >= MAX_WRONG_GUESSES) {
        setGameStatus(GAME_STATUS.LOST);
      }
    }
  }, [currentWord, guessedLetters, wrongGuessed]);

  const handleGuess = (letter) => {
    if (gameStatus !== GAME_STATUS.PLAYING || guessedLetters.includes(letter))
      return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!currentWord.includes(letter)) {
      setWrongGuessed(wrongGuessed + 1);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            🎯 Juego del Ahorcado
          </h1>

          <GameStatus gameStatus={gameStatus} currentWord={currentWord} />

          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <div className="mb-4 p-4 bg-sky-50 rounded-lg shadow-inner">
                <Hangman gameStatus={gameStatus} wrongGuesses={wrongGuessed} />
              </div>
              <div className="text-lg font-semibold flex items-center gap-2">
                <span
                  className={
                    wrongGuessed >= MAX_WRONG_GUESSES
                      ? "text-red-600"
                      : "text-gray-700"
                  }
                >
                  Errores: {wrongGuessed}/{MAX_WRONG_GUESSES}
                </span>
                {wrongGuessed >= MAX_WRONG_GUESSES && <span>💀</span>}
                {gameStatus === GAME_STATUS.WON && <span>🎉</span>}
              </div>
            </div>

            <div className="flex flex-col items-center">
              {/* Palabra */}
              <div className="mb-8">
                <div className="flex justify-center flex-wrap">
                  {currentWord.split("").map((letter, index) => (
                    <Word
                      key={index}
                      letter={guessedLetters.includes(letter) ? letter : ""}
                    />
                  ))}
                </div>
              </div>

              {/* Botones del alfabeto */}
              <div className="grid grid-cols-6 gap-1 mb-6">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => handleGuess(letter)}
                    disabled={
                      guessedLetters.includes(letter) ||
                      gameStatus !== GAME_STATUS.PLAYING
                    }
                    className={`w-8 h-8 text-sm font-bold rounded transition-colors ${
                      guessedLetters.includes(letter)
                        ? currentWord.includes(letter)
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : gameStatus === GAME_STATUS.PLAYING
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-gray-300 text-gray-500"
                    }`}
                  >
                    {letter}
                  </button>
                ))}

                <button
                  onClick={initializeGame}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  🔄 Nuevo Juego
                </button>
              </div>
            </div>
          </section>

          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>
              Adivina la palabra letra por letra. Tienes {MAX_WRONG_GUESSES}{" "}
              intentos incorrectos.
            </p>
            <p>
              ¡Las palabras están relacionadas con tecnología y programación!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
