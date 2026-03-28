function calcularIMC() {
    const pesoEnt = document.getElementById('peso');
    const alturaEnt = document.getElementById('altura');
    const result = document.getElementById('resultado');

    // Substitua vírgulas por pontos e removE outros caracteres não numéricos
    const peso = parseFloat(pesoEnt.value.replace(',', '.').replace(/[^0-9.]/g, ''));
    const altura = parseFloat(alturaEnt.value.replace(',', '.').replace(/[^0-9.]/g, ''));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        result.innerHTML = 'Por favor, insira valores válidos para o Peso e Altura (apenas números).';
        result.className = 'error-message';
        return;
    }

    const imc = calcularIndiceIMC(peso, altura);
    const classificacao = classificarIMC(imc);

    result.className = '';

    // Adicionar a classe correspondente à classificação
    switch (classificacao) {
        case 'Abaixo do Peso':
            result.className = 'abaixo-do-peso';
            break;
        case 'Peso Normal':
            result.className = 'peso-normal';
            break;
        case 'Sobrepeso':
            result.className = 'sobrepeso';
            break;
        case 'Obesidade Grau I':
            result.className = 'obesidade-grau-i';
            break;
        case 'Obesidade Grau II (severa)':
        case 'Obesidade Grau III (mórbida)':
            result.className = 'obesidade-grau-ii'; // ou obesidade-grau-iii
            break;
        default:
            result.className = ''; 
    }

    result.innerHTML = `Seu IMC é de: ${imc.toFixed(1)} - ${classificacao}`;
}

function calcularIndiceIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    let classificacao;
    switch (true) {
        case imc < 18.5:
            classificacao = 'Abaixo do Peso';
            break;
        case imc < 24.9:
            classificacao = 'Peso Normal';
            break;
        case imc < 29.9:
            classificacao = 'Sobrepeso';
            break;
        case imc < 34.9:
            classificacao = 'Obesidade Grau I';
            break;
        case imc < 39.9:
            classificacao = 'Obesidade Grau II (severa)';
            break;
        default:
            classificacao = 'Obesidade Grau III (mórbida)';
    }
    return classificacao;
}

// Ex.: Peso(kg) 40.0 | Altura(m²): 1.60