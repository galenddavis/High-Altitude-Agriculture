const Plant = require('./plant')

class Character {
    constructor(gameWidth, gameHeight, canvas) {
        this.canvas = canvas
        ctx = canvas.getContext('2d')
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 40;
        this.height = 40;

        // this.maxSpeed = 10;
        // this.speed = 0;

        this.position = {
            x: gameWidth / 2 - this.width / 2, 
            y: gameHeight / 2 - this.height / 2
        }

        document.addEventListener('keydown', event => {
            // alert(event.key)
            canvas.keys = (canvas.keys || []);
            canvas.keys[event.key] = true;
        })

        document.addEventListener('keyup', event => {
            canvas.keys[event.key] = false;
        })

        // this.move = this.move.bind(this)
        this.plant = this.plant.bind(this)
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
        this.plant(ctx)
    }

    plant(ctx) {
        if (this.canvas.keys && this.canvas.keys['e']) {
            console.log('hello')
            let plant = new Plant(this.position.x, this.position.y, ctx)
            plant.draw(ctx)
        }
    }
}

module.exports = Character

