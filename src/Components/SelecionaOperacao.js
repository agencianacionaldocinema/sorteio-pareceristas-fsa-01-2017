import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'reactstrap';

const SelecionaOperacao = () => (
  <div>
    <Link to="/sorteio">
      <Card>
        <Button color="success">Realizar sorteio</Button>
      </Card>
    </Link>
    <br />
    <br />
    <Link to="/auditoria">
      <Card>
        <Button color="danger">Realizar auditoria</Button>
      </Card>
    </Link>
  </div>
);

export default SelecionaOperacao;
