function calcularDias(data) {
    const dataAtual = new Date();

    // Separar dia e mês da data fornecida (formato dd/mm)
    const dataAlvoA = data.split('/');
    const dia = parseInt(dataAlvoA[0], 10);
    const mes = parseInt(dataAlvoA[1], 10) - 1; // JS: meses 0-11

    // Ano atual
    let ano = dataAtual.getFullYear();

    // Criar a data alvo
    let dataFormatada = new Date(ano, mes, dia);

    // Se a data já passou neste ano, usamos o próximo ano
    if (dataFormatada < dataAtual) {
        dataFormatada = new Date(ano + 1, mes, dia);
    }

    // Calcular diferença em dias
    const dif = dataFormatada - dataAtual;
    const dias = Math.round(dif / (1000 * 60 * 60 * 24));

    // Mensagem personalizada
    const mensagem = `Faltam ${dias} dias para ${dia === 20 && mes === 11 ? 'as Férias' : 'o Meu Aniversário'}... Uhuuu!!!`;

    // Criar ou atualizar div de resultado
    let resultadoDiv = document.getElementById('resultado');
    if (!resultadoDiv) {
        resultadoDiv = document.createElement('div');
        resultadoDiv.id = 'resultado';
        document.getElementById('conteudo').appendChild(resultadoDiv);
    }

    // Mensagem e cor
    resultadoDiv.innerHTML = `<p style="color: ${dia === 20 && mes === 11 ? '#FF6347' : '#00BFFF'};">${mensagem}</p>`;

    // Alterar a imagem conforme a data
    const img = document.getElementById('frame');
    if (dia === 20 && mes === 11) {
        img.src = './imagens/proj-js01-img(0).png';
    } else {
        img.src = './imagens/proj-js01-img(1).png';
    }
}