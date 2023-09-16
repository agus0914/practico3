//importando los componentes Saludos, Juego, Resultado. Tambien Styled y useState

import { useState } from "react";
import { Saludo } from "./Componentes/Saludo";
import { Juego } from "./Componentes/Juego";
import { Resultado } from "./Componentes/Resultado";
import styled from "styled-components";

//creando styled de varios componentes

export const BotonEleccion = styled.div`
  border-radius: 50%;
  border-color: transparent;
  background-color: transparent;
  width: 200px;
  height: 200px;
  margin: 10px;
  transition: all 0.3s;
`;


export const Boton = styled.div`
@keyframes pulse {
    0% {transform: scale(1);}
    50% {transform: scale(1.2);}
    100% {transform: scale(1);}
  }
    margin: 10px;
    border-radius: 50%;
    border: 1px solid black;
    background-color:aquamarine;
    width: 100px;
    height: 50px;
    font-family: cursive;
    animation-name: pulse;
    animation-duration:1s;
    animation-iteration-count: infinite;  `;

export const EstiloGeneral = styled.div`
  width: 80%;
  margin: 20px;
  text-align: center;
  position: relative;
  border: 7px solid #219ebc;
  border-radius: 30px;
  background-color: #8ecae6;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Tablero = styled(EstiloGeneral)`
  border-radius: 3px;
  border: 3px solid black;
  border-radius: 50px;
  width: 140px;
  font-width: 10px;
`;

function App() {

  //constantes para el nombre de usuario, el ganador de la partida y el estado de las pantallas seteado en 0
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [pantallas, setPantallas] = useState(0);
  const [ganador, setGanador] = useState("");

  //const asignarNombre = (nuevoNombre) => {
  //console.log(nuevoNombre)
  //setNombre(nuevoNombre);
  //setPlay(true);
  //console.log({nombre})

  //  const pasarSiguiente = (numero) => {
  //  setPantallas(numero);
  //};

  // const reset = (numero) => {
  // setPantallas(numero)
  // }

  //se compara pantalla para mostrar Saludo

  if (pantallas === 0){
    return (
      <Saludo 
        asignarNombre={(nombre) => {
          {
      //se muestra saludo en pantalla y se devuelve el valor de nombre para poder setearlo y asignarle a pantalla (1)
    } 
          setNombreUsuario(nombre);
          setPantallas(1);
        }}
      />
    );
    {
      //con pantalla en estado 1 se muertra la parte de Juego
    }
  } else if (pantallas == 1) {
    return (
      <Juego
        asignarNombre={nombreUsuario}
        resultado={(ganador) => {
          {
            //luego de determinar el ganador se devulve el mismo a travez de la funcion resultado para poder setearlo y setear pantalla 2
          }
          setGanador(ganador);
          setPantallas(2);
        }}
      />
    );
    {//con pantalla en estado 2 se muestra Resultado
    }
  } else if (pantallas == 2) {
    {
      //resultado muesta el ganador con un mensaje depende si ganas o perdes y permite volver a jugar a travez de un boton
    }
    return <Resultado ganador={ganador} reset={() => setPantallas(0)} />;
  }
}

export default App;
