/***************
Global Variables
***************/

//Canvas Variables
var entranceExit = false;
var HEIGHT = 200;
var WIDTH = 200;
var fps = 5;
var canvas,ctx;

var INTERVAL;

//Maze Variables
var cols, rows;
var w = 10;
var grid = [];
var current;
var stack = [];

var gridRandA;
var gridRandB;

//Maze Colors
var vColor = "#FFEE80"; /*Visited Color*/
var gColor = "#000000"; /**Grid Color***/
var nColor = "#000000"; /***Null Color**/
var cColor = "#FFFFFF"; /*Current Color*/

/************************
Setup the maze generation
************************/

function setup(){
  //Clear the last generation
  grid = [];
  stack = [];

  //Get the display variables through the inputs
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

  gridRandA = Math.floor(Math.random() * cols);
  gridRandB = Math.floor(Math.random() * cols);

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
  if(INTERVAL != undefined){
    clearInterval(INTERVAL);
    INTERVAL = setInterval(draw,1000/fps);
  }else{
    INTERVAL = setInterval(draw,1000/fps);
  }
}
