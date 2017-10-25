// Retorna inteiro randômico no intervalo [min, max)
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const sorteados2CSV = (sorteados) => {
    let ret = 'Ordem,Inscrição,CPF,Nome\n';
    ret += sorteados.reduce((consolidado, e, indice) => consolidado += indice+1 + ',' + e['Inscrição'] + ',' + e['CPF'] + ',' + e['Nome']+'\n', '')
    return ret;
}

const baixeResultados = (sorteados, log, dataSorteio) => {
    const blobSorteados = new Blob([sorteados2CSV(sorteados)], { type: 'text/csv;charset=utf-8' });
    const blobLog = new Blob([log], { type: 'text/plain;charset=utf-8' });

    var linkSorteados = document.createElement("a");
    var linkLog = document.createElement("a");
    const dataSorteioNormalizada = dataSorteio.replace(' ', '').replace('/','-');
    linkSorteados.download = "resultado_" + dataSorteioNormalizada + '.csv';
    linkLog.download = "log_" + dataSorteioNormalizada + '.txt';

    var urlSorteados = linkSorteados.href = URL.createObjectURL(blobSorteados);
    var urlLog = linkLog.href = URL.createObjectURL(blobLog);

    linkSorteados.click();
    URL.revokeObjectURL(urlSorteados);

    linkLog.click();
    URL.revokeObjectURL(urlLog);
  }

module.exports = {
    getRandomInt,
    baixeResultados
}