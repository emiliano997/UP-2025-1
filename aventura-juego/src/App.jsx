import { useState } from "react";
import "./App.css";
import { Menu } from "./components/Menu/Menu";
import { GameCard } from "./components/GameCard/GameCard";

function App() {
  const [gameStart, setGameStart] = useState(false);
  const [currentStep, setCurrentStep] = useState(null);

  const startGame = () => {
    setGameStart(true);
    setCurrentStep(0);
    localStorage.setItem("currentStep", 0);
  };

  const changeStep = (step) => {
    setCurrentStep(step);
    localStorage.setItem("currentStep", step);
  };

  const continuar = () => {
    const savedStep = localStorage.getItem("currentStep");
    if (savedStep !== null) {
      setCurrentStep(Number(savedStep));
      setGameStart(true);
      return;
    }

    alert("No hay un juego guardado para continuar.");
  };

  const backToMenu = () => {
    setCurrentStep(null);
    setGameStart(false);
  };

  if (!gameStart) {
    return <Menu continuar={continuar} startGame={startGame} />;
  }

  return (
    <section className="h-screen w-full flex flex-col gap-5 items-center justify-center bg-blue-600">
      {currentStep !== null && (
        <GameCard
          backToMenu={backToMenu}
          changeStep={changeStep}
          currentStep={currentStep}
        />
      )}
    </section>
  );
}

export default App;
