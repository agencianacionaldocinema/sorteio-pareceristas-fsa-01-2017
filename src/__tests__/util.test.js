import { getRandomInt, sorteados2CSV, baixeResultados } from '../util';

it('gera um inteiro randômico no intervalo [min, max)', () => {
  const min = 100;
  const max = 200;
  const inteiro = getRandomInt(100, 200);
  expect(inteiro).toBeGreaterThanOrEqual(min);
  expect(inteiro).toBeLessThan(max);
});

it('gerar string CSV a partir da lista de sorteados', () => {
  const sorteados = [
    { Inscrição: '123', CPF: '888.888.888-88', Nome: 'Parecerista xyz' }
  ];
  const csv = sorteados2CSV(sorteados);
  expect(csv).toMatchSnapshot();
});

it('baixeResultados deve baixar dois arquivos', () => {
  global.URL.createObjectURL = jest.fn();
  global.URL.revokeObjectURL = jest.fn();
  const sorteados = [
    { Inscrição: '123', CPF: '888.888.888-88', Nome: 'Parecerista xyz' }
  ];
  const log = 'log 123';
  const data = '11/11/2011';
  baixeResultados(sorteados, log, data);
  expect(global.URL.createObjectURL).toHaveBeenCalledTimes(2);
  expect(global.URL.revokeObjectURL).toHaveBeenCalledTimes(2);
});
