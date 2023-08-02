window.addEventListener("load", startup, false);

function startup(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 150, 100);
    var score = {};
    score["John"] = 0;
    var addscore = score["John"] +1;
}
