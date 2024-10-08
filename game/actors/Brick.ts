import {
  Actor,
  CollisionType,
  Color,
} from "https://esm.sh/excalibur@0.29.3";

export default class Brick extends Actor {
  constructor(x: number, y: number, width: number, height: number, color: Color) {
    super({
      x,
      y,
      width,
      height,
      color,
    });

    this.body.collisionType = CollisionType.Active;
  }
}
