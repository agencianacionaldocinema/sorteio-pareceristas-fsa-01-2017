import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

class BotaoParticipantes extends Component {
  render() {
    return (
      <Card>
        <Button color="info" onClick={this.props.onClick}>
          Apresentar profissionais habilitados
        </Button>
      </Card>
    );
  }
}

export default BotaoParticipantes;
