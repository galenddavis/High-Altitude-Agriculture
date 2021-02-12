
class Wall {
    constructor(height, width, x, y) {
        this.height = height;
        this.width = width; 
        this.amount = width * 2
        this.position = {
            x: x,
            y: y
        };
    }

    draw(ctx) {
        ctx.fillStyle = 'yellow'
        ctx.fillRect(this.position.x, this.position.y, this.height, this.width)
    }

    update() {
        this.amount -= 0.5;
        this.width -= 0.5;
        this.draw();
    }
    
    
}

export default Wall;