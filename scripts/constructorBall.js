import { random, width, height } from "./canvas-setup.js";
import { Ball } from "./classBall.js";


export const balls = [];

while (balls.length < 20) {
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        size
    );

    balls.push(ball);
}
