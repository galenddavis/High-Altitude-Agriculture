
class StartScreen {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Image();
        this.background.src = '/src/assets/images/game_start_background.png'
        this.ship = new Image();
        this.ship.src = '/src/assets/images/spaceship_sprite_sheet.png'
        // this.ship.src = '/src/assets/images/spaceship.gif'
        this.canWidth = 1400;
        this.canHeight = 760;
        this.x = 0;
        this.y = 0;
        this.srcX = 0;
        this.srcY = 0;
        this.sheetWidth = 7749;
        this.sheetHeight = 202;
        this.frameCount = 27
        // this.width = 1000
        // this.height = 1000
        this.width = this.sheetWidth / this.frameCount
        this.height = this.sheetHeight
        this.currentFrame = 0;
        this.frameCounter = 0
    }

    
    update() {
        this.frameCounter += 1
        if (this.frameCounter === 8) {
            this.currentFrame = ++this.currentFrame % this.frameCount;
            this.srcX = this.currentFrame * this.width
            this.srcY = 0
            this.frameCounter = 0
        }
    }

    draw(ctx1) {
        this.update();
        ctx1.drawImage(this.background, 0, 0)
        ctx1.drawImage(this.ship, this.srcX, this.srcY, this.width, this.height, 600, 250, 287, 202)

        ctx1.font = "50px DotGothic16";
        ctx1.fillStyle = 'white'
        ctx1.fillText("Click Anywhere to Start", 440, 650);
    }
}

export default StartScreen;