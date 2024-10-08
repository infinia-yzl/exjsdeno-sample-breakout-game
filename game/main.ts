import { Engine } from "https://esm.sh/excalibur@0.29.3";
import Paddle from "./actors/Paddle.ts";

const game = new Engine({
  width: 800,
  height: 600,
});

// `game.add` is the same as calling
// `game.currentScene.add`
game.add(new Paddle(game));

game.start().then(() => {
});
