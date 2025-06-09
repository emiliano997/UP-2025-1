import { gameData } from "../../utils/gameData";
import { Button } from "../Button/Button";

export function GameCard({ currentStep, changeStep, backToMenu }) {
  return (
    <>
      <div className="flex flex-col text-white items-center justify-center gap-5 bg-blue-800 p-32 rounded-lg">
        <p>{gameData[currentStep].text}</p>

        <img className="h-56 w-auto" src={gameData[currentStep].img} alt="" />
      </div>
      {gameData[currentStep].options.map((option, index) => (
        <Button key={index} onClick={() => changeStep(option.nextId - 1)}>
          {option.text}
        </Button>
      ))}

      <Button onClick={backToMenu}>Volver al inicio</Button>
    </>
  );
}
