import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from './Components/Header';
import SelecionaOperacao from './Components/SelecionaOperacao';
import Participantes from './Components/Participantes';
import PainelSorteio from './Components/PainelSorteio';
import PainelAuditoria from './Components/PainelAuditoria';
import Resultado from './Components/Resultado';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Route exact path="/" component={SelecionaOperacao} />
        <Route path="/sorteio" component={PainelSorteio} />
        <Route path="/auditoria" component={PainelAuditoria} />
        <Route path="/participantes" component={Participantes} />
        <Route path="/resultado/:momentoSorteio" component={Resultado} />
      </Container>
    );
  }
}

export default App;
