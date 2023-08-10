# Road map

To learn everything of 2D game programming from scratch. Most of the things have been already implemented in various game engines like phaserJS. The implementation here is primitive to understand the basics of how things work. The ideas and terms can be easily to transfer to other game engines.

## Canvas and drawing

to learn:

* draw basic shapes
* draw images

### Graphics

* draw some complex shapes

### TileMap

* draw maps

## Animation

### sprites

### sprite sheets

## Control

### keyboard

### mouse

## Class and sprite

On a game scene, there could be hundreds of sprites interacting with player and each other.

All the objects instantiated from the same class have the same properties, methods, behaviors.

## Events

Events are the great practices to simple game logic.

## Game loop

Game loop is all you need for a game. Don't overthink it, don't over-architect it. Just realize that a computer can do a lot of things in one sixtieth of a second,

Each 1/60 second is a frame.

```js
function init()
{
    // sets up sprites on the scene
}

function gameLoop()
{
    //gameLoop is executed every 1/60 second
    requestAnimationFrame(gameLoop);
    // user input to control character to move
    // game manager checks game rule, i.e., collision, hit-box
    // update(); // all the game logic
    // render everything in the frame
    // other sprites maintain own logic for it's own movement
    // render();
    gameLoop(); //recursive call in each 1/60
}

requestAnimationFrame(gameLoop);
```

## Physics

### Collision

### impact
