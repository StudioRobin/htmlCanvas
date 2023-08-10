# Animation

<https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame>

<https://github.com/JPhilipp/Bomomo>

## Move

### Frame Per Second

[Frame rate](https://en.wikipedia.org/wiki/Frame_rate)

FPS is the number of times that an animation is updated or changed each second. 60 frames per second. One frame duration is close to 16.67 milliseconds. Positions of all the sprites on the stage is updated in every 16.67 millisecond.

frameRate = 1000 / fps

```js
function gameLoop(timestamp) {
    requestAnimationFrame(gameLoop);

    const t = timestamp / 1000; // Let's work in seconds
    dt = t - last; // each frame duration, close to 0.0166667 second
    last = t;

    // all the movement is updated every dt
    // i.e., x = x * dt * speed;

}
```

### speed

### direction

## sprites

### particles
