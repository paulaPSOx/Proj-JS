function calcularMedia() {
    // Obtém as notas informadas pelo usuário
    const nota1Input = document.getElementById('nota1');
    const nota2Input = document.getElementById('nota2');
    const resultadoContainer = document.getElementById('resultado-container');
    const mensagemErro = document.getElementById('mensagem-erro');

    // Limpa mensagens de erro e resultados anteriores
    mensagemErro.innerHTML = '';
    resultadoContainer.innerHTML = '';
    resultadoContainer.classList.remove('com-resultado', 'conceito-suficiente', 'conceito-insuficiente', 'conceito-regular', 'conceito-erro');

    // Verifica se as notas estão dentro do intervalo permitido (0 a 10)
    const nota1 = parseFloat(nota1Input.value);
    const nota2 = parseFloat(nota2Input.value);

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        // Exibe mensagem de erro
        mensagemErro.innerHTML = "Por favor, insira valores válidos entre 0 e 10 para as notas.";
        resultadoContainer.innerHTML = mensagemErro.innerHTML;
        resultadoContainer.classList.add('com-resultado', 'conceito-erro');
        return;
    }

    // Calcula a média aritmética
    const media = (nota1 + nota2) / 2;

    // Determina o conceito com base na média
    let conceito = '';
    let corTexto = '';

    if (media || (nota1 === 0 && nota2 === 0)) {
        if (media >= 9.5 && media <= 10.0) {
            conceito = 'Excelente';
            corTexto = 'green';
            resultadoContainer.classList.add('conceito-suficiente');
        } else if (media >= 8.5 && media < 9.5) {
            conceito = 'Ótimo';
            corTexto = 'green';
            resultadoContainer.classList.add('conceito-suficiente');
        } else if (media >= 7.5 && media < 8.5) {
            conceito = 'Bom';
            corTexto = 'green';
            resultadoContainer.classList.add('conceito-suficiente');
        } else if (media >= 6.0 && media < 7.5) {
            conceito = 'Regular';
            corTexto = 'orange';
            resultadoContainer.classList.add('conceito-regular');
        } else {
            conceito = 'Insuficiente';
            corTexto = 'red';
            resultadoContainer.classList.add('conceito-insuficiente');
        }

        const resultadoTexto = `Média: <span style="color: ${corTexto};">${media.toFixed(2)}</span> <br> Conceito: <span style="color: ${corTexto};">${conceito}</span>`;
        resultadoContainer.innerHTML = resultadoTexto;
        resultadoContainer.classList.add('com-resultado', `conceito-${conceito.toLowerCase()}`);
    } else {
        // Exibe mensagem de erro se não houver média calculada
        mensagemErro.innerHTML = "Ocorreu um erro ao calcular a média.";
        resultadoContainer.innerHTML = mensagemErro.innerHTML;
        resultadoContainer.classList.add('com-resultado', 'conceito-insuficiente', 'mensagem-erro');
    }
}

