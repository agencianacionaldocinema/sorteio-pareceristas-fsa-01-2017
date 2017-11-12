import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Button } from 'reactstrap';

const geraURLMomentoSorteio = () => {
  const momento = new Date(Date.now()).toLocaleString();
  const momentoNormalizado = momento.replace(/\//g, '.').replace(/ /g, '_');
  const url = `/resultado/${momentoNormalizado}`;
  return url;
};

const BotaoSortear = ({ history }) => (
  <Card>
    <Button
      color="primary"
      onClick={() => history.push(geraURLMomentoSorteio())}
    >
      Sortear ordem de credenciamento
    </Button>
  </Card>
);

export default withRouter(BotaoSortear);
