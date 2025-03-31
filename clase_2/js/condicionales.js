// Comentario de una sola linea
/* 

Comentario de varias lineas

*/

// Condicionales
// Sentencia if
// let nombre = "Sofia";
// let edad = 3;

// ¿El nombre es igual a "Sofia"?
// if (nombre === "Emiliano") {
//   console.log("Bienvenido Emiliano");
// } else {
//   console.log("No eres Emiliano");
// }

// ¿Es mayor de 17 años?
// if (edad > 17 && edad < 25) {
//   console.log("Eres mayor de edad");
// } else if (edad > 25 && edad < 60) {
//   console.log("Eres mayor de edad y tienes entre 30 y 60 años");
// } else {
//   console.log("No eres mayor de edad");
// }

// if anidado
// let edadUsuario = Number(prompt("Ingrese su edad: "));

// if (edadUsuario > 17) {
//   let nombreUsuario = prompt("Ingrese su nombre: ");

//   if (nombreUsuario === "Emiliano") {
//     alert("Bienvenido Emiliano");
//   } else if (nombreUsuario === "Sofia") {
//     alert("Bienvenida Sofia");
//   } else if (nombreUsuario === "Romina") {
//     alert("Bienvenida Romina");
//   } else {
//     alert("Usuario no registrado");
//   }
// }

// ! -> Negación
// Convierte el false en true y convierte el true en false
// undefined es igual a false
// let dato = prompt("Ingrese un dato: ");

// if (!dato) {
//   console.log("El usuario no ingresó información");
//   // Se corte el programa aca
// }

// Resto del codigo

// Sentencia switch
let edad = Number(prompt("Ingrese su edad: "));

if (edad > 17) {
  let nombre = prompt("Ingrese su nombre: ");

  switch (nombre) {
    case ("Emiliano", "emiliano", "emi"):
      alert("Bienvenido Emiliano");
      break;
    case ("Sofia", "sofi"):
      alert("Bienvenida Sofia");
      break;
    case "Ambar":
      alert("Bienvenida Ambar");
      break;
    default:
      alert("Usuario no registrado");
  }
}
