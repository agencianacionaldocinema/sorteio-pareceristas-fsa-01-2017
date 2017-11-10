import React from 'react';
import { Card, Button } from 'reactstrap';

const BotaoSortear = ({ onClick }) => (
  <Card>
    <Button color="primary" onClick={onClick}>
      Sortear ordem de credenciamento
    </Button>
  </Card>
);

export default BotaoSortear;
