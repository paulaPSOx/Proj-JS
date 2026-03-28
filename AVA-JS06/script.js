// ============================
// Número aleatório inicial
// ============================
let numeroSorteado = Math.floor(Math.random() * 10) + 1;

// ============================
// Função Jogar
// ============================
function jogar() {
    const t1 = document.getElementById('tentativa1');
    const t2 = document.getElementById('tentativa2');
    const t3 = document.getElementById('tentativa3');
    const resultado = document.getElementById('resultado');

    const tentativa1 = parseInt(t1.value);
    const tentativa2 = parseInt(t2.value);
    const tentativa3 = parseInt(t3.value);

    // Validar inputs
    if (
        isNaN(tentativa1) || tentativa1 < 1 || tentativa1 > 10 ||
        isNaN(tentativa2) || tentativa2 < 1 || tentativa2 > 10 ||
        isNaN(tentativa3) || tentativa3 < 1 || tentativa3 > 10
    ) {
        resultado.textContent = 'Por favor, insira números entre 1 e 10 em todos os blocos.';
        resultado.className = 'erro';
        resultado.style.display = 'block';
        return;
    }

    // Bloquear números repetidos
    if (tentativa1 === tentativa2 || tentativa1 === tentativa3 || tentativa2 === tentativa3) {
        resultado.textContent = 'Cada bloco deve ter um número diferente.';
        resultado.className = 'erro';
        resultado.style.display = 'block';
        return;
    }

    // Verificar acerto
    if (tentativa1 === numeroSorteado) {
        resultado.textContent = `Número ${numeroSorteado}! Parabéns, você acertou no Bloco 1!`;
        resultado.className = 'parabens';
    } else if (tentativa2 === numeroSorteado) {
        resultado.textContent = `Número ${numeroSorteado}! Parabéns, você acertou no Bloco 2!`;
        resultado.className = 'parabens';
    } else if (tentativa3 === numeroSorteado) {
        resultado.textContent = `Número ${numeroSorteado}! Parabéns, você acertou no Bloco 3!`;
        resultado.className = 'parabens';
    } else {
        resultado.textContent = `Número ${numeroSorteado}! Infelizmente, você errou todos os números.`;
        resultado.className = 'erro';
    }

    resultado.style.display = 'block';

    // Bloquear inputs e botão Jogar!!
    t1.disabled = true;
    t2.disabled = true;
    t3.disabled = true;
    document.getElementById('botao-jogar').disabled = true;
}

// ============================
// Função Jogar Novamente
// ============================
function jogarNovamente() {
    // Gerar novo número aleatório
    numeroSorteado = Math.floor(Math.random() * 10) + 1;

    // Limpar inputs
    const t1 = document.getElementById('tentativa1');
    const t2 = document.getElementById('tentativa2');
    const t3 = document.getElementById('tentativa3');
    t1.value = '';
    t2.value = '';
    t3.value = '';

    // Habilitar inputs
    t1.disabled = false;
    t2.disabled = false;
    t3.disabled = false;

    // Limpar resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = '';
    resultado.className = '';
    resultado.style.display = 'none';

    // Habilitar botão Jogar!!
    document.getElementById('botao-jogar').disabled = false;

    // Foco no primeiro input
    t1.focus();
}