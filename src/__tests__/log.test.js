import {
  logParametros,
  logSorteio,
  logPareceristaAdicionado,
  logPareceristaNaoAdicionado
} from '../log';

it('loga corretamente parametros sorteio', () => {
  const pareceristas = [
    { Inscrição: '123', CPF: '888.888.888-88', Nome: 'Parecerista xyz' }
  ];
  expect(
    logParametros('11/11/2011 11:11:11', pareceristas, 'semente1234')
  ).toMatchSnapshot();
});

it('loga corretamente sorteio', () => {
  const sorteado = {
    Inscrição: '123',
    CPF: '888.888.888-88',
    Nome: 'Parecerista xyz'
  };
  expect(logSorteio(123, sorteado)).toMatchSnapshot();
  expect(logPareceristaAdicionado()).toMatchSnapshot();
  expect(logPareceristaNaoAdicionado()).toMatchSnapshot();
});
