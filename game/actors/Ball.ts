import {
  Actor,
  CollisionType,
  Color,
  Vector,
  Engine,
} from "https://esm.sh/excalibur@0.29.3";

export default class Ball extends Actor {
  private readonly ballSpeed: Vector;
  private game: Engine;

  constructor(game: Engine, ballSpeed: Vector) {
    super({
      x: game.halfDrawWidth,
      y: game.halfDrawHeight,
      radius: 10,
      color: Color.Red
    });

    this.game = game;
    this.ballSpeed = ballSpeed;
    this.body.collisionType = CollisionType.Passive;

    this.attachEvents();
    this.startServe();
  }

  private attachEvents(): void {
    this.on('postupdate', this.handlePostUpdate.bind(this));
  }

  private startServe(): void {
    // Start the serve after a second
    setTimeout(() => {
      // Set the velocity in pixels per second
      this.vel = this.ballSpeed;
    }, 1000);
  }

  private handlePostUpdate(): void {
    // If the ball collides with the left side
    // of the screen reverse the x velocity
    if (this.pos.x < this.width / 2) {
      this.vel.x = this.ballSpeed.x;
    }

    // If the ball collides with the right side
    // of the screen reverse the x velocity
    if (this.pos.x + this.width / 2 > this.game.drawWidth) {
      this.vel.x = this.ballSpeed.x * -1;
    }

    // If the ball collides with the top
    // of the screen reverse the y velocity
    if (this.pos.y < this.height / 2) {
      this.vel.y = this.ballSpeed.y;
    }
  }
}
