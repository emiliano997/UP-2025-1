// Operaciones
const main = document.getElementById("main"); // Selecionar por id
const colorFondo = prompt("Ingrese un color de fondo: ");

// Modificaciones a los estilos
main.style.backgroundColor = colorFondo;
main.style.color = "#fff";
main.style.fontFamily = "Arial, Helvetica, sans-serif";
main.style.padding = "20px";
main.style.display = "flex";
main.style.flexDirection = "column";
main.style.alignItems = "center";
main.style.justifyContent = "center";

// Modificar clases de los elementos
// className -> Reemplaza todas las clases que ya tengan
const h1 = document.querySelector("h1");
h1.className = "title giant blue";

// classList -> Permite trabajar las clases como si fuera un array
const p = document.querySelector("p");
// p.classList.add("title");
// p.classList.remove("title");
p.classList.toggle("title");

// Modificar textos
console.log(h1.innerText); // Obtener texto original
h1.innerText = "Hola Mundo!";

// Modificar HTML interno
const titulo = prompt("Ingrese un título para la página");

main.innerHTML = `
<h2> ${titulo} </h2>
`;
