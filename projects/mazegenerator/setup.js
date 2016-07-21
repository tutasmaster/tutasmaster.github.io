/***************
Global Variables
***************/

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

//Maze Colors
var vColor = "#FFFFFF"; /*Visited Color*/
var gColor = "#000000"; /**Grid Color***/
var nColor = "#000000"; /***Null Color**/
var cColor = "#FF00FF"; /*Current Color*/

/************************
Setup the maze generation
************************/

function setup(){
  //Clear the last generation
  grid = [];
  stack = [];
  clearInterval(INTERVAL);

  //Get the display variables through the inputs
  HEIGHT = document.getElementById('height').value;
  WIDTH = document.getElementById("width").value;
  fps = document.getElementById("fps").value;

  //Get the canvas variable
  canvas = document.getElementById("mazeCanvas");
  ctx = canvas.getContext("2d");

  //Set the height and width of the canvas
  canvas.height = HEIGHT;
  canvas.width = WIDTH;

  //Get the collumns and the rows
  cols = Math.floor(WIDTH/w);
  rows = Math.floor(HEIGHT/w);

  //Create the grid
  for(var j = 0; j < rows; j++){
    for(var i = 0; i < cols; i++){
      var cell = new Cell(i,j);
      grid.push(cell);
    }
  }

  //Set the current cell
  current = grid[0];

  //Set the interval
  var INTERVAL = setInterval(draw,1000/fps);
}
