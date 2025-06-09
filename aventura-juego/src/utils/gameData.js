export const gameData = [
  {
    id: 1,
    text: "Te encuentras en un bosque oscuro. Hay dos caminos: uno a la izquierda y otro a la derecha. ¿Qué camino eliges?",
    options: [
      { text: "Izquierda", nextId: 2 },
      { text: "Derecha", nextId: 3 },
    ],
    img: "https://img.freepik.com/fotos-premium/camino-bosque-camino-que-lleva-al-bosque_854605-12983.jpg",
  },
  {
    id: 2,
    text: "Sigues el camino de la izquierda y encuentras un lago. Hay un bote en la orilla. ¿Qué haces?",
    options: [
      { text: "Navegar en el bote", nextId: 4 },
      { text: "Regresar al bosque", nextId: 1 },
    ],
    img: "https://wallpapercave.com/wp/wp10127665.jpg",
  },
  {
    id: 3,
    text: "Sigues el camino de la derecha y te encuentras con un viejo puente. El puente parece inestable. ¿Qué haces?",
    options: [
      { text: "Cruzar el puente", nextId: 5 },
      { text: "Regresar al bosque", nextId: 1 },
    ],
  },
  {
    id: 4,
    text: "Navegas por el lago y descubres una isla misteriosa. En la isla hay un cofre del tesoro. ¿Qué haces?",
    options: [
      { text: "Abrir el cofre", nextId: 6 },
      { text: "Regresar al lago", nextId: 2 },
    ],
  },
  {
    id: 5,
    text: "Cruzas el puente y llegas a un pueblo abandonado. Hay una casa que parece segura. ¿Qué haces?",
    options: [
      { text: "Entrar a la casa", nextId: 7 },
      { text: "Regresar al puente", nextId: 3 },
    ],
  },
  {
    id: 6,
    text: "Abres el cofre y encuentras un mapa antiguo que te lleva a un tesoro escondido. ¡Has ganado!",
    options: [],
  },
  {
    id: 7,
    text: "Entras a la casa y encuentras suministros útiles para tu aventura. ¡Has sobrevivido!",
    options: [],
  },
];
