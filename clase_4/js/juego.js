// Juego
const boton = document.getElementById("jugar");
const opciones = ["piedra", "papel", "tijera"];

boton.addEventListener("click", () => {
  const input = document.getElementById("jugador");

  const indice = Math.floor(Math.random() * 2); // Esto es para obtener un numero aleatorio
  const pc = opciones[indice];
  const jugador = input.value.toLowerCase(); // Convertimos el texto a minusculas

  let resultado = "";

  if (jugador === "piedra") {
    if (pc === "papel") {
      resultado = "Perdiste! La computadora eligió papel";
    } else if (pc === "tijera") {
      resultado = "Ganaste! La computadora eligió tijera";
    } else {
      resultado = "Empate! La computadora eligió piedra";
    }
  } else if (jugador === "papel") {
    if (pc === "tijera") {
      resultado = "Perdiste! La computadora eligió tijera";
    } else if (pc === "piedra") {
      resultado = "Ganaste! La computadora eligió piedra";
    } else {
      resultado = "Empate! La computadora eligió papel";
    }
  } else if (jugador === "tijera") {
    if (pc === "piedra") {
      resultado = "Perdiste! La computadora eligió piedra";
    } else if (pc === "papel") {
      resultado = "Ganaste! La computadora eligió papel";
    } else {
      resultado = "Empate! La computadora eligió tijera";
    }
  } else {
    resultado = "Opción no válida. Elige piedra, papel o tijera.";
  }

  const p = document.getElementById("resultado");
  p.innerHTML = resultado;
});
