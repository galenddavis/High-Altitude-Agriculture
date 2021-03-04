import Character from './character'


class Oxygen {
    constructor(height, width, x, y) {
        this.height = height;
        this.width = width; 
        // max width = 735
        this.amount = width * 2
        // this.plants = Character.plants
        // this.speed = this.plants.length - 1.2
        this.speed = -0.5
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
        } else if (this.width > 1) {
            this.width += this.speed;
        } 
    }
    
}

export default Oxygen;