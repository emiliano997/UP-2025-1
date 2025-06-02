export function GameStatus({ gameStatus, currentWord }) {
  return (
    <div className="text-center mb-6">
      {gameStatus === "won" && (
        <div className="text-green-600 text-2xl font-bold mb-4">
          🎉 ¡Felicitaciones! ¡Ganaste! 🎉
        </div>
      )}
      {gameStatus === "lost" && (
        <div className="text-red-600 text-2xl font-bold mb-4">
          😢 ¡Perdiste! La palabra era: {currentWord}
        </div>
      )}
    </div>
  );
}
