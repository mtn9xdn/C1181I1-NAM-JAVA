var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 4;
var barX = 200;

function gameBoard(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.draw = function (){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(0,0,100,20);
    }
}



