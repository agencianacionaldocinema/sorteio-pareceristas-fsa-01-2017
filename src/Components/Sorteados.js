import React from 'react';
import { Table } from 'reactstrap';

const Sorteados = ({ dados, dataSorteio }) => (
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
        {dados.map((sorteado, indice) => {
          return (
            <tr key={indice}>
              <th scope="row">{indice + 1}</th>
              <td>{sorteado['Inscrição']}</td>
              <td>{sorteado['CPF']}</td>
              <td>{sorteado['Nome']}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </div>
);

export default Sorteados;
