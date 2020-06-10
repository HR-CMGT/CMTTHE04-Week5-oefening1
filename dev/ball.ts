// <reference path="gameobject.ts"/>

class Ball {
    
    private div : HTMLElement
    
    private x : number
    private y: number
    
    private speedX: number
    private speedY: number
    
    constructor() {
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)
        
        this.x = window.innerWidth
        this.y = Math.random() * (window.innerHeight - 100)

        this.speedX = -3 - (Math.random() * 6)
        this.speedY = Math.random() * 6 - 3
    }

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }
    
    public hitPaddle(){
        this.speedX *= -1
    }

    public update() : void {
        this.x += this.speedX
        this.y += this.speedY
        
        if( this.y + this.getRectangle().height > window.innerHeight || this.y < 0) { 
            this.speedY *= -1
        }

        if (this.x > window.innerWidth) {
            this.speedX *= -1
        } 
                        
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)` 
    }
}