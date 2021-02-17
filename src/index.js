import './styles/index.scss';
// import * as GameBoard from './scripts/gameBoard'
// import * as Game from './scripts/entry'

import GameBoard from './scripts/gameBoard'


window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#game-screen');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size 
    canvas.width = 1400 // 35 columns
    canvas.height = 760 // 18 rows

    const game = new GameBoard(ctx)

    // // const plants = character.plants
    // const character = new Character(canvas.width, canvas.height, canvas);
    // let wall1 = new Wall(1370, 120, 15, 0)
    // // wall2.fillStyle = 'yellow'
    // let wall2 = new Wall(1370, 120, 15, 0)
    // // let plant = new Plant()
   
    let time = 0;
    function playGame(timestamp) {
        ctx.clearRect(0, 0, 1400, 760)
        let deltaTime = timestamp - time;
        time = timestamp;
        // console.log(time)
        // game.update(deltaTime)
        game.update(deltaTime, ctx)
        requestAnimationFrame(playGame);
    }

    playGame();

})
