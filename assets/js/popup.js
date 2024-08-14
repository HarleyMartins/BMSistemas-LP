

function openPopup() {
    const popup = document.querySelector(".popup");
    popup.style.display = 'flex';

    // Define o número inicial para o contador
    let numeroInicial = 40;

    // Seleciona o elemento onde o contador será exibido
    const cronometro = document.getElementById('cronometro');
    cronometro.innerHTML = numeroInicial;

    // Cria uma função que decrementa o contador
    intervalId = setInterval(() => {
        numeroInicial--;
        cronometro.innerHTML = numeroInicial;

        // Quando o contador chegar a zero, executa a função
        if (numeroInicial <= 0) {
            closePopup();
        }
    }, 1000); // Intervalo de 1 segundo (1000 milissegundos)
}

function closePopup() {
    const popup = document.querySelector(".popup");
    popup.style.display = 'none';
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null; // Garante que o cronômetro não será reiniciado
    }
}


// Abre o popup automaticamente quando o documento estiver carregado
document.addEventListener("DOMContentLoaded", openPopup);


// Abre o popup ao clicar no botão da navbar
const buttonVideoExplicativo = document.getElementById("buttonVideoExplicativo");
buttonVideoExplicativo.addEventListener("click", function() {
    const popup = document.querySelector(".popup");
    if (popup.style.display === 'none') {
        openPopup();
    }
});

const buttonVideoExplicativo2 = document.getElementById("buttonVideoExplicativo2");
buttonVideoExplicativo2.addEventListener("click", function() {
    const popup = document.querySelector(".popup");
    if (popup.style.display === 'none') {
        openPopup();
    }
});


// Fecha o popup ao clicar no botão de fechar
const buttonClosePopup = document.getElementById("popup__buttonFechar");
buttonClosePopup.addEventListener("click", closePopup);


const buttonAssistirPopup = document.getElementById("popup__buttonAssistir").addEventListener("click", function() { 
    window.open("https://youtu.be/D_qqoH1-Ai0?si=syNBkKJ1CwfxMfRU")
})
