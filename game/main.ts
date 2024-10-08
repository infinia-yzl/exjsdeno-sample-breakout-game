import { Color, Engine, Vector } from "https://esm.sh/excalibur@0.29.3";
import Paddle from "./actors/Paddle.ts";
import Ball from "./actors/Ball.ts";
import Brick from "./actors/Brick.ts";


const game = new Engine({
  width: 800,
  height: 600,
});

const paddle = new Paddle(game);
game.add(paddle);

game.input.pointers.primary.on("move", (evt) => {
  paddle.pos.x = evt.worldPos.x;
});

const ballSpeed = new Vector(100, 100);
const ball = new Ball(game, ballSpeed);
game.add(ball);

// Build Bricks
const padding = 20;
const xoffset = 65;
const yoffset = 20;
const columns = 5;
const rows = 3;

const brickColor = [Color.Violet, Color.Orange, Color.Yellow];

const brickWidth = game.drawWidth / columns - padding - padding / columns;
const brickHeight = 30;

for (let j = 0; j < rows; j++) {
  for (let i = 0; i < columns; i++) {
    const brick = new Brick(
      xoffset + i * (brickWidth + padding) + padding,
      yoffset + j * (brickHeight + padding) + padding,
      brickWidth,
      brickHeight,
      brickColor[j % brickColor.length]
    );
    game.add(brick);
  }
}

game.start();
