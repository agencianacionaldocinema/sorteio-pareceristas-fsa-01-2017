import React, { Component } from 'react';
import { Button, Card, Form, FormGroup, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';

class BotaoAuditar extends Component {
  state = {
    momentoSorteio: ''
  };

  atualizaMomentoSorteio = momentoSorteio => {
    this.setState({
      momentoSorteio
    });
  };

  render() {
    const { momentoSorteio } = this.state;
    const { history } = this.props;
    return (
      <div>
        <Card>
          <Form>
            <FormGroup>
              <Input
                type="text"
                placeholder="Digite a data e hora no formato dd.mm.aaaa_hh:mm:ss"
                value={momentoSorteio}
                onChange={e =>
                  this.atualizaMomentoSorteio(e.target.value.trim())}
              />
            </FormGroup>
          </Form>
        </Card>
        <Card>
          <Button
            color="danger"
            onClick={() => history.push(`/resultado/${momentoSorteio}`)}
          >
            Auditar sorteio de ordem de credenciamento
          </Button>
        </Card>
      </div>
    );
  }
}

export default withRouter(BotaoAuditar);
