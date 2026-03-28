function atualizarRelogio() {
    const now = new Date();
    const grausHora = (360 / 12) * (now.getHours() % 12) + (360 / 12) * (now.getMinutes() / 60);
    const grausMinuto = (360 / 60) * now.getMinutes() + (360 / 60) * (now.getSeconds() / 60);
    const grausSegundo = (360 / 60) * now.getSeconds();

    document.getElementById('ponteiro-hora').style.transform = `translateY(-50%) rotate(${grausHora}deg)`;
    document.getElementById('ponteiro-minuto').style.transform = `translateY(-50%) rotate(${grausMinuto}deg)`;
    document.getElementById('ponteiro-segundo').style.transform = `translateY(-50%) rotate(${grausSegundo}deg)`;
}

// Relogio2
setInterval(atualizarRelogio2, 1000);

function atualizarRelogio2() {
    const relogio = document.getElementById('relogio2');
    const agora = new Date();

    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Atualiza o relógio imediatamente ao carregar a página
atualizarRelogio();

// 6,00 | 10,0 | 
// 2,0 | - |  0,25 | 2,0 | 2,0 | 2,0 | 2,0 | 0,25 | 0.25 | 0,25