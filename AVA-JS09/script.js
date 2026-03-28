const coracao = document.getElementById('coracao');

function pulsar() {
    coracao.style.transform = 'scale(1.2)'; // Aumenta para 120%
    setTimeout(() => {
        coracao.style.transform = 'scale(1)'; // Reduz para 100% após 500ms
    }, 500);
}

setInterval(pulsar, 2000);
