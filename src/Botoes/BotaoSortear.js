import React, { Component } from 'react';
import { Card, Button } from 'reactstrap';

class BotaoSortear extends Component {
  render() {
    return (
      <Card>
        <Button color="primary" onClick={this.props.onClick}>
          Sortear ordem de credenciamento
        </Button>
      </Card>
    );
  }
}

export default BotaoSortear;
