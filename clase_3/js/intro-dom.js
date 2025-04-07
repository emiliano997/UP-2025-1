// Introducción al DOM
const titulo = document.querySelector("h1");
// document.querySelector("#main").innerHTML = "<span> Hola </span>";
const texto = document.querySelector(".texto");

titulo.innerText = "Hola desde JavaScript";
texto.innerText = "Texto cambiado desde JavaScript";

titulo.style.color = "red";
titulo.style.fontSize = "50px";
