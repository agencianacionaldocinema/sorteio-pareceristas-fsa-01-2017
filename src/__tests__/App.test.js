import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

it('teste de fumaça no App principal', () => {
  const div = document.createElement('div');
  const wrapper = ReactDOM.render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
});

it('teste de fumaça no página de resultado', () => {
  const div = document.createElement('div');
  global.URL.createObjectURL = jest.fn();
  global.URL.revokeObjectURL = jest.fn();
  const wrapper = ReactDOM.render(
    <MemoryRouter
      initialEntries={['/resultado/11.11.1111_11:11:11']}
      initialIndex={0}
    >
      <App />
    </MemoryRouter>,
    div
  );
  expect(global.URL.createObjectURL).toHaveBeenCalledTimes(2);
  expect(global.URL.revokeObjectURL).toHaveBeenCalledTimes(2);
});

it('deve listar participantes', () => {
  const div = document.createElement('div');
  global.URL.createObjectURL = jest.fn();
  global.URL.revokeObjectURL = jest.fn();
  const wrapper = ReactDOM.render(
    <MemoryRouter initialEntries={['/participantes']} initialIndex={0}>
      <App />
    </MemoryRouter>,
    div
  );
});

it('deve apresentar painel para sorteio', () => {
  const div = document.createElement('div');
  global.URL.createObjectURL = jest.fn();
  global.URL.revokeObjectURL = jest.fn();
  const wrapper = ReactDOM.render(
    <MemoryRouter initialEntries={['/sorteio']} initialIndex={0}>
      <App />
    </MemoryRouter>,
    div
  );
});

it('deve apresentar painel para auditoria', () => {
  const div = document.createElement('div');
  global.URL.createObjectURL = jest.fn();
  global.URL.revokeObjectURL = jest.fn();
  const wrapper = ReactDOM.render(
    <MemoryRouter initialEntries={['/auditoria']} initialIndex={0}>
      <App />
    </MemoryRouter>,
    div
  );
});
