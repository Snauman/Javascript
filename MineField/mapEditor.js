window.onload=function(){
    console.log("document loaded");
    gameBoard = document.getElementById("game")
    gameBoard.width = w
    gameBoard.height = h
    gameBoardContext = gameBoard.getContext('2d')
    drawBackground(currentMap)
    let button=document.getElementById('save')
    button.addEventListener('click',save)
    function changeTile(e){
       
            let caseX = Math.floor(getCoords(gameBoard, e).x / resolution)
            let caseY = Math.floor(getCoords(gameBoard, e).y / resolution)
            console.log("x: " + caseX)
            console.log("y: " + caseY);
            console.log(currentMap[caseY][caseX]);
            let input = document.getElementById('code')
            draw(caseX, caseY, input.value)
            drawTile(currentMap, caseY, caseX)
    
    }
    gameBoard.addEventListener('mousedown', function(e){
        gameBoard.addEventListener('mousemove',changeTile)
    })

    
    gameBoard.addEventListener('mouseup',function(e){
        gameBoard.removeEventListener('mousemove',changeTile)
    })

   
}


function getCoords(el,event){
    var ox =el.scrollLeft-el.offsetLeft,
    oy=el.scrollTop-el.offsetTop
    while(el=el.offsetParent){
        ox+=el.scrollLeft-el.offsetLeft
        oy+=el.scrollTop-el.offsetTop

    }
    return {x:event.clientX+ox,y:event.clientY+oy}
}

function draw(cx,cy,code){
    let oldCase = currentMap[cy][cx]
    currentMap[cy][cx]=code
    console.log("Change "+oldCase+" into "+currentMap[cy][cx]);
    
}

function save(fichier){
    console.log("beginning saving");
    
    $.ajax({
        url:'save.php',
        type:'post',
        data:{
            json:JSON.stringify(currentMap)
        },
        success:function(data){
            console.log("Save successful");
            
        },
        fail:function(data){
            console.log(data);
            
        }
    })
    console.log('ending saving');
    
}

