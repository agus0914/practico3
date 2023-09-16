//importando las imagenes, los styled y componentes necesarios

import Piedra from "./Piedra.jpg";
import Papel from "./Papel.jpg";
import Tijera from "./Tijera.jpg";
import { useState } from "react";
import { Display } from "../App";
import { Tablero } from "../App";
import { Boton, Mensaje } from "./Boton";

//creando variables para los puntajes 
let varPuntajePC = 0;
let varPuntajeU = 0;

//componente Juego
export function Juego({ asignarNombre, resultado }) {
  let Jugadas = ["Piedra", "Papel", "Tijera"];


  const [jugadaU, setJugadaU] = useState("");
  const [jugadaPC, setJugadaPC] = useState("");
  const [ganadorRonda, setGanadorRonda] = useState("");
  const [puntajeU, setPuntajeU] = useState(0);
  const [puntajePC, setPuntajePC] = useState(0);

  //Funcion que toma las jugadas y devuelve el ganador con su puntaje

  const DeterminarGanador = (jugadaUsuario, jugadaComputadora) => {
    setJugadaPC(Jugadas[jugadaComputadora]);
    setJugadaU(jugadaUsuario);
    //console.log(
      //"la jugada pc es " +
       // Jugadas[jugadaComputadora] +
       // "y la jugada usuario es " +
        //jugadaUsuario
    //);

    if (
      (Jugadas[jugadaComputadora] === Jugadas[0] &&
        jugadaUsuario === Jugadas[2]) ||
      (Jugadas[jugadaComputadora] === Jugadas[1] &&
        jugadaUsuario === Jugadas[0]) ||
      (Jugadas[jugadaComputadora] === Jugadas[2] &&
        jugadaUsuario === Jugadas[1])
    ) {
      //  terminarJuego(setPuntajePC);
      setPuntajePC((valorAnterior) => valorAnterior + 1);
      varPuntajePC = varPuntajePC + 1;
      setGanadorRonda("Punto para la PC.");
      //setPuntajePC(puntajePC + 1);
    } else if (
      (Jugadas[jugadaComputadora] === Jugadas[2]) &
        (jugadaUsuario === Jugadas[0]) ||
      (Jugadas[jugadaComputadora] === Jugadas[0] &&
        jugadaUsuario === Jugadas[1]) ||
      (Jugadas[jugadaComputadora] === Jugadas[1] &&
        jugadaUsuario === Jugadas[2])
    ) {
      //    terminarJuego(setPuntajeU);
      setPuntajeU((valorAnterior) => valorAnterior + 1);
      varPuntajeU = varPuntajeU + 1;
      setGanadorRonda("Punto para el Usuario.");
      // setPuntajeU(puntajeU + 1);
    } else {
      setGanadorRonda("Empate");
    }
  };

  //const jugadaPc = () => {
  //  return setJugadaPC(Jugadas[Math.round(Math.random() * 2)]);
  // };

  //funcion que se fija si alguno llego a los 3 puntos y si sucede se vuelven las variables a 0 para poder volver a jugar
  const terminarJuego = () => {
    //   funcionSet(set => set + 1)
    console.log(varPuntajePC, varPuntajeU);
    if (varPuntajePC > 2) {
      resultado("PC");
      varPuntajePC = 0;
      varPuntajeU = 0;
    } else if (varPuntajeU > 2) {
      resultado("Usuario");
      varPuntajePC = 0;
      varPuntajeU = 0;
    }
  };

  // const asignar = (jugadaUsuario) => {
  // setJugadaU(jugadaUsuario);
  // setJugadaPC(Jugadas[Math.round(Math.random() * 2)]);
  // DeterminarGanador();
  // };

  return (
    <Display>
    {//se crea el tablero con su styled que muestra el nombre del usuario y los puntajes de el mismo con la PC
    }
      <>
        <table>
          <tbody>
            <tr style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Tablero id="nombreTablero">{asignarNombre}</Tablero>
              <Tablero>PC</Tablero>
            </tr>
            <tr style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Tablero id="valorUsuario"> {puntajeU} </Tablero>
              <Tablero id="valorPC"> {puntajePC} </Tablero>
            </tr>
          </tbody>
        </table>
      </>
      {//se muestran 3 componentes botones cada uno con su id y imagen 
      }
      <div style={{display: "flex",alignItems:"center", justifyContent: "space-evenly",margin:"auto"}}>
        <Boton 
          Tipo={Piedra}
          id="Piedra"
          jugada={(jugadaUsuario, jugadaComputadora) => {
            // setJugadaU(jugadaUsuario);
            //setJugadaPC(Jugadas[Math.round(Math.random() * 2)]);
            DeterminarGanador(jugadaUsuario, jugadaComputadora);
            terminarJuego();
          }}
        />
        <Boton
          Tipo={Papel}
          id="Papel"
          jugada={(jugadaUsuario, jugadaComputadora) => {
            // setJugadaU(jugadaUsuario);
            //setJugadaPC(Jugadas[Math.round(Math.random() * 2)]);
            DeterminarGanador(jugadaUsuario, jugadaComputadora);
            terminarJuego();
          }}
        />
        <Boton
          Tipo={Tijera}
          id="Tijera"
          jugada={(jugadaUsuario, jugadaComputadora) => {
            // setJugadaU(jugadaUsuario);
            //setJugadaPC(Jugadas[Math.round(Math.random() * 2)]);
            DeterminarGanador(jugadaUsuario, jugadaComputadora);
            terminarJuego();
          }}
        />
      </div>
      {//Componente Mensaje que muestra las jugadas y el resultado de la misma 
      }
      <Mensaje jugadaPC={jugadaPC} jugadaU={jugadaU} ronda={ganadorRonda} />
    </Display>
  );
}
