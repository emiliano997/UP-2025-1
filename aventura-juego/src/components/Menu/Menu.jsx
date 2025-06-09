import { IoLogoGameControllerB } from "react-icons/io";
import { Button } from "../Button/Button";

export function Menu({ continuar, startGame }) {
  return (
    <section className="h-screen w-full flex flex-col gap-5 items-center justify-center bg-blue-600">
      <h1 className="text-7xl font-bold text-white title">Aventura Juego</h1>

      <div className="flex flex-col items-center justify-center gap-2">
        <Button onClick={continuar}>Continuar</Button>
        <Button onClick={startGame}>
          Nuevo juego <IoLogoGameControllerB />
        </Button>
        <Button>Opciones</Button>
      </div>
    </section>
  );
}
