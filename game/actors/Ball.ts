import {
  Actor,
  CollisionType,
  Color,
} from "https://esm.sh/excalibur@0.29.3";

export default class Ball extends Actor {
  // Create a ball at pos (100, 300) to start
  constructor() {
    super({
      x: 100,
      y: 300,
      // Use a circle collider with radius 10
      radius: 10,
      // Set the color
      color: Color.Red,
    });

    // Set the collision Type to passive
    // This means "tell me when I collide with an emitted event, but don't let excalibur do anything automatically"
    this.body.collisionType = CollisionType.Passive;
  }
}
