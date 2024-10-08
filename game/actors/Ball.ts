import {
  Actor,
  CollisionType,
  Color,
  Vector,
  Engine,
  CollisionStartEvent,
} from "https://esm.sh/excalibur@0.29.3";
import Brick from "./Brick.ts";

export default class Ball extends Actor {
  private readonly ballSpeed: Vector;
  private game: Engine;
  private colliding: boolean = false;

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
    this.on('collisionstart', this.handleCollisionStart.bind(this));
    this.on('collisionend', this.handleCollisionEnd.bind(this));
    this.on('exitviewport', this.handleExitViewport.bind(this));
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
  private handleCollisionStart(ev: CollisionStartEvent): void {
    if (ev.other instanceof Brick) {
      ev.other.kill();
    }

    const intersection = ev.contact.mtv.normalize();

    if (!this.colliding) {
      this.colliding = true;
      if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
        this.vel.x *= -1;
      } else {
        this.vel.y *= -1;
      }
    }
  }

  private handleCollisionEnd(): void {
    this.colliding = false;
  }

  private handleExitViewport(): void {
    alert('You lose!');
  }
}
