import Character from './character'
import Wall from './walls';
import Oxygen from './oxygen'


class GameBoard {
    constructor(ctx) {
        this.ctx = ctx
        this.floor = new Image();
        this.floor.src = '/src/assets/images/floor_background.png'
        this.oxygen = new Oxygen(37, 600, 63, 55, -1.0)
        this.player = new Character(300, 500, 100, this.ctx, this.oxygen);
        this.wall = new Wall(1370, 140, 15, 0)
        this.game = document.querySelector('#game-screen');
        this.gameOver = document.querySelector('#game-over')
        this.ctx2 = this.gameOver.getContext('2d');
    }

    draw(ctx) {
        ctx.drawImage(this.floor, 0, 0, 1400, 760)
        this.wall.draw(ctx)
        this.oxygen.draw(ctx)
        this.player.draw(ctx)
    }

    update(deltaTime, ctx) {
        this.draw(ctx)
        this.player.update(deltaTime, ctx)
    }

    lose() {
        this.oxygen = new Oxygen(37, 600, 63, 55, -1.6)
        this.player = new Character(300, 500, 100, this.ctx, this.oxygen);
    }
}

export default GameBoard;

