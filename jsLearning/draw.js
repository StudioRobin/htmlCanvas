//console.log("hi");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let drawBall = function (context, x, y, r) {
  console.log("ball drawn at: " + x + ", " + y + " r:" + r);
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.stroke();
};
let size = 10;
let maxSize = 50;
drawBall(context, 200, 200, size);
for(var i = 0; i<maxSize; i++){
    size++;
    drawBall(context, 100, 100, size);
};
let drawLine = function (ctx, x1, y1, x2, y2){
  console.log("line drawn");
  // Start a new Path
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);

// Draw the Path
ctx.stroke();
}
drawLine(context,1,1,100,100);