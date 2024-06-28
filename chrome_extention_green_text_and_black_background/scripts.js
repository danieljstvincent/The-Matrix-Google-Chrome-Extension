document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "The Matrix is everywhere, it is all around us.",
        "There is no spoon.",
        "I know kung fu.",
        "Welcome to the real world.",
        "Unfortunately, no one can be told what the Matrix is. You have to see it for yourself."
    ];
    
    const quoteContainer = document.getElementById('quote-container');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteContainer.textContent = randomQuote;

    generateMatrixRain();
});

function generateMatrixRain() {
    const matrixRainContainer = document.getElementById('matrix-rain');
    const characters = '01ひらがなカタカナ漢字'; // Adding some Japanese characters

    for (let i = 0; i < 100; i++) {
        const rainDrop = document.createElement('span');
        rainDrop.className = 'rain-drop';
        rainDrop.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        rainDrop.style.left = `${Math.random() * 100}vw`;
        rainDrop.style.animationDuration = `${Math.random() * 2 + 3}s`;
        rainDrop.style.animationDelay = `${Math.random() * 5}s`;
        matrixRainContainer.appendChild(rainDrop);
    }
}
