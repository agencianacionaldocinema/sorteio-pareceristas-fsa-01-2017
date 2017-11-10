import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('deve apresentar participantes e sortear', () => {
  const div = document.createElement('div');
  const wrapper = ReactDOM.render(<App />, div);
  global.URL.createObjectURL = jest.fn();
  global.URL.revokeObjectURL = jest.fn();

  wrapper.alternaExibicaoParticipantes();
  wrapper.sorteia('11/11/2011 11:11:11');
  expect(global.URL.createObjectURL).toHaveBeenCalledTimes(2);
  expect(global.URL.revokeObjectURL).toHaveBeenCalledTimes(2);
});
