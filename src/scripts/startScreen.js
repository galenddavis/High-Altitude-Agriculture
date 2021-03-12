
class StartScreen {
    constructor(ctx1) {
        this.ctx = ctx1;
        // this.background = new Image();
        this.background = document.getElementById('game-start-img')
        // this.background.src = '/src/assets/images/game_start_background.png'
        // this.ship = new Image();
        this.ship = document.getElementById('ship-sprites')
        // this.ship.src = '/src/assets/images/spaceship_sprite_sheet.png'
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
        // ctx1.drawImage(this.ship, this.srcX, this.srcY, this.width, this.height, 540, 200, 287, 202)

        ctx1.font = "50px DotGothic16";
        ctx1.fillStyle = 'white'
        ctx1.fillText("Click Anywhere to Start", 400, 480);
    }
}

export default StartScreen;