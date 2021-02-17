
class Wall {
    constructor(height, width, x, y) {
        this.height = height;
        this.width = width; 
        this.position = {
            x: x,
            y: y
        };
        // this.window = new Image();
        // this.window.src = 'src/assets/images/planet_window.png'

        // 1370, 140, 15, 0)
     
    }
    
    draw(ctx) {
        ctx.fillStyle = 'black'
        ctx.fillRect(this.position.x, this.position.y, this.height, this.width)
        // ctx.drawImage(this.window, 15, 0, 1370, 140)
        // ctx.drawImage(this.window, 0, 0, 1400, 140)
    }
}

export default Wall;