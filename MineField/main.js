


//Grid of 7x20
var resolution=50
var col = 20
var row = 40
var w=1000
var h=2000
var gameBoard
var gameBoardContext
var currentMap//=map1;
$.getJSON("map.json",function(donnee) {
    console.log(donnee);
    donnee=JSON.stringify(donnee)
    donnee=donnee.replace(/\\n/g,'\\n')
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, '\\&')
        .replace(/\\r/g, '\\r')
        .replace(/\\t/g, '\\t')
        .replace(/\\b/g, '\\b')
        .replace(/\\f/g, '\\f')
    donnee=donnee.replace(/[\u0000-\u0019]+/g,"")    
    let obj=JSON.parse(donnee)
    console.log(obj);
    
    currentMap=Object.values(obj)
    
})




//tile images initilization
var grass=new Image(resolution,resolution)
grass.src="graphics/tiles/grass_"+resolution+"x"+resolution+".png"
var water = new Image(resolution, resolution)
water.src = "graphics/tiles/water_" + resolution + "x" + resolution + ".png"

//sprite images initialization
var playerSprite=new Image(resolution,resolution)
playerSprite.src = "graphics/sprites/player_"+resolution+"x"+resolution+".png"

//Object creation

var player = {
    xIndex: 0,
    yIndex: 0,
    life:100,
    food:100,
    sleep:100,
    move: function (direction,map) {
       
       
        switch (direction) {
            case 'up':
                if (this.yIndex > 0)
         
                this.yIndex--   
                
                break;
            case 'down':
                if (this.yIndex < row)
                this.yIndex++
                break
            case 'right':
            
            
                if (this.xIndex < col)
                this.xIndex++
                break
            case 'left':
                if (this.xIndex > 0)
                this.xIndex--
            default:
                break;
        }
      

    },
  
    draw: function () {
       

        gameBoardContext.drawImage(playerSprite,this.xIndex * resolution, this.yIndex * resolution, resolution, resolution)
    },
    erase:function(){
        gameBoardContext.clearRect(this.xIndex * resolution, this.yIndex * resolution, resolution, resolution)   
    }

}

//Game init

window.onload=function(){
    console.log("document loaded");
    gameBoard=document.getElementById("game")
    gameBoard.width=w
    gameBoard.height=h
    gameBoardContext=gameBoard.getContext('2d')
    //gameBoard.style.backgroundColor="black"
    drawBackground(currentMap)
    player.draw();
    this.document.addEventListener("keydown",function(e){
        
        
        player.erase();
        drawTile(currentMap,player.yIndex,player.xIndex)
        //drawBackground(currentMap);
       
        switch(e.key){
            case "z":
                if(player.yIndex-1>=0)
                if (currentMap[player.yIndex-1][player.xIndex]!='W')
                player.move('up',currentMap)
                break;
            case "s":
                if (player.yIndex + 1 < row)
                if (currentMap[player.yIndex + 1][player.xIndex] != 'W')
                player.move('down',currentMap)
                break;
            case "d":
                if (player.xIndex + 1 < col)
                if (currentMap[player.yIndex][player.xIndex+1] != 'W')
                player.move('right',currentMap)
                break;
            case "q":
                if (player.xIndex - 1 >= 0)
                if (currentMap[player.yIndex][player.xIndex-1] != 'W')
                player.move('left',currentMap)
                break;
        }
        player.draw();
        window.scrollTo(player.xIndex*resolution,player.yIndex*resolution)
    })


}

//draw the background of the map
function drawBackground(map){
  

    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            
            //draw lines for now (top,right,bottom,left)
            
            gameBoardContext.fillRect(j*resolution,i*resolution,resolution,1)
            gameBoardContext.fillRect((j+1) * resolution, i * resolution , 1, resolution)
            gameBoardContext.fillRect(j * resolution, (i+1) * resolution, resolution, 1)
            gameBoardContext.fillRect(j * resolution, i * resolution, 1, resolution)

            //Use the tiles
           /* switch(map[i][j]){
                case "G":
                    gameBoardContext.drawImage(grass, j * resolution, i * resolution, resolution, resolution)
                    break;
                case "W":
                    gameBoardContext.drawImage(water, j * resolution, i * resolution, resolution, resolution)
                    break; 

            }*/
            drawTile(map,i,j)
            
            
        } 
    }
}

function drawTile(map,x,y){
    switch (map[x][y]) {
        case "G":
            gameBoardContext.drawImage(grass, y * resolution, x * resolution, resolution, resolution)
            break;
        case "W":
            gameBoardContext.drawImage(water, y * resolution, x * resolution, resolution, resolution)
            break;

    }
}

function updateStatus(){
    let div=document.getElementById('status')
    if(div!=null)
    div.innerHTML="Life: "+player.life+"<br/> Hunger: "+player.food+"<br/> Sleep: "+player.sleep

}

window.setInterval(updateStatus,100)

/*window.setInterval(function(){
    window.scrollTo(0,0)
},1)
*/
function loadMap(){
    
}