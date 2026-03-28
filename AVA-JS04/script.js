function processarNomes() {
    // Obtém os nomes do campo de entrada
    const nomesInput = document.getElementById('nomesInput');
    const nomesString = nomesInput.value;

    // Converte a string de nomes para um array
    const nomesArray = nomesString.split(',').map(nome => nome.trim().toUpperCase());

    // Ordena o array de nomes em ordem ascendente
    nomesArray.sort();
    exibirNomes(nomesArray);
    mostrarResultado();
}

function exibirNomes(nomes) {
    // Obtém o elemento da lista
    const listaNomes = document.getElementById('listaNomes');

    // Limpa a lista
    listaNomes.innerHTML = '';

    // Adiciona cada nome à lista como um item de lista
    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

function mostrarResultado() {
    // Obtém o contêiner do resultado
    const resultadoContainer = document.getElementById('resultado-container');

    resultadoContainer.classList.add('mostrar');
}

