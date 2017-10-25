import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Sorteados extends Component {

  render() {
    const { dados, dataSorteio } = this.props;
    return (
      dados.length > 0 &&
      <div>
        <strong>Sorteio realizado em {dataSorteio}</strong>
        <Table>
          <thead>
            <tr>
              <th>Ordem</th>
              <th>Inscrição</th>
              <th>CPF</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody>
            { 
              dados.map((sorteado, indice) => {
                return (
                  <tr key={indice}>
                    <th scope="row">{indice+1}</th>
                    <td>{sorteado['Inscrição']}</td>
                    <td>{sorteado['CPF']}</td>
                    <td>{sorteado['Nome']}</td>
                  </tr>

                )
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Sorteados;
