import { Shark } from "./shark.js"
import { TropicalFish } from "./tropicalfish.js"

class Game {
      
    private fish : TropicalFish[] = []
    private shark : Shark
    

    constructor() {
        console.log("Game was created!")
        
        // Create the fish
        this.fish.push(new TropicalFish("fish"))
        this.fish.push(new TropicalFish("fish"))
        this.fish.push(new TropicalFish("fish"))
        this.fish.push(new TropicalFish("fish"))
        this.fish.push(new TropicalFish("fish"))

        // Create the shark
        this.shark = new Shark("shark")

        this.gameLoop()
    }

    private gameLoop() : void {
        // update the fish
        for (const fish of this.fish) {
            fish.update()

            if(this.checkCollision(fish.getBoundingRect(), this.shark.getBoundingRect())) {
                fish.killFish()
            }
        }
        // update the shark
        this.shark.update()

        requestAnimationFrame(() => this.gameLoop())
    }

    private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
} 

new Game()