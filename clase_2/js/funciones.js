// Funciones
// let nombre; // undefined
// function saludar(nombre, texto) {
//   // Bloque de código
//   alert(texto + nombre);
// }

// let nombre = prompt("Ingrese su nombre: ");

// saludar(nombre, "Bienvenido ");
// saludar("Emiliano", "Anda a freir churros ");

// return
function sumar(numero1, numero2) {
  let resultado = numero1 + numero2;
  console.log("Resultado: " + resultado);
  return resultado; // Devolver el resultado
}

sumar(5, 6);

let resultado = sumar(5, 10);
console.log(resultado); // 15
console.log(sumar(9, 18));
// alert(sumar(5, 10));

// Funcion flecha
// const nombreFuncion = (parametros) => { // Bloque de código }
// return implicito -> cuando la función tiene una sola línea de código
const resta = (numero1, numero2) => numero1 - numero2;

console.log(resta(10, 5)); // 5

alert(mensaje("Emiliano"));
const mensaje = (nombre) => nombre + " es un genio";
