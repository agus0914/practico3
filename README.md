# Piedra, Papel y Tijera en React

Este es un proyecto que recrea el tipico juego de "Piedra Papel o Tijera" en una pagina web.

---
## Comenzando 🚀

Este proyecto se realizó como Trabajo Practico N°1 del Proyecto "Argentina Programa 4.0", en el curso de "Programación Web Front-End" segunda parte "Paginas Web con Componentes Dinamicos" de la Universidad Nacional de Cordoba a travez de la Facultad de Matematica, Astronomia, Fisica y Computacion. El docente a cargo : profesor Ignacio Moretti y ayudante de practicas Nehuen Aramburu.

---
### Pre-requisitos 📋

No requiere ningun tipo de instalación ya que todo corre sobre una pagina de protocolo de html5. Solo se necesita contar con algun navegador web que pueda reproducir los archivos.

---
### Metodologia de juego

En su pagina unicial se muestra un mensaje de bienvenida y una breve aclaracion sobre que el juego se define al mejor de 5 partidas. Seguido se encuentra un input para poder ingresar el nombre con su boton "OK" para confirmarlo.Luego de presionarlo, se muestra otra pantalla donde se encuentra el tablero con el nombre del usuario y la PC que marcaran los puntos ganados en cada ronda. Se muestran los tres botones invitando a seleccionar una de las 3, mostrando automaticamente los resultados de la ronda. Se actualizan los valores del tablero hasta que alguno llegue a 3 puntos, para mostrar otra pantalla con el mensaje de victoria o derrota segun corresponda. Por ultimo se habilita el boton de "Volver a jugar" para volver a la pantalla principal.

---
## Pruebas de errores 

A través de la interfaz del usuario se podran enviar mensajes de advertencias o errores.
- Si el usuario no ingresó ningun nombre o solo ingreso espacio en blanco y presiona el boton "OK" se envia el siguiente mensaje por consola : ***"Por favor ingrese su nombre y luego presione OK"***

---
### Ejecutando prueba. ⚙️

## Prueba de una partida.
```
Ronda 1 = Usuario : Piedra, PC : Piedra, Resultado : Empate.

Ronda 2 = Usuario : Papel, PC : Tijera, Resultado : ganador PC.

Ronda 3 = Usuario : Tijera, PC : Papel,  Resultado : ganador Usuario.

Ronda 4 = Usuario : Piedra, PC : Piedra, Resultado : Empate.

Ronda 5 = Usuario : Piedra, PC : Papel,  Resultado : ganador PC.

Ronda 6 = Usuario : Piedra, PC : Tijera, Resultado : ganador Usuario.

Ronda 7 = Usuario : Papel, PC : Piedra,  Resultado : ganador Usuario.

Ganador Final Usuario.

--- 

## Construido con 🛠️

Editado con Visual Studio Code, realizado con React.js y con Styled Component para el estilo de la pagina.


## Autores ✒️

- Autor : Agustin Leonardo Perez
- Colaboradores : Este fue un trabajo de varios dias de investigacion y pruebas, donde todas las dudas o problemas que fueron surgiendo se trabajaron tanto en clase con el profesor, como en las prácticas con el ayudante de prácticas y mis compañeros de cursada.