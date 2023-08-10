# Road map

To learn everything of 2D game programming from scratch.

## Canvas and drawing

to learn:
*

### Graphics

### TileMap

## Animation

## Control

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
    // use input to control player
    // sprites maintain own logic
    // game manager checks game rule
    // render sprites a bit
    gameLoop(); //recursive call in each 1/60
}

```
