import React, { Component } from 'react';
import BotaoParticipantes from './BotaoParticipantes';
import BotaoSortear from './BotaoSortear';
import DataSorteio from './DataSorteio';
import BotoesSelecionaAcao from './BotoesSelecionaAcao';
import If from './If';

class Botoes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSorteio: '',
      selecionado: null,
      sorteado: false
    };

    this.informaData = this.informaData.bind(this);
    this.selecionaSorteio = this.selecionaSorteio.bind(this);
    this.selecionaAuditoria = this.selecionaAuditoria.bind(this);
    this.sortear = this.sortear.bind(this);
  }

  informaData(event) {
    this.setState({ dataSorteio: event.target.value });
  }

  selecionaSorteio() {
    this.setState({ selecionado: 'sorteio' });
  }

  selecionaAuditoria() {
    this.setState({ selecionado: 'auditoria' });
  }

  sortear() {
    this.props.sorteia(this.state.dataSorteio);
    this.setState({ sorteado: true });
  }

  render() {
    const { alternaExibicaoParticipantes } = this.props;
    return (
      <div>
        <If test={!this.state.selecionado}>
          <BotoesSelecionaAcao
            onSorteioClick={this.selecionaSorteio}
            onAuditoriaClick={this.selecionaAuditoria}
          />
        </If>
        <If test={this.state.selecionado}>
          <If test={!this.state.sorteado}>
            <div>
              <BotaoParticipantes onClick={alternaExibicaoParticipantes} />
              <br />
              <br />
              <If test={this.state.selecionado === 'auditoria'}>
                <DataSorteio
                  value={this.state.dataSorteio}
                  onChange={this.informaData}
                />
              </If>
              <BotaoSortear onClick={this.sortear} />
            </div>
          </If>
        </If>
      </div>
    );
  }
}

export default Botoes;
