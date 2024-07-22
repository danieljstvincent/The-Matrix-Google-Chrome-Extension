var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var fontSize = 16;
var columns = Math.floor(W / fontSize);
var drops = [];
for (var i = 0; i < columns; i++) {
    drops.push(0);
}
var str = "JavaScript Hacking Effect";
function draw() {
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0, 0, W, H);
    context.fontSize = "700 " + fontSize + "px";
    context.fillStyle = "#00cc33";
    for (var i = 0; i < columns; i++) {
        var index = Math.floor(Math.random() * str.length);
        var x = i * fontSize;
        var y = drops[i] * fontSize;
        context.fillText(str[index], x, y);
        if (y >= canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
draw();
setInterval(draw, 35);

// Quotes array
var quotes = [
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

// Function to display a random quote
function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteContainer = document.getElementById('quote-container');
    quoteContainer.textContent = quotes[randomIndex];
}

// Display an initial random quote
displayRandomQuote();
