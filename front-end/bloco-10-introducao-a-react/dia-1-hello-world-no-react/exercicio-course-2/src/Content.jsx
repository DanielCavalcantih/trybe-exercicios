import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <ol key={conteudos}>
        {conteudos.map((conteudo) => {
          return (
              <li key={conteudo.conteudo} className={'itemLista'}>
                O conteúdo é: {conteudo.conteudo}<br></br>
                Status: {conteudo.status}<br></br>
                Bloco: {conteudo.bloco}<br></br>
              </li>
          )
        })}
      </ol>
    )
  }
}

export default Content;