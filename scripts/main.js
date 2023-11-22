/**
 * **Autor:** Enrique Fernandez - Campoamor Fernandez
 * **GitHub:** https://github.com/Kikenvt/DWEC_Examen_T3.git
 */



import { ctx, width, height } from "./canvas-setup.js";
import { balls } from "./constructorBall.js";

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'; // Cambiado el fondo a negro
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        for (const otherBall of balls) {
            if (ball !== otherBall) {
                ball.collisionDetect(otherBall);
            }
        }
    }

    requestAnimationFrame(loop);
}

loop();