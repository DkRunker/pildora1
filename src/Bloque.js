import React from 'react'
import Pregunta from './Pregunta';
import Respuesta from './Respuesta';

function Bloque(props) {
  return (
    <div>
      <Pregunta pregunta={props.pregunta}/>
      <br/>
      <Respuesta />
      <br/>
    </div>
  )
}

export default Bloque
