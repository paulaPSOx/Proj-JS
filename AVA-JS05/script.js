function obterSaudacao() {
    const horaAtual = new Date().getHours();

    if (horaAtual >= 5 && horaAtual < 12) {
        return 'Bom dia';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        return 'Boa tarde';
    } else {
        return 'Boa noite';
    }
}

function obterDiaSemana(diaSemana) {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasSemana[diaSemana];
}

function obterMes(numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[numeroMes];
}

function addZero(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

function exibirData() {
    const saudacao = obterSaudacao();
    const dataAtual = new Date();

    const diaSemana = obterDiaSemana(dataAtual.getDay());
    const dia = addZero(dataAtual.getDate());
    const mes = obterMes(dataAtual.getMonth());
    const ano = dataAtual.getFullYear();

    const hora = addZero(dataAtual.getHours());
    const minutos = addZero(dataAtual.getMinutes());

    const mensagem = `${saudacao}! Hoje é ${diaSemana}, ${dia} de ${mes} de ${ano} – ${hora}:${minutos}hs.`;

    const mensagemElement = document.createElement('div');
    mensagemElement.id = 'mensagem';
    mensagemElement.textContent = mensagem;
    document.body.appendChild(mensagemElement);
}

exibirData();