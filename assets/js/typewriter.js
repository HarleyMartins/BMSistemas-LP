document.addEventListener('DOMContentLoaded', (event) => {
    const words = ["BM Sistemas", "Agende", "Gerencie", "Facilite", "Garanta o sucesso!"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = '';
    let isDeleting = false;
    const typeSpeed = 50;  // Velocidade de digitação em milissegundos
    const eraseSpeed = 40;  // Velocidade de apagamento em milissegundos
    const delayBetweenWords = 1000; // Tempo de espera entre palavras

    const typewriterElement = document.getElementById('typewriter');
    let lastTime = 0;

    function type(time) {
        if (!lastTime) {
            lastTime = time;
        }

        const elapsed = time - lastTime;

        if (isDeleting) {
            if (letterIndex > 0) {
                if (elapsed > eraseSpeed) {
                    letterIndex--;
                    currentWord = words[wordIndex].substring(0, letterIndex);
                    typewriterElement.textContent = currentWord;
                    lastTime = time;
                }
            } else {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(() => {
                    requestAnimationFrame(type);
                }, typeSpeed);
                return;
            }
        } else {
            if (letterIndex < words[wordIndex].length) {
                if (elapsed > typeSpeed) {
                    currentWord += words[wordIndex].charAt(letterIndex);
                    letterIndex++;
                    typewriterElement.textContent = currentWord;
                    lastTime = time;
                }
            } else {
                isDeleting = true;
                setTimeout(() => {
                    requestAnimationFrame(type);
                }, delayBetweenWords);
                return;
            }
        }

        requestAnimationFrame(type);
    }

    requestAnimationFrame(type);
});