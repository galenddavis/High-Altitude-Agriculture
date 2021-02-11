
class Wall {
    constructor(height, width, x, y) {
        this.height = height;
        this.width = width; 
        // this.gameWidth = gameWidth;
        // this.gameHeight = gameHeight;

        this.position = {
            x: x,
            y: y
        };

        // WALLS = [
        //     (60, 60, 1, 0),
        //     (350, 250, 0, 0),
        //     (350, 250, 1050, 500)
             
        //  ]
         
    }
    
    

    draw(ctx) {
        // WALLS.forEach(wall => {
        //     ctx.fillRect(wall)
        // })
        ctx.fillStyle = 'black'
        ctx.fillRect(this.position.x, this.position.y, this.height, this.width)
    }
}

export default Wall;