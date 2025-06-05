function createMatrixRain() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.id = 'matrix-canvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.getElementById('matrix-rain').appendChild(canvas);
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var fontSize = 16;
    var columns = canvas.width / fontSize;
    var drops = Array(Math.floor(columns)).fill(1);
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        for (var i = 0; i < drops.length; i++) {
            var text = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(draw, 33);
}
function displayRandomQuote() {
    var quotes = [
    "Your roots are deep, your wings are wide—rise boldly and shine unapologetically.",
    "In every challenge lies a seed of greatness—nurture it, and watch your legacy grow.",
    "Strength is not just surviving, but thriving with grace in the face of every storm.",
    "Carry the dreams of those before you as fuel to ignite your own path forward.",
    "Your voice is a powerful drumbeat—let it echo with truth and inspire generations.",
    "From struggle springs resilience; from resilience blooms unstoppable hope.",
    "Embrace your story, for it is the bridge that connects past pain to future power.",
    "You are the author of tomorrow, writing chapters rich with courage and purpose.",
    "Celebrate the beauty of your journey—it’s the mosaic that shapes your brilliance.",
    "In unity and self-love, find the roots that make you unshakable and free."
    ];
    var quoteContainer = document.getElementById('quote-container');
    var randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.textContent = quotes[randomIndex];
}
window.onload = function () {
    createMatrixRain();
    displayRandomQuote();
};
