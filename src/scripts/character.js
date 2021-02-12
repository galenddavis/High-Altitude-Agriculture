// const Plant = require('./plant')
import Plant from './plant'

class Character {
    constructor(gameWidth, gameHeight, canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 40;
        this.height = 40;
        this.plants = [];
        this.position = {
            x: gameWidth / 2 - this.width / 2, 
            y: gameHeight / 2 - this.height / 2
        }

        // Movement
        document.addEventListener('keydown', event => {
            canvas.keys = (canvas.keys || []);
            canvas.keys[event.key] = true;
        })
        document.addEventListener('keyup', event => {
            canvas.keys[event.key] = false;
        })

        // Planting
        document.addEventListener('keydown', event => {
            if (event.key === 'e') {
                for (let i = 0; i < 1; i++){
                    this.plant();
                }

            }
        })
    }

    draw(ctx) {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    move(event) {
        // switch (event.key) {
        //     case 'ArrowUp':
        //         this.position.y -= 8
        //         break;
        //     case 'ArrowDown':
        //         this.position.y += 8
        //         break;
        //     case 'ArrowLeft':
        //         this.position.y -= 8
        //         break;
        //     case 'ArrowRight':
        //         this.position.y += 8
        //         break;
        //     default:
        //         break;
        // }
        // Actual moves 
        // if (this.canvas.keys && this.canvas.keys['ArrowUp']) {this.position.y += -8}
        // if (this.canvas.keys && this.canvas.keys['ArrowDown']) {this.position.y += 8}
        // if (this.canvas.keys && this.canvas.keys['ArrowLeft']) {this.position.x += -8}
        // if (this.canvas.keys && this.canvas.keys['ArrowRight']) {this.position.x += 8}

        // // This keeps the character from moving off the screen. 
        // if (this.position.y < 0) this.position.y = 0
        // if (this.position.y + this.height > this.gameHeight) {
        //     this.position.y = this.gameHeight - this.height  
        // }
        // if (this.position.x < 0) this.position.x = 0
        // if (this.position.x + this.width > this.gameWidth) {
        //     this.position.x = this.gameWidth - this.width  
        // }
    }

    update(deltaTime) {
        if (!deltaTime) return;

        // this.move()
        if (this.canvas.keys && this.canvas.keys['ArrowUp']) {this.position.y -= 8}
        if (this.canvas.keys && this.canvas.keys['ArrowDown']) {this.position.y += 8}
        if (this.canvas.keys && this.canvas.keys['ArrowLeft']) {this.position.x -= 8}
        if (this.canvas.keys && this.canvas.keys['ArrowRight']) {this.position.x += 8}

        // This keeps the character from moving off the screen. 
        if (this.position.y < 120) this.position.y = 120
        if (this.position.y + this.height > this.gameHeight) {
            this.position.y = this.gameHeight - this.height  
        }
        if (this.position.x < 0) this.position.x = 0
        if (this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width  
        }
    }

    plant() {
        const plantInstance = new Plant(this)
        this.plants.push(plantInstance)
        this.plants[this.plants.length - 1].draw(this.ctx)
           
    }
}



// module.exports = Character
export default Character;

