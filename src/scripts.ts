function createMatrixRain(): void {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.id = 'matrix-canvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const container = document.getElementById('matrix-rain');
    if (!container) return;

    container.appendChild(canvas);

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = new Array(columns).fill(1);

    function draw(): void {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text: string = letters.charAt(Math.floor(Math.random() * letters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 33);
}

function displayRandomQuote(): void {
    const quotes: string[] = [
        "The mind is a powerful weapon; free it from the chains of doubt and you'll become unstoppable.",
        "You think you know limits? Limits are just illusions constructed by the mind. Break them.",
        "Pain is a construct. Push through it, and you'll discover a world beyond your perceived reality.",
        "Your fears are the real agents of the Matrix. Defeat them to see the truth of your potential.",
        "The path to greatness is a code you must decrypt with persistence and grit.",
        "Wake up, Neo. You are more powerful than you believe. Your mind is the key.",
        "In the face of adversity, remember: there's no spoon. Bend your reality with sheer willpower.",
        "The road to mastery is not a shortcut, it's a long line of code. Debug it with relentless effort.",
        "You are the One, not because of destiny, but because you choose to rise above the impossible.",
        "Your true strength lies not in avoiding struggle, but in embracing and overcoming it. Free your mind."
    ];

    const quoteContainer = document.getElementById('quote-container');
    if (!quoteContainer) return;

    const randomIndex: number = Math.floor(Math.random() * quotes.length);
    quoteContainer.textContent = quotes[randomIndex];
}

window.onload = (): void => {
    createMatrixRain();
    displayRandomQuote();
};
