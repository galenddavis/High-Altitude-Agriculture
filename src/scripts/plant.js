const plantHeights = require('./utilities')
const plantWidths = require('./utilities')
const Character = require('./character')

class Plant {
    constructor(player) {
        this.stage = 0;
        this.counter = 0
        this.height = 95
        this.width = 65
        this.ctx = player.ctx;
        this.player = player;
        this.plant = document.getElementById('baby-plant')
        // this.plant = new Image();
        // this.plant.src = 'src/assets/images/plant_lvl_0.png'

        this.plantX = this.player.state === 1 ? -50 : 70;
        this.position = {
            x: this.player.position.x + this.plantX, 
            y: this.player.position.y + 5
        }
    }

    update(ctx) {
        this.draw(ctx)
        if (this.counter >= 1000) {
            this.grow1();
        } 
        if (this.counter >= 4000) {
            this.grow2();
        }
        this.counter += 5
    }

    grow1() {
        if (this.stage === 0) {
            this.stage += 1
            // this.plant.src = 'src/assets/images/plant_lvl_1.png'
            this.plant = document.getElementById('middle-plant')
            this.ctx.drawImage(this.plant, this.position.x, this.position.y, this.width, this.height)
        }
    }

    grow2() {
        if (this.stage === 1) {
            this.stage += 1
            // this.plant.src = 'src/assets/images/plant_lvl_2.png'
            this.plant = document.getElementById('adult-plant')
            this.ctx.drawImage(this.plant, this.position.x, this.position.y, this.width, this.height)
        }
    }
    
    draw(ctx) {
        if (this.player.plants.length < 1) return; 
        ctx.drawImage(this.plant, this.position.x, this.position.y, this.width, this.height)
    }

    
}

export default Plant;