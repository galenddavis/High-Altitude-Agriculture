import Character from './character'


class Oxygen {
    constructor(height, width, x, y, player) {
        this.height = height;
        this.width = width; 
        // max width = 735
        this.amount = width * 2
        // this.plants = player.plants
        this.speed = -0.5
        // this.speed = -0.5
        this.color = '#57f954'
        this.position = {
            x: x,
            y: y
        };
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
            this.width = 735
        } else if (this.width >= 735) {
            this.width = 735
        }
        this.reduceO2();
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