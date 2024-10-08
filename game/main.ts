import { Engine } from "https://esm.sh/excalibur@0.29.3";
import Paddle from "./actors/Paddle.ts";
import Ball from "./actors/Ball.ts";

const game = new Engine({
  width: 800,
  height: 600,
});

// `game.add` is the same as calling
// `game.currentScene.add`
game.add(new Paddle(game));
game.add(new Ball());

game.start().then(() => {
});
