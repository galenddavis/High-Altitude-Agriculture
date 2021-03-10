import './styles/index.scss';
// import * as GameBoard from './scripts/gameBoard'
// import * as Game from './scripts/entry'

import GameBoard from './scripts/gameBoard'
import StartScreen from './scripts/startScreen'


window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#game-screen');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size 
    canvas.width = 1400 // 35 columns
    canvas.height = 760 // 18 rows

    // ctx.font = "50px Arial";
    // ctx.fillStyle = 'red'
    // ctx.fillText("Hello World", 10, 50);

    const start = new StartScreen(ctx)
    const game = new GameBoard(ctx)

    let time = 0;
    function startScreen(timestamp) {
        ctx.clearRect(0, 0, 1400, 760)
        start.draw(ctx)
        requestAnimationFrame(startScreen);
    }

    
    function playGame(timestamp) {
        ctx.clearRect(0, 0, 1400, 760)
        let deltaTime = timestamp - time;
        time = timestamp;
        game.update(deltaTime, ctx)
        requestAnimationFrame(playGame);
    }

    startScreen(ctx);

    // playGame();

})
