import { Shark } from "./shark.js";
import { TropicalFish } from "./tropicalfish.js";
class Game {
    constructor() {
        this.fish = [];
        console.log("Game was created!");
        this.fish.push(new TropicalFish("fish"));
        this.fish.push(new TropicalFish("fish"));
        this.fish.push(new TropicalFish("fish"));
        this.fish.push(new TropicalFish("fish"));
        this.fish.push(new TropicalFish("fish"));
        this.shark = new Shark("shark");
        this.gameLoop();
    }
    gameLoop() {
        for (const fish of this.fish) {
            fish.update();
            if (this.checkCollision(fish.getBoundingRect(), this.shark.getBoundingRect())) {
                fish.killFish();
            }
        }
        this.shark.update();
        requestAnimationFrame(() => this.gameLoop());
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map