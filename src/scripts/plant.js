const plantSizes = require('./utilities')

class Plant {
    constructor(playerx, playery, ctx) {
        this.stage = 0;
        this.height = plantSizes[this.stage]
        this.width = plantSizes[this.stage]
        this.ctx = ctx;

        this.position = {
            x: playerx + 5, 
            y: playery + 5
        }
    }

    draw(ctx) {
        // ctx.fillStyle = 'orange'
        // ctx.fillRect(this.position.x - 3, this.position.y - 3, 15, 15)
        console.log('bye')
        ctx.fillStyle = 'green'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

module.exports = Plant;