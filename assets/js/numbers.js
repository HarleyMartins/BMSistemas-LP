document.addEventListener('DOMContentLoaded', (event) => {
    const counters = [
        { id: 'dados__numero__estado', startNumber: 0, targetNumber: 20, duration: 1000 },
        { id: 'dados__numero__municipio', startNumber: 0, targetNumber: 60, duration: 1000 }
    ];

    counters.forEach(counter => {
        animateCounter(counter);
    });

    function animateCounter({ id, startNumber, targetNumber, duration }) {
        const counterElement = document.getElementById(id);
        let startTime = null;

        function updateCounter(time) {
            if (!startTime) {
                startTime = time;
            }

            const progress = time - startTime;
            const currentNumber = Math.min(startNumber + (progress / duration) * targetNumber, targetNumber);
            
            counterElement.textContent = Math.floor(currentNumber);

            if (progress < duration) {
                requestAnimationFrame(updateCounter);
            } else {
                counterElement.textContent = targetNumber;
            }
        }

        requestAnimationFrame(updateCounter);
    }
});