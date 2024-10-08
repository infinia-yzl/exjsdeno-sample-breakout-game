import {
  Actor,
  CollisionType,
  Color,
  Engine,
} from "https://esm.sh/excalibur@0.29.3";

export default class Paddle extends Actor {
  // Create an actor with x position of 150px,
  // y position of 40px from the bottom of the screen,
  // width of 200px and a height of 20px
  constructor(game: Engine) {
    super({
      x: 150,
      y: game.drawHeight - 40,
      width: 200,
      height: 20,
      // Let's give it some color with one of the predefined
      // color constants
      color: Color.Chartreuse,
    });

    // Make sure the paddle can participate in collisions, by default excalibur actors do not collide with each other
    // CollisionType.Fixed is like an object with infinite mass, and cannot be moved, but does participate in collision.
    this.body.collisionType = CollisionType.Fixed;
  }
}
