import React, { Component } from 'react';
import { Card, Form, FormGroup, Input } from 'reactstrap';

class DataSorteio extends Component {
  render() {
    return (
      <Card>
        <Form>
          <FormGroup>
            <Input
              type="text"
              name="semente"
              id="semente"
              placeholder="Digite a data e hora no formato dd/mm/aaaa hh:mm:ss"
              value={this.props.value}
              onChange={this.props.onChange}
            />
          </FormGroup>
        </Form>
      </Card>
    );
  }
}

export default DataSorteio;
