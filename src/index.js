import './styles/index.scss';
// import * as GameBoard from './scripts/gameBoard'
// import * as Game from './scripts/entry'

import GameBoard from './scripts/gameBoard'
import StartScreen from './scripts/startScreen'
import GameOver from './scripts/gameOver'


window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#game-screen');
    const ctx = canvas.getContext('2d');
    const gameStart = document.querySelector('#game-start')
    const ctx1 = gameStart.getContext('2d');
    const over = document.querySelector('#game-over')
    const ctx2 = over.getContext('2d');
    
    // Set canvas size 
    canvas.width = 1400 // 35 columns
    canvas.height = 760 // 18 rows
    gameStart.width =  1400;
    gameStart.height = 760
    over.width =  1400;
    over.height = 760

    // ctx.font = "50px Arial";
    // ctx.fillStyle = 'red'
    // ctx.fillText("Hello World", 10, 50);

    const start = new StartScreen(ctx1)
    const game = new GameBoard(ctx)
    const gameover = new GameOver(ctx2)

    let time = 0;

    function startScreen(timestamp) {
        ctx1.clearRect(0, 0, 1400, 760)
        start.draw(ctx1)
        requestAnimationFrame(startScreen);
    }

    
    function playGame(timestamp) {
        ctx.clearRect(0, 0, 1400, 760)
        let deltaTime = timestamp - time;
        time = timestamp;
        game.update(deltaTime, ctx)
        requestAnimationFrame(playGame);
    }

    function gameOver(timeStamp) {
        ctx2.clearRect(0, 0, 1400, 760)
        gameover.draw(ctx2)
        requestAnimationFrame(gameOver);
    }

    startScreen(ctx1);
    gameOver()

    gameStart.addEventListener('click', () => {
        gameStart.style.display = "none"
        canvas.style.display = "block"
        playGame();
    })

    over.addEventListener('click', () => {
        over.style.display = "none"
        gameStart.style.display = "block"
        game = new GameBoard(ctx)
        playGame();
    })

    // playGame();

})
