/************
Update Function
************/
function draw() {

    //Clear the canvas and paint it black
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,WIDTH,HEIGHT);

    //Show all the Cells on the grid
    for(var i = 0; i < grid.length; i++){
        grid[i].show();
    }

    //Check if current exists
    if(current){
        //Highlight it
        current.highlight(cColor);

        //Get if it has adjacent available Cells
        next = current.checkNeighbors();

        //Check that cell as visited
        current.visited = true;
    }

    //Check if there is an adjacent Cell
    if(next){

        //Push the current Cell to the stack
        stack.push(current);
        
        //Set the next Cell as visited
        next.visited = true;

        //Remove the walls between the current Cell and the next Cell
        removeWalls(current, next);

        //Set the current Cell as the next Cell
        current = next;

    //If there is no adjacent Cell, then Check if there are Cells on the stack
    }else if(stack.length > 0){
        //If there are none, then get the pop the last Cell from the stack and set it as the current Cell
        current = stack.pop();
    
    //If not then declare the maze finishe by setting the current Cell as null
    }else{
        current = null;
    }
}

/*******************
Draw a Line function
*******************/
function drawLine(x,y,ax,ay){

    //Reset the Path
    ctx.beginPath();

    //Set the start as x,y
    ctx.moveTo(x,y);

    //Set the end as ax,ay
    ctx.lineTo(ax,ay);

    //Stroke the line
    ctx.stroke();
}

/****************************** 
Get a Grid index value function
******************************/
function index(x,y){

    //If there is no Cell then return -1
    if(x < 0 || y < 0 || x > cols-1 || y > rows - 1){
        return -1;
    }

    //If there is a Cell return the following equation: x + y * cols
    return x + y * cols;
}