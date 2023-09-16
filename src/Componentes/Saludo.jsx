//importando los styled State

import { useState } from "react";
import { EstiloGeneral , Display, Boton} from "../App";
import styled from "styled-components";

//creando styled de input
const InputNombre = styled.input`
border: 0 ;
    border-radius: 5px;
    border: 2px solid black;
    padding: 10px;
    margin: 10px;
`;

//componente saludo que muestra mensaje de bienvenida explicando el juego y un input para el nombre con un boton para vconfirmar

export function Saludo({ asignarNombre }) {
  const [nombre, setNombre] = useState("El Usuario No Ingreso Ningun Nombre");

  const [alerta, setAlerta] = useState("");
  //const mandarNombre = (nombre) => {
  //asignarNombre(nombre);
  //console.log("mandando nombre")
  //};

  //funcion que cambia el nombre ante cualquier cambio

  const cambiarNombre = (e) => {
  setNombre(e.target.value);
  console.log("cambiar");
   console.log({ nombre });
  };

  //funcion que devuelve mensaje de alerta antes un error en el nombre

  const mandarAlerta = (Mensaje) => {
    setAlerta(Mensaje);
  };

  //fucion que verifica cualquier error en el nombre antes de setearlo 

  const verificar = (nombreUsuario) => {
    if (
      nombreUsuario.trim() === "" ||
      nombreUsuario === "El Usuario No Ingreso Ningun Nombre"
    ) {
      return mandarAlerta("Por favor ingrese su nombre y luego presione OK");
    } else {
      return asignarNombre(nombre);
    }
  };

  return (
    <Display>
    {//mensaje de bienvenida 
    }
      <EstiloGeneral>
      <div>
        <h1>Piedra, Papel, Tijera</h1>
        <p>
          En esta opotunidad competiras contra una computadora y el ganador se
          define al mejor de 5 rondas.
        </p>
        <p>Buena Suerte!</p>
      </div>
      <div>
        <p>Ingrese su nombre y luego presione OK</p>
        {//input para que ingrese el nombre llamando a la funcion cambiarNombre ante cada cambio
        }
        <InputNombre
          className="inputNombre"
          id="inputNombre"
          type="text"
          placeholder="Ingrese su nombre aqui"
          onChange={cambiarNombre}
        />
        {//boton para confirmar nombre que llama a la funcion verificar con el nombre como parametro
        }
        <Boton
          className="botonNombre"
          id="botonNombre"
          onClick={() => {
            //setNombre(document.getElementById("inputNombre").value);
            console.log(nombre)
            verificar(nombre);
          }}
        >
          OK
        </Boton>
        {
          //espacio para devolver el mesaje alerta en un parrafo
        }
        <p> {alerta} </p>
      </div>
    </EstiloGeneral>
    </Display>
    
  );
}
