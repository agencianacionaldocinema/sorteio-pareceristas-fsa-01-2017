import React, { Component } from 'react';
import { Card, Button, Form, FormGroup, Input } from 'reactstrap';

class Botoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSorteio: '',
      selecionado: null,
      sorteado: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.selecionaAcao = this.selecionaAcao.bind(this);
    this.sortear = this.sortear.bind(this);
  }

  handleChange(event) {
    this.setState({dataSorteio: event.target.value});
  }

  selecionaAcao(acao) {
    this.setState({ selecionado: acao });
  }

  sortear() {
    this.props.sorteia(this.state.dataSorteio);
    this.setState({ sorteado: true });
  }

  render() {
    if(!this.state.selecionado) {
      return (
        <BotoesSelecionaAcao onClick={this.selecionaAcao} />
      );
    } else {
      if(!this.state.sorteado) {
        const { sorteia, alternaExibicaoParticipantes } = this.props;
        return (
          <div>
            { this.state.selecionado !== "" &&
              <BotaoParticipantes onClick={alternaExibicaoParticipantes} />
            }
            <br />
            <br />

            { this.state.selecionado === "auditoria" &&
              <DataSorteio value={this.state.dataSorteio}  onChange={this.handleChange} />
            }
            <BotaoSortear onClick={this.sortear} />
            <br />
            <br />
          </div>
        );
      } else {
        return null;
      }
    }
  }
}

export default Botoes;



class BotaoParticipantes extends Component {
  render() {
    return (
      <Card>
        <Button color="info" onClick={this.props.onClick}>Apresentar profissionais habilitados</Button>
      </Card>
    );
  }
};

class BotaoSortear extends Component {
  render() {
    return (
      <Card>
        <Button color="primary" onClick={this.props.onClick}>Sortear ordem</Button>
      </Card>
    );
  }
};

class DataSorteio extends Component {
  render() {
    return (
      <Card>
        <Form>
          <FormGroup>
            <Input type="text" name="semente" id="semente" placeholder="Digite a data e hora no formato dd/mm/aaaa hh:mm:ss"  value={this.props.value} onChange={this.props.onChange} />
          </FormGroup>
        </Form>
      </Card>
    );
  }
};

class BotoesSelecionaAcao extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
          <Card>
            <Button color="success" onClick={ () => onClick("sorteio") }>Realizar sorterio</Button>
          </Card>
          <br />
          <br />
          <Card>
            <Button color="danger" onClick={ () => onClick("auditoria") }>Realizar auditoria</Button>
          </Card>
        </div>
    );
  }
};
