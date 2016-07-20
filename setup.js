//Canvas Variables
var entranceExit = false;
var HEIGHT = 400;
var WIDTH = 400;
var fps = 5;
var INTERVAL;
var canvas,ctx;

//Maze Variables
var cols, rows;
var w = 10;
var grid = [];
var current;
var stack = [];

//Maze Color
var vColor = "#FFFFFF";
var gColor = "#000000";
var nColor = "#000000";
var cColor = "#FF00FF";

function setup(){
  HEIGHT = document.getElementById('height').value;
  WIDTH = document.getElementById("width").value;
  fps = document.getElementById("fps").value;

  grid = [];

  canvas = document.getElementById("mazeCanvas");
  ctx = canvas.getContext("2d");

  canvas.height = HEIGHT;
  canvas.width = WIDTH;

  cols = Math.floor(WIDTH/w);
  rows = Math.floor(HEIGHT/w);

  for(var j = 0; j < rows; j++){
    for(var i = 0; i < cols; i++){
      var cell = new Cell(i,j);
      grid.push(cell);
    }
  }

  current = grid[0];

  var INTERVAL = setInterval(draw,1000/fps);
}
