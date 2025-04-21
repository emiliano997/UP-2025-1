// Juego
function juego() {
  const input = document.getElementById("options");

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
}

const boton = document.getElementById("jugar");
const opciones = ["piedra", "papel", "tijera"];

// boton.addEventListener("click", () => {
//   const p = document.getElementById("resultado");
//   p.innerText = "Cargando...";
//   const resultado = setTimeout(() => {
//     juego();
//   }, 1000);
//   // clearTimeout(resultado);
// });

// Reloj
let segundos = 0;
let minutos = 0;

const intervalo = setInterval(() => {
  const segundosElement = document.getElementById("segundos");
  const minutosElement = document.getElementById("minutos");

  segundos++;

  segundosElement.innerText = segundos < 10 ? `0${segundos}` : segundos;

  if (segundos === 60) {
    segundos = 0;
    minutos++;

    minutosElement.innerText = minutos < 10 ? `0${minutos}` : minutos;
  }

  // console.log(`${minutos}:${segundos}`);

  if (minutos === 5) {
    return clearInterval(intervalo);
  }
}, 1000);

// setTimeout(() => {
//   clearInterval(intervalo);
// }, 3000);

// Nueva versión del juego
function jugar(jugador) {
  const indice = Math.floor(Math.random() * 2); // Esto es para obtener un numero aleatorio
  const pc = opciones[indice];

  const p = document.getElementById("resultado");

  let resultado = "";

  if (jugador === "piedra") {
    if (pc === "papel") {
      resultado = `
      <div style="display: flex; gap: 10px; align-items: center">
        <img src="img/rock.svg" alt="papel" width="50" height="50">
        <p style="font-size: 30px"> VS </p>
        <img src="img/paper.svg" alt="papel" width="50" height="50">
      </div>
      <p>Perdiste! La computadora eligió papel</p> 
      `;
    } else if (pc === "tijera") {
      resultado = `
      <div style="display: flex; gap: 10px; align-items: center">
        <img src="img/rock.svg" alt="papel" width="50" height="50">
        <p style="font-size: 30px"> VS </p>
        <img src="img/scissor.svg" alt="papel" width="50" height="50">
      </div>
      <p>Ganaste! La computadora eligió tijera</p>
      `;
    } else {
      resultado = `
      <div style="display: flex; gap: 10px; align-items: center">
        <img src="img/rock.svg" alt="papel" width="50" height="50">
        <p style="font-size: 30px"> VS </p>
        <img src="img/rock.svg" alt="papel" width="50" height="50">
      </div>
      <p>Empate! La computadora eligió piedra</p>
      `;
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

  p.innerHTML = resultado;
}

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

piedra.addEventListener("click", () => {
  const p = document.getElementById("resultado");
  p.innerText = "Cargando...";
  setTimeout(jugar("piedra"), 1000);
});

papel.addEventListener("click", () => {
  const p = document.getElementById("resultado");
  p.innerText = "Cargando...";
  setTimeout(jugar("papel"), 1000);
});

tijera.addEventListener("click", () => {
  const p = document.getElementById("resultado");
  p.innerText = "Cargando...";
  setTimeout(jugar("tijera"), 1000);
});
