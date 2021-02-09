

class Wall {
    constructor(height, width, gameWidth, gameHeight) {
        this.height = height;
        this.width = width; 
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.position = {
            x: 0,
            y: 0
        };
        
        
    }
    // WALLS = [
    //     new Wall(60, 60, 'red', 1, 0) 
    //  ]
    

    draw(ctx) {
        debugger
        ctx.fillStyle = 'black'
        ctx.fillRect(this.position.x, this.position.y, this.height, this.width)
    }
}

export default Wall;