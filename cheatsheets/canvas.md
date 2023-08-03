# Canvas

Create a canvas

```html
<canvas id="canvas" width=256 height=256 style="border:1px dashed black"> </canvas>
<script>
  let canvas = document.getElementById ('canvas');
  let context = canvas.getContext ('2d');
  // ...
  // ... do stuff with the context ...
  // context.fillStyle = 'red';
  // context.fillRect(0,0,150,60);
  // ...
</script>
```

or JavaScript only

```js
let canvas = document.createElement("canvas");
canvas.setAttribute("width", "256");
canvas.setAttribute("height", "256");
canvas.style.border = "1px dashed black";
document.body.appendChild(canvas);
let context = canvas.getContext("2d");
```

## Radians

Anything that involves angles is usually expressed in radians rather than degrees.

A circle has 360 degrees or 2π radians. Radians is just another unit of measure for angles. If we move clockwise, then 0 radians lies due east, π x 0.5 is south, π is west, π x 1.5 is north, and 2π is back where we started. The value π is accessible in JavaScript via the method Math.PI.

```js
const deg2Rad = deg => (Math.PI / 180) * deg;
const rad2Deg = rad => (180 / Math.PI) * rad;
```
