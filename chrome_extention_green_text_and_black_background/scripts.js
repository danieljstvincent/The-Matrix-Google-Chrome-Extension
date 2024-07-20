// Example JavaScript code for scripts.js

// Function to create matrix rain effect
// Function to display a random quote
function displayRandomQuote() {
    const quotes = [
        "The Matrix is everywhere.",
        "Welcome to the real world.",
        "There is no spoon.",
        "Free your mind.",
        "Follow the white rabbit."
    ];
    const quoteContainer = document.getElementById('quote-container');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.innerText = quotes[randomIndex];
}

function createMatrixRain() {
    const matrixRainContainer = document.getElementById('matrix-rain');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * window.innerHeight;
    }

    function drawMatrixRain() {
        matrixRainContainer.innerHTML = '';  // Clear previous characters

        for (let i = 0; i < drops.length; i++) {
            const text = document.createElement('div');
            text.style.position = 'absolute';
            text.style.color = '#0f0';
            text.style.fontSize = '20px';
            text.style.left = `${i * 20}px`;
            text.style.top = `${drops[i]}px`;
            text.innerText = characters.charAt(Math.floor(Math.random() * characters.length));
            matrixRainContainer.appendChild(text);

            drops[i] += 20;
            if (drops[i] > window.innerHeight) {
                drops[i] = 0;
            }
        }
    }

    setInterval(drawMatrixRain, 50);
}


// Initialize the effects
window.onload = function() {
    createMatrixRain();
    displayRandomQuote();
}
