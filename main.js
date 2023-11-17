












// Global Variables
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const resetButton = document.getElementById("resetButton");

let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    speed: 5,
    dx: 5,
    dy: 5,
};

let bounceCount = 0;

// Event Listeners
canvas.addEventListener("click", handleCanvasClick);
resetButton.addEventListener("click", resetGame);

// Functions
function drawBall() {
    let ballImage = new Image();
    ballImage.src = 'image/boll.jpeg'; // Replace with the actual path
    ctx.drawImage(ballImage, ball.x - ball.radius, ball.y - ball.radius, ball.radius * 2, ball.radius * 2);
}

function handleCanvasClick(event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    ball.dx = (clickX - ball.x) / 10; // Adjust the divisor for smoother movement
    ball.dy = (clickY - ball.y) / 10;
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Bounce off canvas boundaries
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
        bounceCount++;
    }

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
        bounceCount++;
    }
}

function resetGame() {
    bounceCount = 0;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = 5;
    ball.dy = 5;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    moveBall();

    requestAnimationFrame(draw);
}

// Game Loop
draw();
