import React, { Component } from 'react'

export class Formulario extends Component {
  state = {
    texto: ''
  }

  isNullOrWhiteSpace = (elemento) => {
    return elemento.replace(/\s/g, '').length < 1;
  }
  handleChange = (e) => {
    this.setState({
      texto: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let elemento = this.isNullOrWhiteSpace(this.state.texto);
    if(!elemento){
      this.props.addForm(this.state);
      this.setState({
        texto:''
      })
    }
  }

  render() {
    const estiloFormulario = {
      marginTop: '20px',
      marginBottom: '10px',
      width: '616px'
    }
    return (
      <div>
        <form style={estiloFormulario} onSubmit={this.handleSubmit}>
          <input style={{width: '512px', height: '28px'}} type="text" id="texto" 
            onChange={this.handleChange} value={this.state.texto}
          />
          <input style={{width: '100px', height: '34px'}} type="submit" value="Enviar"/>
        </form>
      </div>
    )
  }
}

export default Formulario
