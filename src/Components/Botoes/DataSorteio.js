import React from 'react';
import { Card, Form, FormGroup, Input } from 'reactstrap';

const DataSorteio = ({ value, onChange }) => (
  <Card>
    <Form>
      <FormGroup>
        <Input
          type="text"
          name="semente"
          id="semente"
          placeholder="Digite a data e hora no formato dd/mm/aaaa hh:mm:ss"
          value={value}
          onChange={onChange}
        />
      </FormGroup>
    </Form>
  </Card>
);

export default DataSorteio;
