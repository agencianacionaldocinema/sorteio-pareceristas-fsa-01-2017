import React from 'react';
import { Card, Button } from 'reactstrap';

const BotoesSelecionaAcao = ({ onSorteioClick, onAuditoriaClick }) => (
  <div>
    <Card>
      <Button color="success" onClick={onSorteioClick}>
        Realizar sorteio
      </Button>
    </Card>
    <br />
    <br />
    <Card>
      <Button color="danger" onClick={onAuditoriaClick}>
        Realizar auditoria
      </Button>
    </Card>
  </div>
);

export default BotoesSelecionaAcao;
