// Objetos literales
// Propiedades o atributos -> Definen al objeto
const persona = {
  // clave: valor
  nombre: "Juan",
  dni: 12345678,
  peliculas: ["El Padrino", "El Señor de los Anillos"],
  direccion: {
    calle: "Calle False",
    numero: 123,
  },
  saludar: () => {
    console.log("Hola");
  },
};

// Usar funcion dentro de un objeto
persona.saludar();

// Acceder a los atributos de un objeto
console.log(persona.nombre); // Forma más usada
console.log(persona["dni"]); // Forma menos usada

// Modificar un atributo de un objeto
persona.nombre = "Pedro";
console.log(persona);

// Agregar un atributo a un objeto
persona.apellido = "Gonzalez";
console.log(persona.apellido);

// Ejercicio
const nombreUsuario = prompt("Ingrese su nombre de usuario:");
const password = prompt("Ingrese su contraseña:");

const usuario = {
  nombre: nombreUsuario,
  password: password,
};

alert("Bienvenido " + usuario.nombre + "!");
