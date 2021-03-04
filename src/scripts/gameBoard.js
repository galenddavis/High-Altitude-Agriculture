import Character from './character'
import Plant from './plant';
import Wall from './walls';
import Oxygen from './oxygen'


class GameBoard {
    constructor(ctx) {
        this.ctx = ctx
        this.player = new Character(300, 300, 80, this.ctx);
        this.wall = new Wall(1370, 140, 15, 0)
        this.oxygen = new Oxygen(37, 600, 63, 55)
    }

    draw(ctx) {
        this.wall.draw(ctx)
        this.player.draw(ctx)
        this.oxygen.draw(ctx)
    }

    update(deltaTime, ctx) {
        this.player.update(deltaTime)
        this.draw(ctx)
    }
}

export default GameBoard;

// window.addEventListener('load', () => {
//     const canvas = document.querySelector('#game-screen');
//     const ctx = canvas.getContext('2d');
    
//     // Set canvas size 
//     canvas.width = 1400 // 35 columns
//     canvas.height = 760 // 18 rows

//     // const plants = character.plants
//     const character = new Character(canvas.width, canvas.height, canvas);
//     let wall1 = new Wall(1370, 120, 15, 0)
//     // wall2.fillStyle = 'yellow'
//     let wall2 = new Wall(1370, 120, 15, 0)
//     // let plant = new Plant()
   
//     let time = 0;
//     function playGame(timestamp) {
//         ctx.clearRect(0, 0, 1400, 760)
//         let deltaTime = timestamp - time;
//         time = timestamp;
        
//         // Plant.update(deltaTime);
//         character.update(deltaTime);
//         // Wall.draw();
//         character.draw(ctx)
//         wall1.draw(ctx);
//         // wall2.draw(ctx);
       

//         requestAnimationFrame(playGame);
//     }

//     playGame();

// })







