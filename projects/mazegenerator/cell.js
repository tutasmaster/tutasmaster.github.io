/************************
Cell Constructor Function 
************************/

//The Cell constructor requires an x and a y on the grid
function Cell(x,y){
    //Set the position
    this.x = x;
    this.y = y;

    //Set the walls
    this.walls = [true,true,true,true];

    //Set the cell as not visited
    this.visited = false;

    //Display the Cell function
    this.show = function(){
        
        //i and j are the Cell position on the canvas
        var i = x * w;
        var j = y * w;

        //Set the fill color vColor(visited Color) if visited and draw a rectangle equivalent to the cell position on the Canvas
        if(this.visited){
            ctx.fillStyle = vColor;
            ctx.fillRect(i,j,w,w);
        }
        //Set the stroke color as gColor(grid Color)
        ctx.strokeStyle=gColor;

        //Draw a line if the correspondent wall is active
        if(this.walls[0] == true){drawLine(i,j,i+w,j);}
        if(this.walls[1] == true){drawLine(i+w,j,i+w,j+w);}
        if(this.walls[2] == true){drawLine(i+w,j+w,i,j+w);}
        if(this.walls[3] == true){drawLine(i,j+w,i,j);}
    }

    //Highlight the cell function
    this.highlight = function(color){
        var i = this.x*w;
        var j = this.y*w;
        ctx.fillStyle = color;
        ctx.fillRect(i,j,w,w);
    }

    //Check adjacent Cells function
    this.checkNeighbors = function(){
        //Adjacent cells array
        var neighbors = [];

        //Set the top, right, bottom and left Cells as their own variables
        var top = grid[index(x,y - 1)];
        var right = grid[index(x + 1,y)];
        var bottom = grid[index(x,y + 1)];
        var left = grid[index(x - 1,y)];

        //Push the top, right, bottom and left Cells if they exist and they haven't been visited yet
        if(top && !top.visited){
            neighbors.push(top);
        }
        if(bottom && !bottom.visited){
            neighbors.push(bottom);
        }
        if(right && !right.visited){
            neighbors.push(right);
        }
        if(left && !left.visited){
            neighbors.push(left);
        }

        //Check if there are available neighbors
        if(neighbors.length > 0){
            
            //Get a random number equivalent to one of the adjacent available Cells
            var r = Math.floor(Math.random() * neighbors.length) + 0;
            
            //Return the random Cell
            return neighbors[r];
        }else{

            //Otherwise, return undefined
            return undefined;
        }
    }
}

/*************************
Remove grid walls function
*************************/

//removeWalls uses 2 Cells as variables
function removeWalls(a,b){

    //Get which cell is on the left and which one is on the right
    var x = a.x - b.x;

    //Check which one is on the left and which one is on the right
    if(x === 1){
        //Remove the equivalent walls
        a.walls[3] = false;
        b.walls[1] = false;
    }else if(x === -1){
        //Remove the equivalent walls
        a.walls[1] = false;
        b.walls[3] = false;
    }
    //Get which cell is on the top and which one is on the bottom
    var y = a.y - b.y;

    //Check which one is on the top and which one is on the bottom
    if(y === 1){
        //Remove the equivalent walls
        a.walls[0] = false;
        b.walls[2] = false;
    }else if(y === -1){
        //Remove the equivalent walls
        a.walls[2] = false;
        b.walls[0] = false;
    }
}