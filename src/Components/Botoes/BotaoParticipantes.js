import React from 'react';
import { Card, Button } from 'reactstrap';

const BotaoParticipantes = ({ onClick }) => (
  <Card>
    <Button color="info" onClick={onClick}>
      Apresentar profissionais habilitados
    </Button>
  </Card>
);

export default BotaoParticipantes;
