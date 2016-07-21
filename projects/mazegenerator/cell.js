function Cell(x,y){
    this.x = x;
    this.y = y;

    this.walls = [true,true,true,true];

    this.visited = false;

    this.show = function(){
        var i = x * w;
        var j = y * w;
        if(this.visited){
            ctx.fillStyle = vColor;
            ctx.fillRect(i,j,w,w);
        }
        ctx.strokeStyle=gColor;

        if(this.walls[0] == true){drawLine(i,j,i+w,j);}
        if(this.walls[1] == true){drawLine(i+w,j,i+w,j+w);}
        if(this.walls[2] == true){drawLine(i+w,j+w,i,j+w);}
        if(this.walls[3] == true){drawLine(i,j+w,i,j);}
    }
    this.highlight = function(color){
        var i = this.x*w;
        var j = this.y*w;
        ctx.fillStyle = color;
        ctx.fillRect(i,j,w,w);
    }

    this.checkNeighbors = function(){
        var neighbors = [];

        var top = grid[index(x,y - 1)];
        var right = grid[index(x + 1,y)];
        var bottom = grid[index(x,y + 1)];
        var left = grid[index(x - 1,y)];

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
        if(neighbors.length > 0){
            var r = Math.floor(Math.random() * neighbors.length) + 0;
            return neighbors[r];
        }else{
            return undefined;
        }
    }
}

function removeWalls(a,b){
  var x = a.x - b.x;
  if(x === 1){
    a.walls[3] = false;
    b.walls[1] = false;
  }else if(x === -1){
    a.walls[1] = false;
    b.walls[3] = false;
  }

  var y = a.y - b.y;
  if(y === 1){
    a.walls[0] = false;
    b.walls[2] = false;
  }else if(y === -1){
    a.walls[2] = false;
    b.walls[0] = false;
  }
}