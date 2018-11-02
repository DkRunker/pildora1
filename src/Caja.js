import React, {Component} from 'react'
import Formulario from './Formulario'
import Bloque from './Bloque'
import whatsapp from './whatsapp.jpg'

class Caja extends Component{
  state = {
    preguntas:[]
  }
  addForm = (pregunta) => {
    let preguntas = [...this.state.preguntas, pregunta];
    this.setState({
      preguntas: preguntas
    })
  }
  render(){
    let estiloCaja = {
      backgroundImage: `url(${whatsapp})`,
      backgroundColor: '#ece5dd',
      width: '620px',
      height: '880px',
      paddingTop: '10px',
      paddingLeft: '5px',
      paddingRight: '5px',
      paddingBottom: '20px'
    };
    let bloques = this.state.preguntas.map((pregunta) =>
      <Bloque key={pregunta.texto} pregunta={pregunta.texto}/>
    )
    return (
      <div style={estiloCaja}>
        <Formulario addForm={this.addForm}/>
        {bloques}
      </div>
    )
  }
}

export default Caja

