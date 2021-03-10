
class StartScreen {
    constructor(ctx) {
        this.ctx = ctx;
        // this.background = new Image();
        // this.background.src = '/src/assets/images/game_start_background.png'
        this.ship = new Image();
        this.ship.src = '/src/assets/images/spaceship_sprite_sheet.png'
        // this.ship.src = '/src/assets/images/spaceship.gif'
        this.canWidth = 1400;
        this.canHeight = 760;
        this.x = 0;
        this.y = 0;
        this.srcX = 0;
        this.srcY = 0;
        this.sheetWidth = 3157;
        this.sheetHeight = 202;
        this.frameCount = 10
        this.width = this.sheetWidth / this.frameCount
        this.height = this.sheetHeight
        this.currentFrame = 0;
    }

    
    update() {
        // let currentFrame = 0
        this.currentFrame = ++this.currentFrame % this.frameCount;
        this.srcX = this.currentFrame * this.width
        this.srcY = 0
        
        
    }

    draw(ctx) {
        this.update();
        // ctx.drawImage(this.ship, this.srcX, this.srcY, this.width, this.height)
        ctx.drawImage(this.ship, 0,0)
        ctx.font = "50px DotGothic16";
        ctx.fillStyle = 'white'
        ctx.fillText("Click Anywhere to Start", 440, 650);
    }
}

export default StartScreen;