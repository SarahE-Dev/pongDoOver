document.onkeydown = function(e){
    switch(e.key){
        case 'ArrowUp':
            if(playerPaddleYPosition > 0){
            playerPaddleYPosition -= playerPaddleYVelocity
            }
            break;
        case 'ArrowDown':
            if(playerPaddleYPosition < GAME_AREA_HEIGHT - PADDLE_HEIGHT){
            playerPaddleYPosition += playerPaddleYVelocity
            }
            break;
    }
}

// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;
const BALL_RADIUS = 10;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 3;

const ball = document.querySelector('.ball');

let ballXPosition = GAME_AREA_WIDTH / 2;
let ballYPosition = GAME_AREA_HEIGHT / 2;
let ballXSpeed = 5;
let ballYSpeed = 5;

const playerPaddle = document.querySelector('.player-paddle');

let playerPaddleYPosition = 0;
let playerPaddleYVelocity = 10;

// Update the pong world
function update() {

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    if(computerPaddleYPosition > GAME_AREA_HEIGHT - PADDLE_HEIGHT || computerPaddleYPosition < 0){
        computerPaddleYVelocity = -computerPaddleYVelocity
    }

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    ball.style.left = `${ballXPosition}px`;
    ball.style.top = `${ballYPosition}px`;

    ballXPosition += ballXSpeed;
    ballYPosition += ballYSpeed;

    if(ballXPosition > GAME_AREA_WIDTH - PADDLE_WIDTH - BALL_SIZE){
        ballXSpeed = -ballXSpeed;
        computerPaddleYPosition = ballYPosition - 50;
    }

    if(ballXPosition < 0){
        reset();
    }

    if(ballYPosition > GAME_AREA_HEIGHT - BALL_SIZE || ballYPosition < 0){
        ballYSpeed = -ballYSpeed
    }

    playerPaddle.style.top = `${playerPaddleYPosition}px`;

    if(ballXPosition === PADDLE_WIDTH && ballYPosition >= playerPaddleYPosition && ballYPosition <= playerPaddleYPosition + PADDLE_HEIGHT){
        ballXSpeed = -ballXSpeed;
        
    }


}

function reset(){
    ballXPosition = GAME_AREA_WIDTH / 2;
    ballYPosition = GAME_AREA_HEIGHT / 2;
    ballXSpeed = -ballXSpeed
}

// Call the update() function every 35ms
setInterval(update, 35);
