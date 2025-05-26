import { useState } from "react";
import { Button } from "../Button/Button.jsx";

export function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>{counter}</h2>
      <Button text="+" handleClick={() => setCounter(counter + 1)} />
      <Button text="-" handleClick={() => setCounter(counter - 1)} />
    </div>
  );
}
