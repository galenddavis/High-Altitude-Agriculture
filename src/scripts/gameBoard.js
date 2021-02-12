// import Character from './character'
// const Character = require('./character')
import Character from './character'
const Plant = require('./plant')
import Wall from './walls';


window.addEventListener('load', () => {
    const canvas = document.querySelector('#game-screen');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size 
    canvas.width = 1400 // 35 columns
    canvas.height = 760 // 18 rows

    
    const character = new Character(canvas.width, canvas.height, canvas);
    let wall1 = new Wall(1370, 120, 15, 0)
    // wall2.fillStyle = 'yellow'
    let wall2 = new Wall(1370, 120, 15, 0)
    // let plant = new Plant()
   
    let time = 0;
    function playGame(timestamp) {
        ctx.clearRect(0, 0, 1400, 760)
        let deltaTime = timestamp - time;
        time = timestamp;
        
        // Plant.update(deltaTime);
        character.update(deltaTime);
        // Wall.draw();
        character.draw(ctx)
        // character.plant()
        
        wall1.draw(ctx);
        // wall2.draw(ctx);
       

        requestAnimationFrame(playGame);
    }

    playGame();

})







