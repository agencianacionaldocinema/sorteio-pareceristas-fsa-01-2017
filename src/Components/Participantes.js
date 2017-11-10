import React from 'react';
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const Participantes = ({ aberto, alterna, pareceristas }) => (
  <Modal isOpen={aberto} toggle={alterna} size={'lg'}>
    <ModalHeader toggle={alterna}>
      {pareceristas.length} profissionais habilitados
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
          {pareceristas &&
            pareceristas.map((parecerista, indice) => {
              return (
                <tr key={indice}>
                  <td>{parecerista['Inscrição']}</td>
                  <td>{parecerista['CPF']}</td>
                  <td>{parecerista['Nome']}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </ModalBody>
    <ModalFooter>
      <Button color="secondary" onClick={alterna}>
        Fechar
      </Button>
    </ModalFooter>
  </Modal>
);

export default Participantes;
