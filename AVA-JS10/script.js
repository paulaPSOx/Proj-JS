const imagens = [
    "imagens/proj-js10-img(0).png",
    "imagens/proj-js10-img(1).png",
    "imagens/proj-js10-img(2).png",
    "imagens/proj-js10-img(3).png",
    "imagens/proj-js10-img(4).png"
];

const slides = document.querySelectorAll('.slide');
let indice = 0;

function exibirProximaImagem() {
    slides.forEach((slide, i) => {
        if (i === indice) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });

    indice = (indice + 1) % slides.length;
}

setInterval(exibirProximaImagem, 2000);

