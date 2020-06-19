import React from 'react';
import Mensagem from './components/Mensagem'
import styled from 'styled-components'

const DivJanela = styled.div
`
    min-height: 80vh;
    width: 70vw;
    border: 1px solid black;
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 15px;
`

const DivBotao = styled.div
`
  margin: 0 auto;
  text-align: center;
  display: flex;
  width: 70vw;
`

const Botao = styled.button
`
  width: 10vw;
  border-style: none;
  background-color: #87CEEB;
  color: white;
  border-radius: 5px;
`

const EntradaNomeUsuario = styled.input
`
  width: 20vw;
  margin-right: 1vw;
`

const EntradaMensagem = styled.input
`
  width: 40vw;
  margin-right: 1vw;
`


class App extends React.Component {

  state = {
    listaDeMensagens: [],
    identificador: 0,
    valorInputUsuario: "",
    valorInputMensagem: "",
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value })
  }

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value })
  }

  teclaEnter = (event) => {
    const x = event.key
    if (x === "Enter") {
      this.adicionaMensagem(this.listaDeMensagens)
    }
  }

  adicionaMensagem = (listaDeMensagens) => {

    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
      identificador: this.state.identificador++
    }

    const novaListaDeMensagens = [...this.state.listaDeMensagens, novaMensagem];

    this.setState({listaDeMensagens: novaListaDeMensagens}, )

    this.setState({ valorInputMensagem: "" })

  }

  render() {

    return (

      <div>

        <DivJanela>

        {this.state.listaDeMensagens.map ((mensagem)  => {
          return <Mensagem key={mensagem.identificador}
          nomeUsuario={mensagem.usuario}
          mensagemUsuario={mensagem.mensagem}
          />
          })}

        </DivJanela>
  
        <DivBotao>

          <EntradaNomeUsuario
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
    
          <EntradaMensagem onKeyUp={this.teclaEnter}
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
    
          <Botao onClick={this.adicionaMensagem}>ENVIAR</Botao>

        </DivBotao>

      </div>

      )
}
}

export default App;
