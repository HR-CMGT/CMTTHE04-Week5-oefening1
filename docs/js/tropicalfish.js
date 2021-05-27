export class TropicalFish {
    constructor(tagName) {
        this.x = 0;
        this.y = 0;
        this.create();
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    create() {
        this.div = document.createElement("fish");
        document.body.appendChild(this.div);
    }
    update() {
        this.x -= 3;
        if (this.x + this.div.clientWidth < 0) {
            this.x = window.innerWidth;
            this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    killFish() {
        this.div.classList.add("dead");
    }
}
//# sourceMappingURL=tropicalfish.js.map