import jssha from 'jssha';
import seedrandom from 'seedrandom'; // eslint-disable-line no-unused-vars
import participantes from '../participantes';
import { getRandomInt, baixeResultados } from './util';
import * as l from './log';

const sha = new jssha('SHA3-512', 'TEXT');

const sortear = momentoSorteio => {
  const sorteados = [];
  let log = '';
  sha.update(momentoSorteio + JSON.stringify(participantes));
  const semente = sha.getHash('HEX');
  Math.seedrandom(semente);
  log += l.logParametros(momentoSorteio, participantes, semente);
  while (sorteados.length < participantes.length) {
    const posicaoSorteada = getRandomInt(0, participantes.length);
    const sorteado = participantes[posicaoSorteada];
    log += l.logSorteio(posicaoSorteada, sorteado);
    if (!sorteado.jaSorteado) {
      sorteados.push(sorteado);
      participantes[posicaoSorteada].jaSorteado = true;
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
