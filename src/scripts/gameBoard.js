import Character from './character/character'
import Wall from './walls';


window.addEventListener('load', () => {
    const canvas = document.querySelector('#game-screen');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size 
    canvas.width = 1400
    canvas.height = 750

    
    let character = new Character(canvas.width, canvas.height, canvas);
    let wall = new Wall(350, 250, canvas.width, canvas.height)
    let time = 0;
    
    
    function playGame(timestamp) {
        ctx.clearRect(0, 0, 1400, 750)
        let deltaTime = timestamp - time;
        time = timestamp;
        
        character.update(deltaTime);
        wall.draw(ctx);
        character.draw(ctx)

        requestAnimationFrame(playGame);
    }

    playGame();

})




