import React from 'react';
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import participantes from '../participantes';

const Participantes = ({ history }) => (
  <Modal isOpen toggle={() => history.push('/sorteio')} size={'lg'}>
    <ModalHeader toggle={() => history.push('/sorteio')}>
      {participantes.length} profissionais habilitados
    </ModalHeader>
    <ModalBody>
      <Table>
        <thead>
          <tr>
            <th>Inscrição</th>
            <th>CPF</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          {participantes &&
            participantes.map((participante, indice) => {
              return (
                <tr key={indice}>
                  <td>{participante['Inscrição']}</td>
                  <td>{participante['CPF']}</td>
                  <td>{participante['Nome']}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={() => history.push('/sorteio')}>
        Fechar
      </Button>
    </ModalFooter>
  </Modal>
);

export default Participantes;
