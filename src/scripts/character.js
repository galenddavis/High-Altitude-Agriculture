// const Plant = require('./plant')
import Plant from './plant'
import plantSizes from './utilities';

class Character {
    constructor(x, y, size, ctx) {
        this.keys = [];
        this.ctx = ctx
        this.width = size;
        this.height = size;
        this.plants = [];
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

    draw(ctx) {
        this.move()
        this.plants.forEach( plant => {
            plant.draw(this.ctx)
        })
        // ctx.fillStyle = 'red'
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.drawImage(this.player, this.position.x, this.position.y, this.height, this.width)

    }

    move(keys) {
        // switch (this.keys) {
        //     case 'ArrowUp':
        //         this.position.y -= 8
        //         console.log(this.position.y)
        //         break;
        //     case 'ArrowDown':
        //         this.position.y += 8
        //         break;
        //     case 'ArrowLeft':
        //         this.position.y -= 8
        //         break;
        //     case 'ArrowRight':
        //         this.position.y += 8
        //         break;
        //     default:
        //         break;
        // }
      
    }

    update(deltaTime) {
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
        if (this.position.y < 140) this.position.y = 140
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
           
    }

    pick() {
        this.plants.forEach( plant => {
            if (this.position.x - plant.position.x <= 30) {
                plant = {}
            }
        })
    }

    pick() {
        this.plants.forEach( plant => {
            if (Math.abs((this.position.x + this.width / 2) - (plant.position.x + plant.width / 2)) <= 40) {
                let index = this.plants.indexOf(plant)
                this.plants.splice(index, 1)
            }
        })
    }
}



// module.exports = Character
export default Character;

