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
