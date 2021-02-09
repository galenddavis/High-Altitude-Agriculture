

class Character {
    constructor(gameWidth, gameHeight, canvas) {
        this.canvas = canvas
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 20;
        this.height = 20;

        this.maxSpeed = 10;
        this.speed = 0;

        this.position = {
            x: gameWidth / 2 - this.width / 2, 
            y: gameHeight / 2 - this.height / 2
        }

        document.addEventListener('keydown', event => {
            canvas.keys = (canvas.keys || []);
            canvas.keys[event.key] = true;
        })

        document.addEventListener('keyup', event => {
            canvas.keys[event.key] = false;
        })
    }

    draw(ctx) {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(deltaTime) {
        if (!deltaTime) return;

        // Actual moves 
        if (this.canvas.keys && this.canvas.keys['ArrowUp']) {this.position.y += -10}
        if (this.canvas.keys && this.canvas.keys['ArrowDown']) {this.position.y += 10}
        if (this.canvas.keys && this.canvas.keys['ArrowLeft']) {this.position.x += -10}
        if (this.canvas.keys && this.canvas.keys['ArrowRight']) {this.position.x += 10}

        // This keeps the character from moving off the screen. 
        if (this.position.y < 0) this.position.y = 0
        if (this.position.y + this.height > this.gameHeight) {
            this.position.y = this.gameHeight - this.height  
        }
        if (this.position.x < 0) this.position.x = 0
        if (this.position.x + this.width > this.gameWidth) {
            this.position.x = this.gameWidth - this.width  
        }
    }
}

export default Character;

