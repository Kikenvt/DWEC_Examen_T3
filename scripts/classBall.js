import { randomRGB, ctx, width, height } from "./canvas-setup.js";


export class Ball {
    constructor(x, y, velX, velY, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = randomRGB();
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // Estaba declarada Math.PI como función.
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
            this.velX = -this.velX;
        }

        if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
            this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    collisionDetect(otherBall) {
        const dx = this.x - otherBall.x;
        const dy = this.y - otherBall.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + otherBall.size) {
            // Al cruzarse estaba declarado que las dos bolas se les asignaba el mismo color, de esta manera al cruzarse cada bola recibe un color aleatorio.
            this.color = randomRGB();
            otherBall.color = randomRGB();
        }
    }
}
