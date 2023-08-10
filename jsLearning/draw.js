//console.log("hi");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let drawBall = function (context, x, y, r) {
  console.log("ball drawn at: " + x + ", " + y + " r:" + r);
  context.beginPath();
  context.arc(x, y, r, 0, 2 * Math.PI);
  context.stroke();
};

//drawBall(null, 1,3,15);
let balls = 7;
for (let i = 0; i < balls; i++) {
  for (let j = 0; j < balls; j++) {
    drawBall(context, i * 70 + 70, j * 70 + 70, 35);
  }
}
