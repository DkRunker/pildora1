import React from 'react'
import Formulario from './Formulario'
import Bloque from './Bloque'

function Caja() {
  let array = ["1","2","3"];
  let estiloCaja = {
    background: '#ece5dd',
    width: '600px',
    height: '880px',
    padding: '20px'
  };
let bloques = array.map(function(bloque, i){return <Bloque key={i} pregunta={bloque}/>})
  return (
    <div style={estiloCaja}>
      <Formulario />
      {bloques}
    </div>
  )
}

export default Caja

