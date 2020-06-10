class Game {
    
    private balls: Ball[] = []
    private paddle: Paddle

    constructor() {
        this.paddle = new Paddle(20, 87, 83)

        for (var i = 0; i < 5; i++) {
            this.balls.push(new Ball())
        }

        this.update()        
    }

    public update(): void {
        for (var b of this.balls) {

            // ball hits paddle
            if (this.checkCollision(b.getRectangle(), this.paddle.getRectangle())) {
                b.hitPaddle()
            }

            // ball leaves the screen: gameover!
            if (b.getRectangle().left < 0) {
                console.log("game over")
            }

            b.update()
        }

        this.paddle.update()

        requestAnimationFrame(() => this.update())
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }
    
} 


window.addEventListener("load", () => new Game())