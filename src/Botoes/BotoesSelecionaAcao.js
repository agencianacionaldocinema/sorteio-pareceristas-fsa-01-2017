import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

class BotoesSelecionaAcao extends Component {
  render() {
    const { onSorteioClick, onAuditoriaClick } = this.props;
    return (
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
  }
}

export default BotoesSelecionaAcao;
