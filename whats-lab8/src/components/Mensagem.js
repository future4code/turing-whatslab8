import React from 'react'
import styled from 'styled-components'

const DivMensagem = styled.div
`
    margin: 20px 10px;
    display: flex;
`

const NomeUsuario = styled.div
`
    font-weight: bold;
    margin-right: 5px;
`

class Mensagem extends React.Component {
    render () {

        return (
        <DivMensagem>
            <NomeUsuario>{this.props.nomeUsuario}: </NomeUsuario>
            {this.props.mensagemUsuario}
        </DivMensagem>
        )

    }
}

export default Mensagem