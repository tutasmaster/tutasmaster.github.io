function draw() {
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,WIDTH,HEIGHT);
    if(current){
        current.visited = true;
    }
    for(var i = 0; i < grid.length; i++){
        grid[i].show();
    }
    if(current){
        current.highlight(cColor);
        next = current.checkNeighbors();
    }

    if(next){
        stack.push(current);
        next.visited = true;
        removeWalls(current, next);
        current = next;

    }else if(stack.length > 0){
        current = stack.pop();
    }else{
        current = null;
    }
}

function drawLine(x,y,ax,ay){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(ax,ay);
    ctx.stroke();
}

function index(x,y){

  if(x < 0 || y < 0 || x > cols-1 || y > rows - 1){
    return -1;
  }

  return x + y * cols;
}