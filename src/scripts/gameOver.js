
class GameOver {
    constructor(ctx1) {
        this.ctx = ctx1;
        // this.background = new Image();
        // this.background.src = '/src/assets/images/game_start_background.png'
        this.background = document.getElementById('game-start-img')
    }

    draw(ctx2) {
        ctx2.drawImage(this.background, 0, 0)

        ctx2.font = "50px DotGothic16";
        ctx2.fillStyle = 'red'
        ctx2.fillText("GAME OVER", 580, 175);
        ctx2.font = "40px DotGothic16";
        ctx2.fillStyle = 'white'
        ctx2.fillText("Each of us have a gift, given us freely by the universe", 160, 275);
        ctx2.fillText("And each of us with every breath gives something back", 175, 375);
        ctx2.font = "45px DotGothic16";
        ctx2.fillText("- Kim Stanley Robinson, Red Mars", 190, 485);
        
        ctx2.font = "30px DotGothic16";
        ctx2.fillText("Click Anywhere to Live Again", 500, 600);
    }
}

export default GameOver;