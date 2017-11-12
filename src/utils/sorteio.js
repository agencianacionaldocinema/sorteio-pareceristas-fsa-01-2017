import jssha from 'jssha';
import seedrandom from 'seedrandom'; // eslint-disable-line no-unused-vars
import participantes from '../participantes';
import { getRandomInt, baixeResultados } from './util';
import * as l from './log';

const sortear = momentoSorteio => {
  const sha = new jssha('SHA3-512', 'TEXT');
  sha.update(momentoSorteio + JSON.stringify(participantes));
  const semente = sha.getHash('HEX');
  Math.seedrandom(semente);

  const sorteados = [];
  const jaSorteados = {};
  let log = '';

  log += l.logParametros(momentoSorteio, participantes, semente);
  while (sorteados.length < participantes.length) {
    const posicaoSorteada = getRandomInt(0, participantes.length);
    const sorteado = participantes[posicaoSorteada];
    log += l.logSorteio(posicaoSorteada, sorteado);

    if (!jaSorteados[posicaoSorteada]) {
      sorteados.push(sorteado);
      jaSorteados[posicaoSorteada] = true;
      log += l.logPareceristaAdicionado();
    } else {
      log += l.logPareceristaNaoAdicionado();
    }
  }
  log += l.logLista('Lista sorteados', sorteados);
  baixeResultados(sorteados, log, momentoSorteio);
  return sorteados;
};

export default sortear;
