import React, { Component } from 'react';
import { Container } from 'reactstrap';
import pareceristas from './utils/pareceristas';
import jssha from 'jssha';
import seedrandom from 'seedrandom'; // eslint-disable-line no-unused-vars
import { getRandomInt, baixeResultados } from './utils/util';
import Header from './Components/Header';
import Botoes from './Components/Botoes';
import Participantes from './Components/Participantes';
import Sorteados from './Components/Sorteados';
import If from './Components/If';
import * as l from './utils/log';

class App extends Component {
  state = {
    sha: new jssha('SHA3-512', 'TEXT'),
    exibeParticipantes: false,
    sorteados: [],
    dataSorteio: null
  };

  alternaExibicaoParticipantes = () => {
    this.setState(currentState => ({
      exibeParticipantes: !currentState.exibeParticipantes
    }));
  };

  sorteia = dataSorteio => {
    const sorteados = [];
    let log = '';
    if (!dataSorteio) {
      dataSorteio = new Date(Date.now()).toLocaleString();
    }
    this.state.sha.update(dataSorteio + JSON.stringify(pareceristas));
    const semente = this.state.sha.getHash('HEX');
    Math.seedrandom(semente);
    log += l.logParametros(dataSorteio, pareceristas, semente);
    while (sorteados.length < pareceristas.length) {
      const posicaoSorteada = getRandomInt(0, pareceristas.length);
      const sorteado = pareceristas[posicaoSorteada];
      log += l.logSorteio(posicaoSorteada, sorteado);
      if (!sorteado.jaSorteado) {
        sorteados.push(sorteado);
        pareceristas[posicaoSorteada].jaSorteado = true;
        log += l.logPareceristaAdicionado();
      } else {
        log += l.logPareceristaNaoAdicionado();
      }
    }
    log += l.logLista('Lista sorteados', sorteados);
    baixeResultados(sorteados, log, dataSorteio);
    this.setState({
      sorteados,
      dataSorteio
    });
  };

  render() {
    const { exibeParticipantes, sorteados, dataSorteio } = this.state;
    return (
      <Container>
        <Header />
        <Botoes
          sorteia={this.sorteia}
          alternaExibicaoParticipantes={this.alternaExibicaoParticipantes}
        />
        <Participantes
          aberto={exibeParticipantes}
          alterna={this.alternaExibicaoParticipantes}
          pareceristas={pareceristas}
        />
        <If test={sorteados.length > 0}>
          <Sorteados dados={sorteados} dataSorteio={dataSorteio} />
        </If>
      </Container>
    );
  }
}

export default App;
