const plantSizes = require('./utilities')
const Character = require('./character')

class Plant {
    constructor(player) {
        this.stage = 0;
        this.height = plantSizes[this.stage]
        this.width = plantSizes[this.stage]
        this.ctx = player.ctx;
        this.player = player

        this.position = {
            x: player.position.x + 5, 
            y: player.position.y + 5
        }
    }

    // update(plants) {
    //     if (this.player.plants.length < 1) return; 
    //     console.log(plants)
    //     // Call the draw function below. 
        
    // }
    
    draw(ctx) {
        if (this.player.plants.length < 1) return; 
        // ctx.fillStyle = 'orange'
        // ctx.fillRect(this.position.x - 3, this.position.y - 3, 15, 15)
        // console.log(plants)
        console.log(ctx)
        ctx.fillStyle = 'green'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        debugger
        console.log(this)
    }
}

// module.exports = Plant;
export default Plant;