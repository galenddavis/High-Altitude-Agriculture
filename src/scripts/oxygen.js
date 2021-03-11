import Character from './character'



class Oxygen {
    constructor(height, width, x, y, speed) {
        this.height = height;
        this.width = width; 
        // max width = 735
        this.amount = width * 2
        // this.plants = player.plants
        this.speed = 0 || speed
        // this.speed = -0.6
        // this.speed = -0.5
        this.color = '#57f954'
        this.position = {
            x: x,
            y: y
        };
        this.game = document.querySelector('#game-screen');
        this.gameOver = document.querySelector('#game-over')
        this.ctx2 = this.gameOver.getContext('2d');
    }

    draw(ctx) {
        // Potential Colors
        // acf954 Greenish
        // 54acf9 Lighter Blue
        // 57f954 Brighter Green
        this.update();
        ctx.fillStyle = this.width > 120 ? this.color : 'red'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        if (this.width <= 1) {
            // this.width = 735
            this.speed = 0
            this.game.style.display = 'none'
            this.gameOver.style.display = 'block'
        } else if (this.width >= 735) {
            this.width = 735
        } else {
            this.reduceO2();
        }
    }

    reduceO2() {
        this.width += this.speed
    }

    increaseO2() {
        this.width += 50
    }


    // Old Functions
    // increaseSpeed(plants) {
    //     const newSpeed = this.speed + (plants.length * 0.01)
    //     this.speed = newSpeed
    // }

    // decreaseSpeed(plants) {
    //     const newSpeed = this.speed - (plants.length * 0.01)
    //     this.speed = newSpeed
    // }


}

export default Oxygen;