// Pegando o círculo e a área de jogo //
const circle = document.getElementById('circle');
const gameArea = document.getElementById('gameArea');

let posX = 50;
let posY = 50;

const moveSpeed = 10;
const originalBackgroundColor = 'rgb(103, 147, 197)'; // Cor original de fundo //

// Função que move o círculo //
document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
            if (posY > 0) posY -= moveSpeed;
            break;
        case 'ArrowDown':
            if (posY < window.innerHeight - circle.offsetHeight) posY += moveSpeed;
            break;
        case 'ArrowLeft':
            if (posX > 0) posX -= moveSpeed;
            break;
        case 'ArrowRight':
            if (posX < window.innerWidth - circle.offsetHeight) posX += moveSpeed;
            break;
    }
    updateCirclePosition();
});

// Função que atualiza a posição do círculo //
function updateCirclePosition() {
    circle.style.left = `${posX}px`;
    circle.style.top = `${posY}px`;
}

// Função criar quadrados //
function createSquares()
{
    clearShapes();
    gameArea.style.backgroundColor = rgb(102, 129, 102);

    for
}