//importando styled y los estylos necesarios

import styled from "styled-components";
import { Display, EstiloGeneral } from "../App";

//creando constantes de estilos para los botones de jugadas
const ImagenesBoton = styled.button`
  border-radius: 50%;
  border-color: transparent;
  background-color: transparent;
  width: 200px;
  height: 200px;
  margin: px;
  transition: all 0.3s;
`;
const Imagen = styled.img`
  border-radius: 50%;
  border: 5px solid black;
  height: 250px;
`;
 
//creando el componente Boton y exportado para que sera usado en otra parte

export function Boton({ Tipo, id, jugada }) {
  // const [jugadaUsuario, setJugadaUsuario] = useState("");

  // const asignarBoton = () => {
  // setJugadaUsuario(id);
  // jugada(jugadaUsuario)
  // jugada(id);
  //}
 

  //devuelve un Boton con su styled que devuelve la jugada elegida y la jugada aleatoria de la PC
  return (
    <Display>
      <ImagenesBoton
        className="boton"
        onClick={() => {
          jugada(id, Math.round(Math.random() * 2));
          //console.log("el id del boton es "+ id + " y la jugadaUsuario es " + jugadaUsuario)
          // jugada(jugadaUsuario);
          //  console.log("la jugada del usuario es " + jugadaUsuario)
        }}
      >
        <Imagen className="imagen" src={Tipo} alt={id} />
      </ImagenesBoton>
    </Display>
  );
}

//componente mensaje que devuelve las jugadas y el resultado de esas jugadas

export function Mensaje({ jugadaPC, jugadaU, ronda }) {
  return (
    <Display>
      <EstiloGeneral>
        <p>El Usuario eligio: {jugadaU} </p>
        <p>La PC eligio: {jugadaPC}</p>
        <p>El resultado es: {ronda}</p>
      </EstiloGeneral>
    </Display>
  );
}
