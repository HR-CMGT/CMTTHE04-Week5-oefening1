export class Fish {
    constructor(tagName) {
        this.x = 0;
        this.y = 0;
        console.log("Fish was created!");
        this.create(tagName);
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
    create(tagName) {
        this.div = document.createElement(tagName);
        document.body.appendChild(this.div);
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=fish.js.map