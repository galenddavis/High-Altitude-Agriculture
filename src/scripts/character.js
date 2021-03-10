// const Plant = require('./plant')
import Plant from './plant'
// import Oxygen from './oxygen'

class Character {
    constructor(x, y, size, ctx, oxygen) {
        this.keys = [];
        this.ctx = ctx
        this.width = size;
        this.height = size;
        this.plants = [];
        this.oxygen = oxygen
        this.position = {
            x: x, 
            y: y
        }
        this.state = 0
        this.player = new Image();
        this.player.src = 'src/assets/images/player_right.png'

        // Movement
        document.addEventListener('keydown', event => {
            this.keys = (this.keys || []);
            this.keys[event.key] = true;

        })
        document.addEventListener('keyup', event => {
            this.keys[event.key] = false;
        })

        // Planting and Picking
        document.addEventListener('keydown', event => {
            if (event.key === 'e') {
                for (let i = 0; i < 1; i++){
                    this.plant();
                }
            }
        })
        document.addEventListener('keydown', event => {
            if (event.key === 'q') {
                this.pick();
            }
        })

    }

    // draw(ctx) {
    //     this.plants.forEach( plant => {
    //         plant.update(this.ctx)
    //     })
    //     ctx.drawImage(this.player, this.position.x, this.position.y, this.height, this.width)
    // }

    draw(ctx) {
        debugger
        ctx.drawImage(this.player, this.position.x, this.position.y, this.height, this.width)
        this.plants.forEach((plant) => {
            debugger
            // ctx.drawImage(this.player, this.position.x, this.position.y, this.height, this.width)
            if (plant.position.y > this.position.y) {
                debugger
                ctx.drawImage(this.player, this.position.x, this.position.y, this.height, this.width)
                plant.update(this.ctx)
            } else {
                debugger
                plant.update(this.ctx)
                ctx.drawImage(this.player, this.position.x, this.position.y, this.height, this.width)
            }
        })
    }

    update(deltaTime, ctx) {
        this.draw(ctx)
        if (!deltaTime) return;
        // this.position.y += 6
        // this.move()
        if (this.keys && this.keys['ArrowUp']) {this.position.y -= 5}
        if (this.keys && this.keys['ArrowDown']) {this.position.y += 5}
        if (this.keys && this.keys['ArrowLeft']) {
            this.state = 1
            this.player.src = 'src/assets/images/player_left.png'
            this.position.x -= 5}
        if (this.keys && this.keys['ArrowRight']) {
            this.state = 0
            this.player.src = 'src/assets/images/player_right.png'
            this.position.x += 5}
        

        // This keeps the character from moving off the screen. 
        if (this.position.y < 150) this.position.y = 150
        if (this.position.y + this.height > 760) {
            this.position.y = 760 - this.height
        }
        if (this.position.x < 0) this.position.x = 0
        if (this.position.x + this.width > 1400) {
            this.position.x = 1400 - this.width  
        }
        
    }

    plant() {
        const plantInstance = new Plant(this)
        this.plants.push(plantInstance)
        this.plants[this.plants.length - 1].draw(this.ctx)
        this.oxygen.increaseO2();
    }

    pick() {
        this.plants.forEach( plant => {
            if (Math.abs((this.position.x + this.width / 2) - (plant.position.x + plant.width / 2)) <= 40 && 
                Math.abs((this.position.y + this.height / 2) - (plant.position.y + plant.height / 2)) <= 40) {
                let index = this.plants.indexOf(plant)
                this.plants.splice(index, 1)
            }
        })
        // this.oxygen.decreaseSpeed(this.plants)
    }
}


export default Character;

