import { Engine, vec } from "https://esm.sh/excalibur@0.29.3";
import Paddle from "./actors/Paddle.ts";
import Ball from "./actors/Ball.ts";

const game = new Engine({
  width: 800,
  height: 600,
});

// `game.add` is the same as calling
// `game.currentScene.add`
const playerPaddle = new Paddle(game)
game.add(playerPaddle);
game.add(new Ball(game, vec(200, 100)));
game.input.pointers.primary.on("move", (evt) => {
  playerPaddle.pos.x = evt.worldPos.x;
});

game.start().then(() => {
});
