//console.log("hi");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let drawBall = function (context, x, y, r) {
  console.log("ball drawn at: " + x + ", " + y + " r:" + r);
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.stroke();
};
let size = 20;
let maxSize = 50
drawBall(context, 200, 200, size);
for(var i = 0; i<maxSize; i++){
   
}