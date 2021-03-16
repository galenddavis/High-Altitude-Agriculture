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
        this.seeds = 10;
        this.oxygen = oxygen
        this.position = {
            x: x, 
            y: y
        }
        this.state = 0
        this.player = document.getElementById('player-right')

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

    draw(ctx) {
        ctx.font = "50px DotGothic16";
        this.seeds <= 0 ? ctx.fillStyle = 'red' : ctx.fillStyle = 'white'
        ctx.fillText('Seeds: ' + this.seeds + '/10', 1050, 200)
        ctx.drawImage(this.player, this.position.x, this.position.y, this.height, this.width)
        if (this.seeds <= 0) {
            ctx.fillText('Time to Harvest:', 355, 200)
            let img = document.getElementById('adult-plant')
            // ctx.drawImage(img, 755, 150, 40, 60)
        }
        this.plants.forEach((plant) => {
            // ctx.drawImage(this.player, this.position.x, this.position.y, this.height, this.width)
            if (plant.position.y > this.position.y) {
                ctx.drawImage(this.player, this.position.x, this.position.y, this.height, this.width)
                plant.update(this.ctx)
            } else {
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
            // this.player.src = 'src/assets/images/player_left.png'
            this.player = document.getElementById('player-left')
            this.position.x -= 5}
        if (this.keys && this.keys['ArrowRight']) {
            this.state = 0
            this.player = document.getElementById('player-right')
            // this.player.src = 'src/assets/images/player_right.png'
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
        debugger
        if (this.seeds > 0 && this.seeds <= 10) {
            const plantInstance = new Plant(this)
            this.plants.forEach(plant => {
                debugger
                if (Math.abs((this.position.x) - (plant.position.x)) <= 40 || 
                Math.abs((this.position.y) - (plant.position.y)) <= 40) {
                    debugger
                    // const plantInstance = new Plant(this)
                    this.plants.push(plantInstance)
                    this.plants[this.plants.length - 1].draw(this.ctx)
                    this.seeds -= 1
                } 
            })
        }
    }
    
    pick() {
        if (this.seeds <= 8) {
            this.plants.forEach( plant => {
                if (Math.abs((this.position.x + this.width / 2) - (plant.position.x + plant.width / 2)) <= 40 && 
                Math.abs((this.position.y + this.height / 2) - (plant.position.y + plant.height / 2)) <= 40 && 
                plant.stage === 2) {
                    let index = this.plants.indexOf(plant)
                    this.plants.splice(index, 1)
                    if (plant.stage === 2) {
                        this.seeds += 2
                        this.oxygen.increaseO2();
                    }
                }
            })
        }
    }
}


export default Character;

