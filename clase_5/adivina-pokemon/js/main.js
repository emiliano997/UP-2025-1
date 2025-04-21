const URL = "https://pokeapi.co/api/v2/pokemon?limit=101";

const button = document.getElementById("button");
const input = document.getElementById("input");

button.addEventListener("click", () => {
  const jugador = input.value.toLowerCase();

  fetch(URL)
    .then((respuesta) => {
      console.log(respuesta);
      return respuesta.json();
    })
    .then((datos) => {
      const pokemons = datos.results;

      // Obtener un pokemon aleatorio
      const pokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
      const resultado = document.getElementById("resultado");

      if (jugador === pokemon.name) {
        resultado.innerText = `¡Correcto! El pokemon es ${pokemon.name}`;
      } else {
        resultado.innerText = `Incorrecto. El pokemon es ${pokemon.name}`;
      }
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
});
