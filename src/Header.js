import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import logo from './ancine-logo.jpg';

class Header extends Component {
  render() {
    return (
      <header>
        <Row>
          <Col sm="4" lg="4">
            <br />
            <img
              src={logo}
              alt="logo"
              style={{ height: '121px', width: '341px' }}
            />
          </Col>
          <Col sm="8" lg="8">
            <br />
            <br />
            <h4>Sorteio público para definição da ordem de credenciamento</h4>
            <p>
              Edital de credenciamento de pareceristas para chamadas públicas
              FSA nº 01/2017
              <br />Auditório da Agência Nacional do Cinema
              <br />Data: {new Date(Date.now()).toLocaleDateString()}
            </p>
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </header>
    );
  }
}

export default Header;
