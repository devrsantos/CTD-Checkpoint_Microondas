const microondas = (prato, time) => {
    let nomePrato = prato.toLowerCase();
    let tempoEmNumero = parseInt(time);

    let validaPrato;
    let timePronto;
    let timeQueimou;
    let timeKabum;

    switch (nomePrato) {
        case 'pipoca':
            timePronto = 10;
            timeQueimou = timePronto * 2;
            timeKabum = timePronto * 3;
            break;
        case 'macarrão':
            timePronto = 8;
            timeQueimou = timePronto * 2;
            timeKabum = timePronto * 3;
            break;
        case 'carne':
            timePronto = 15;
            timeQueimou = timePronto * 2;
            timeKabum = timePronto * 3;
            break;
        case 'feijão':
            timePronto = 12;
            timeQueimou = timePronto * 2;
            timeKabum = timePronto * 3;
            break;
        case 'brigadeiro':
            timePronto = 8;
            timeQueimou = timePronto * 2;
            timeKabum = timePronto * 3;
            break;
        default:
            validaPrato = false;
            break;
    }

    let mensagem;

    if (validaPrato == false) {
        mensagem = `
            AINDA NÃO APRENDI A FAZER ESSE PRATO,
            NO MOMENTO FUI PROGRAMADO APENAS PARA REALIZAR ESSES PRATOS,
            * PIPOCA / MACARRÃO / CARNE / FEIJÃO / BRIGADEIRO *
        `;
        console.log(mensagem);
    }

    if (tempoEmNumero < timePronto) {
        mensagem = 'TEMPO INSUFICIENTE';
        console.log(mensagem);
    }

    if (tempoEmNumero === timePronto) {
        console.log(
            `O prato selecionado é ${nomePrato}, o tempo recomendado para ele é ${timePronto} segundos`
        );
        for (let i = 0; i <= tempoEmNumero; i++) {
            let regressaoTime = tempoEmNumero - i;
            setTimeout(() => {
                console.log(`Faltam ${regressaoTime} segundos para terminar`);
                if (i == tempoEmNumero) {
                    mensagem = `HORA DA BOIA`;
                    console.log(mensagem);
                }
            }, 1000);
        }
    }

    if (tempoEmNumero > timePronto && tempoEmNumero < timeQueimou) {
        console.log(
            `O prato selecionado é ${nomePrato}, o tempo recomendado para ele é ${timePronto} segundos`
        );
        for (let i = 0; i <= tempoEmNumero; i++) {
            let regressaoTime = tempoEmNumero - i;
            setTimeout(() => {
                console.log(`Faltam ${regressaoTime} segundos para terminar`);
                if (i == tempoEmNumero) {
                    mensagem = `VOCÊ EXAGEROU NO TEMPO, QUASE QUEIMOU`;
                    console.log(mensagem);
                }
            }, 1000 * i);
        }
    }

    if (tempoEmNumero === timeQueimou) {
        console.log(
            `O prato selecionado é ${nomePrato}, o tempo recomendado para ele é ${timePronto} segundos`
        );
        for (let i = 0; i <= tempoEmNumero; i++) {
            let regressaoTime = tempoEmNumero - i;
            setTimeout(() => {
                console.log(`Faltam ${regressaoTime} segundos para terminar`);
                if (i == tempoEmNumero) {
                    mensagem = `INFELIZMENTE VAI COMER COMIDA QUEIMADA, TALVEZ O REX NÃO RECLAME`;
                    console.log(mensagem);
                }
            }, 1000 * i);
        }
    }

    if (tempoEmNumero > timeQueimou && tempoEmNumero < timeKabum) {
        console.log(
            `O prato selecionado é ${nomePrato}, o tempo recomendado para ele é ${timePronto} segundos`
        );
        for (let i = 0; i <= tempoEmNumero; i++) {
            let regressaoTime = tempoEmNumero - i;
            setTimeout(() => {
                console.log(`Faltam ${regressaoTime} segundos para terminar`);
                if (i == tempoEmNumero) {
                    mensagem = `NÃO SABE USAR UM MICROONDAS????`;
                    console.log(mensagem);
                }
            }, 1000 * i);
        }
    }

    if (tempoEmNumero === timeKabum) {
        console.log(
            `O prato selecionado é ${nomePrato}, o tempo recomendado para ele é ${timePronto} segundos`
        );
        for (let i = 0; i <= tempoEmNumero; i++) {
            let regressaoTime = tempoEmNumero - i;
            setTimeout(() => {
                console.log(`Faltam ${regressaoTime} segundos para terminar`);
                if (i == tempoEmNumero) {
                    mensagem = `DEU RUIM, AS CASAS BAHIA VENDE UM NOVO MICROONDAS`;
                    console.log(mensagem);
                }
            }, 1000 * i);
        }
    }

    if (tempoEmNumero > timeKabum) {
        console.log(
            `O prato selecionado é ${nomePrato}, o tempo recomendado para ele é ${timePronto} segundos`
        );
        mensagem = `VOCÊ É UM PERIGO PARA VOCÊ MESMO, NEM VOU CONTAR O TEMPO`;
        console.log(mensagem);
    }
};

microondas('Pipoca', '10');
