import React from 'react';
import { Row, Col } from 'reactstrap';
import logo from './ancine-logo.jpg';

const Header = () => (
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
          Edital de credenciamento de pareceristas para chamadas públicas FSA nº
          01/2017
          <br />Rua Teixeira de Freitas, 31 - 4o andar
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

export default Header;
