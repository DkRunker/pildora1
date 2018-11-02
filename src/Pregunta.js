import React from 'react'

function Pregunta(props) {
  let estiloPregunta = {
    backgroundColor: '#dcf8c6',
    padding: '10px',
    width: '400px',
    marginLeft: '195px',
    borderRadius: '8px',
  }
  return (
    <div style={estiloPregunta}>
      <div>{props.pregunta}</div>
    </div>
  )
}

export default Pregunta
