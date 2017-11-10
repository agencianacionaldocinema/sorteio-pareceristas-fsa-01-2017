import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from './Components/Header';
import If from './Components/If';
import SelecionaOperacao from './Components/SelecionaOperacao';
import BotaoParticipantes from './Components/BotaoParticipantes';
import BotaoSortear from './Components/BotaoSortear';
import DataSorteio from './Components/DataSorteio';
import Participantes from './Components/Participantes';
import Sorteados from './Components/Sorteados';

import sortear from './utils/sorteio';

class App extends Component {
  state = {
    modoOperacao: null,
    exibeParticipantes: false,
    momentoSorteio: '',
    sorteados: []
  };

  selecionaSorteio = () => {
    this.setState({ modoOperacao: 'sorteio' });
  };

  selecionaAuditoria = () => {
    this.setState({ modoOperacao: 'auditoria' });
  };

  alternaExibicaoParticipantes = () => {
    this.setState(currentState => ({
      exibeParticipantes: !currentState.exibeParticipantes
    }));
  };

  atualizaMomentoSorteio = momentoSorteio => {
    this.setState({
      momentoSorteio
    });
  };

  sorteia = () => {
    const momentoSorteio = new Date(Date.now()).toLocaleString();
    const sorteados = sortear(momentoSorteio);
    this.setState({
      sorteados,
      momentoSorteio
    });
  };

  audita = () => {
    const { momentoSorteio } = this.state;
    const sorteados = sortear(momentoSorteio);
    this.setState({
      sorteados,
      momentoSorteio
    });
  };

  render() {
    const {
      modoOperacao,
      exibeParticipantes,
      sorteados,
      momentoSorteio
    } = this.state;
    return (
      <Container>
        <Header />
        <If test={!modoOperacao}>
          <SelecionaOperacao
            onSorteioClick={this.selecionaSorteio}
            onAuditoriaClick={this.selecionaAuditoria}
          />
        </If>
        <If test={modoOperacao}>
          <If test={sorteados.length === 0}>
            <div>
              <BotaoParticipantes onClick={this.alternaExibicaoParticipantes} />
              <br />
              <br />
              <If test={modoOperacao === 'auditoria'}>
                <DataSorteio
                  value={momentoSorteio}
                  onChange={e =>
                    this.atualizaMomentoSorteio(e.target.value.trim())}
                />
                <BotaoSortear onClick={this.audita} />
              </If>
              <If test={modoOperacao === 'sorteio'}>
                <BotaoSortear onClick={this.sorteia} />
              </If>
            </div>
          </If>
        </If>
        <Participantes
          aberto={exibeParticipantes}
          alterna={this.alternaExibicaoParticipantes}
        />
        <If test={sorteados.length > 0}>
          <Sorteados dados={sorteados} dataSorteio={momentoSorteio} />
        </If>
      </Container>
    );
  }
}

export default App;
