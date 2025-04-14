// Selectores
// querySelector
// const h1 = document.querySelector("h1"); // Selecionar por etiqueta
// const text = document.querySelector(".text"); // Selecionar por clase
// const main = document.querySelector("#main"); // Selecionar por id

// const span = document.querySelector("#main span");

// const texts = document.querySelectorAll(".text");

// const textsNew = [];

// texts.forEach((text) => {
//   if (text.tagName !== "SPAN") {
//     textsNew.push(text);
//   }
// });

// console.log(texts);

// getElement
const main = document.getElementById("main"); // Selecionar por id
console.log(main);

const texts = document.getElementsByClassName("text"); // Selecionar por clase
console.log(texts);

const h1 = document.getElementsByTagName("h1");
console.log(h1);

const spanT = document.getElementsByName("span-t"); // Selecionar por nombre
console.log(spanT);
