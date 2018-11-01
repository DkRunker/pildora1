import React from 'react'

function Pregunta(props) {
  let estiloPregunta = {
    background: '#dcf8c6',
    padding: '10px',
    width: '300px',
    marginLeft: '280px',
  }
  return (
    <div style={estiloPregunta}>
      <div>{props.pregunta}</div>
    </div>
  )
}

export default Pregunta
