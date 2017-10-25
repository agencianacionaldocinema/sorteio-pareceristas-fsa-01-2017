import React, { Component } from 'react';
import { Container } from 'reactstrap';
import pareceristas from './pareceristas';
import jssha from 'jssha';
import seedrandom from 'seedrandom'; // eslint-disable-line no-unused-vars
import { getRandomInt, baixeResultados } from './util';
import { logParametros, logSorteio, logLista, logPareceristaAdicionado, logPareceristaNaoAdicionado } from './log';
import Header from './Header';
import Botoes from './Botoes';
import Participantes from './Participantes';
import Sorteados from './Sorteados';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sha: new jssha("SHA3-512", "TEXT"),
      exibeParticipantes: false,
      sorteados: [],
      dataSorteio: null
    };

    this.alternaExibicaoParticipantes = this.alternaExibicaoParticipantes.bind(this);
    this.sorteia = this.sorteia.bind(this);
  }

  alternaExibicaoParticipantes() {
    this.setState({
      exibeParticipantes: !this.state.exibeParticipantes
    });
  }

  sorteia(dataSorteio) {
    const sorteados = [];
    let log = "";
    if(!dataSorteio) {
      dataSorteio = new Date(Date.now()).toLocaleString();
    }
    this.state.sha.update(dataSorteio + JSON.stringify(pareceristas));
    const semente = this.state.sha.getHash("HEX");
    Math.seedrandom(semente);
    log += logParametros(dataSorteio, pareceristas, semente);
    while(sorteados.length < pareceristas.length) {
      const posicaoSorteada = getRandomInt(0, pareceristas.length);
      const sorteado = pareceristas[posicaoSorteada];
      log += logSorteio(posicaoSorteada, sorteado);
      if(!sorteado.jaSorteado) {
        sorteados.push(sorteado)
        pareceristas[posicaoSorteada].jaSorteado = true;
        log += logPareceristaAdicionado();        
      } else {
        log += logPareceristaNaoAdicionado();        
      }
    }
    log += logLista("Lista sorteados", sorteados);
    baixeResultados(sorteados, log, dataSorteio);
    this.setState({
      sorteados,
      dataSorteio
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Botoes sorteia={this.sorteia} alternaExibicaoParticipantes={this.alternaExibicaoParticipantes} />
        <Participantes aberto={this.state.exibeParticipantes}  alterna={this.alternaExibicaoParticipantes}  pareceristas={pareceristas} />
        <Sorteados dados={this.state.sorteados} dataSorteio={this.state.dataSorteio} />
      </Container>
    );
  }
}

export default App;
