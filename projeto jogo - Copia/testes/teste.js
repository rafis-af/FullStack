const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const planeWidth = 40;
const planeHeight = 40;
let planeX = canvas.width / 2 - planeWidth / 2;
let planeY = canvas.height - planeHeight - 10;
let planeSpeed = 5;

let obstacles = [];
let score = 0;
let gameInterval;
let obstacleSpeed = 2;

// Função para desenhar o avião
function drawPlane() {
  ctx.fillStyle = "blue";
  ctx.fillRect(planeX, planeY, planeWidth, planeHeight);
}

// Função para desenhar os obstáculos
function drawObstacles() {
  ctx.fillStyle = "red";
  obstacles.forEach(obstacle => {
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

// Função para movimentar o avião
function movePlane() {
  document.addEventListener("keydown", function(event) {
    if (event.keyCode == 37 && planeX > 0) planeX -= planeSpeed; // Esquerda
    if (event.keyCode == 39 && planeX < canvas.width - planeWidth) planeX += planeSpeed; // Direita
    if (event.keyCode == 38 && planeY > 0) planeY -= planeSpeed; // Cima
    if (event.keyCode == 40 && planeY < canvas.height - planeHeight) planeY += planeSpeed; // Baixo
  });
}

// Função para gerar obstáculos
function generateObstacles() {
  const obstacleWidth = Math.random() * (100 - 50) + 50;
  const obstacleHeight = Math.random() * (30 - 20) + 20;
  const obstacleX = Math.random() * (canvas.width - obstacleWidth);
  obstacles.push({
    x: obstacleX,
    y: -obstacleHeight,
    width: obstacleWidth,
    height: obstacleHeight
  });
}

// Função para mover os obstáculos
function moveObstacles() {
  obstacles.forEach(obstacle => {
    obstacle.y += obstacleSpeed;
  });

  // Remover obstáculos que saíram da tela
  obstacles = obstacles.filter(obstacle => obstacle.y < canvas.height);

  // Verificar colisão com o avião
  obstacles.forEach(obstacle => {
    if (
      planeX < obstacle.x + obstacle.width &&
      planeX + planeWidth > obstacle.x &&
      planeY < obstacle.y + obstacle.height &&
      planeY + planeHeight > obstacle.y
    ) {
      clearInterval(gameInterval);
      document.getElementById("startBtn").disabled = false;
    }
  });
}

// Função para desenhar o fundo
function drawBackground() {
  ctx.fillStyle = "#87CEEB";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Função para atualizar a pontuação
function updateScore() {
  score++;
  document.getElementById("score").textContent = `Pontuação: ${score}`;
}

// Função para desenhar o jogo
function draw() {
  drawBackground();
  drawPlane();
  drawObstacles();
  moveObstacles();
  updateScore();
}

// Função para iniciar o jogo
function startGame() {
  planeX = canvas.width / 2 - planeWidth / 2;
  planeY = canvas.height - planeHeight - 10;
  obstacles = [];
  score = 0;
  obstacleSpeed = 2;
  document.getElementById("startBtn").disabled = true;
  gameInterval = setInterval(function() {
    generateObstacles();
    draw();
  }, 1000 / 60); // 60 FPS
}

// Função para aumentar a dificuldade conforme o tempo
function increaseDifficulty() {
  if (score % 100 === 0) {
    obstacleSpeed += 0.5; // Aumenta a velocidade dos obstáculos
  }
}

// Função de controle do jogo
function gameControl() {
  movePlane();
  increaseDifficulty();
}

document.getElementById("startBtn").addEventListener("click", startGame);
