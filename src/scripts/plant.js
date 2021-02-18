const plantSizes = require('./utilities')
const Character = require('./character')

class Plant {
    constructor(player) {
        this.stage = 0;
        this.height = plantSizes[this.stage]
        this.width = plantSizes[this.stage]
        this.ctx = player.ctx;
        this.player = player;
        this.plant = new Image();
        this.plant.src = 'src/assets/images/plant_lvl_1.png'

        this.plantX = this.player.state === 1 ? -25 : 50;
        this.position = {
            x: this.player.position.x + this.plantX, 
            y: this.player.position.y + 35
        }
    }
    
    draw(ctx) {
        if (this.player.plants.length < 1) return; 
        // ctx.fillStyle = 'green'
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.drawImage(this.plant, this.position.x, this.position.y, this.height, this.width)
        // setTimeout(this.grow(), 10000)
    }

    grow() {
        this.plant.src = 'src/assets/images/plant_lvl_2.png'
        this.ctx.drawImage(this.plant, this.position.x, this.position.y, this.height, this.width)
    }
}

export default Plant;