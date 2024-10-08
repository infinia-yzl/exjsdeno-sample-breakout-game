import { Color, CollisionType, Actor, Engine } from "https://esm.sh/excalibur@0.29.3";

const game = new Engine({
  width: 800,
  height: 600,
});

// Create an actor with x position of 150px,
// y position of 40px from the bottom of the screen,
// width of 200px and a height of 20px
const paddle = new Actor({
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
paddle.body.collisionType = CollisionType.Fixed;

// `game.add` is the same as calling
// `game.currentScene.add`
game.add(paddle);

game.start().then(() => {

});
