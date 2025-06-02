import { useEffect, useState } from "react";

export function Tabla() {
  const [resultados, setResultados] = useState(
    localStorage.getItem("resultados")
      ? JSON.parse(localStorage.getItem("resultados"))
      : []
  );

  const agregarPuntaje = () => {
    const nuevoPuntaje = {
      nivel: Math.floor(Math.random() * 3) + 1,
      puntos: Math.floor(Math.random() * 100),
    };
    setResultados([...resultados, nuevoPuntaje]);
    localStorage.setItem(
      "resultados",
      JSON.stringify([...resultados, nuevoPuntaje])
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nivel</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {resultados
            .sort((a, b) => a.puntos - b.puntos)
            .reverse()
            .map((jugador, indice) => (
              <tr key={indice}>
                <td>{jugador.nivel}</td>
                <td>{jugador.puntos}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <button onClick={agregarPuntaje}>Agregar puntaje</button>
    </>
  );
}
