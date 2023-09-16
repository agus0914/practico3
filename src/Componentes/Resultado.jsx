
//importando los styled Display EstiloGeneral y Boton
import { Display, EstiloGeneral, Boton } from "../App";

// se crea componente resultado que recibe el ganador y la funcion resetear para muestrar el mensaje depende si gana o pierde el usuario y setear la pantalla en 0 para volver a jugar
export function Resultado({ ganador, reset }) {
  console.log(Resultado);
  {//compara quien gano para mostrar su respectivo mensaje
  }
  if (ganador == "PC") {
    return (<Display>
    <EstiloGeneral>
      <p>
          Que lastima que te venza un programa que genera elecciones aleatorias,
          pero la suerte es asi. Poder intentarlo otra vez si lo quieres.
        </p>
        <Boton
        className="volverAJugar"
          onClick={() => {
            {// devuelve el valor 0 para setearlo en pantalla de App.
            }
            reset(0);
          }}
        >
          Volver a Jugar
        </Boton>
      </EstiloGeneral>
    
    </Display>
      );
        
  } else {
    return (
      <Display>
      <EstiloGeneral>
        <p>
          Que lastima que te venza un programa que genera elecciones aleatorias,
          pero la suerte es asi. Poder intentarlo otra vez si lo quieres.
        </p>
        <Boton
        className="volverAJugar"
          onClick={() => {
            reset(0);
          }}
        >
          Volver a Jugar
        </Boton>
      </EstiloGeneral>
      </Display>
    );
  }
}
