import "./Button.css";

export function Button({
  text = "No se ingresó texto",
  handleClick = () => console.warn("No se ingresó función"),
}) {
  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
}
