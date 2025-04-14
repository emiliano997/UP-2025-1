// Eventos
const button = document.getElementById("button");
const p = document.getElementById("text");

// function manejadorClick() {}
// button.addEventListener("click", manejadorClick)

button.addEventListener("click", (event) => {
  const input = document.getElementById("input");
  console.log("El botón fue clickeado");
  console.log(input.value);

  p.innerHTML = input.value;
});

p.addEventListener("click", (event) => {
  p.innerText = "El párrafo fue clickeado";
  p.style.color = "red";
  p.style.fontSize = "30px";
});

const changeBackground = document.getElementById("changeBackground");
const colors = ["blue", "green", "red", "white"];
let color = 0;

changeBackground.addEventListener("click", (event) => {
  const body = document.querySelector("body");
  if (color > colors.length - 1) {
    color = 0;
  }

  body.style.backgroundColor = colors[color];
  color++;
});
