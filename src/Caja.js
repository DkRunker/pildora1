import React from 'react'
import Formulario from './Formulario'
import Bloque from './Bloque'

function Caja() {
  let estiloCaja = {
    background: '#ece5dd',
    width: '600px',
    height: '850px',
    padding: '20px'
  }
  return (
    <div style={estiloCaja}>
      <Formulario />
      <Bloque />
    </div>
  )
}

export default Caja

