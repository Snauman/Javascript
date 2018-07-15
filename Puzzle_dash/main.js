const l=150
var up=document.createElement('canvas')
var upContext=up.getContext('2d')
var center = document.createElement('canvas')
var centerContext = center.getContext('2d')
var bottom = document.createElement('canvas')
var bottomContext = bottom.getContext('2d')
var trash = document.createElement('canvas')
var trashContext=trash.getContext('2d')
var upBuffer=[]
var centerBuffer
var bottomBuffer = []
var scoreP=document.createElement('p');
var score=0
scoreP.innerHTML=0

up.width = l + ""
up.height = l + ""
center.width = l + ""
center.height = l + ""
bottom.width = l + ""
bottom.height = l + ""
trash.width = l + ""
trash.height = l + ""

document.body.appendChild(up)
document.body.appendChild(document.createElement('br'))
document.body.appendChild(center)
document.body.appendChild(trash)
document.body.appendChild(document.createElement('br'))
document.body.appendChild(bottom)
document.body.appendChild(document.createElement('br'))
document.body.appendChild(scoreP)

function Piece(type){
    //1:Haut, 2:Bas
    this.type=type
   this.src=""

    this.initImage=function(){
        switch (this.type) {
            case 0:
                this.src = "top"
                break;
            case 1:
                this.src = "down"
                break;
        }
    }
    this.draw=function(context){
        
        let image;
        switch(this.type){
            case 0:
            image=document.getElementById('top')
            break;
            case 1:
                image = document.getElementById('down')
                break;
        }
     
        context.drawImage(image,0,0,l,l)
        
    }
}

function init(){
   
    upContext.strokeRect(0,0,l,l)
    centerContext.strokeRect(0, 0, l, l)
    bottomContext.strokeRect(0, 0, l, l)
    trashContext.strokeRect(0,0,l,l)
    
}

function newPiece(){
    let rand = Math.floor((Math.random())*2)

    let piece=new Piece(rand)
    piece.initImage()
    centerBuffer=piece
}

function drawAll(){
    upContext.clearRect(0,0,l,l)
    centerContext.clearRect(0, 0, l, l)
    bottomContext.clearRect(0, 0, l, l)
    upContext.strokeRect(0, 0, l, l)
    centerContext.strokeRect(0, 0, l, l)
    bottomContext.strokeRect(0, 0, l, l)
    let image = document.getElementById('trashImg')
    trashContext.drawImage(image, 0, 0,l,l)

    for(el of upBuffer){
        el.draw(upContext)
    }
    centerBuffer.draw(centerContext)

    for (el of bottomBuffer) {
        el.draw(bottomContext)
    }

    if(upBuffer.length==2){
        upBuffer.length=0
        score++
    }
    if (bottomBuffer.length == 2) {
        bottomBuffer.length = 0
        score++
    }
  
    scoreP.innerHTML=score
  
}

function addPieceBottom(piece){
   if(bottomBuffer.length==0){
       bottomBuffer.push(piece)
       return 0
   }else
   if(bottomBuffer.length==1){
       if ((bottomBuffer[0].type == 0 && piece.type == 1) || (bottomBuffer[0].type == 1 && piece.type == 0) ){
           
           bottomBuffer.push(piece)
           return 0
       }
       if ((bottomBuffer[0].type == 0 && piece.type == 0) || (bottomBuffer[0].type == 1 && piece.type == 1)) {
           console.log("perdu");
           lose()
           return 1
           
       }
    
   }
}

function addPieceUp(piece) {
    if (upBuffer.length == 0) {
        upBuffer.push(piece)
        return 0
    }else
    if (upBuffer.length == 1) {
        if ((upBuffer[0].type == 0 && piece.type == 1) || (upBuffer[0].type == 1 && piece.type == 0)) {
            upBuffer.push(piece)
            return 0
        }
        if ((upBuffer[0].type == 0 && piece.type == 0) || (upBuffer[0].type == 1 && piece.type == 1)) {
            console.log("perdu");
            lose()
            return 1

        }
    
    }
}

function lose() {
  //  window.location.reload(true)
    let button=document.createElement('button')
    button.onclick=function(){
        window.location.reload(true)
    }
    button.innerHTML="Restart"
    let text=document.createTextNode('You lose!')

    let twitterText="Hey i got "+score+" points on Puzzle dash available at https://loicoberle.com/Puzzle_dash"
    let hashtags="PuzzleDash"
    let twitter=document.createElement('a')
    twitter.innerHTML="Share on twitter"
    twitter.href="https://twitter.com/intent/tweet?text="+twitterText+"&hashtags="+hashtags

    document.body.appendChild(text)
    document.body.appendChild(document.createElement('br'))
    document.body.appendChild(button)
    document.body.appendChild(document.createElement('br'))
    document.body.appendChild(twitter)
}

up.addEventListener('click',function(){
    if(addPieceUp(centerBuffer)==0)
    newPiece()
})
bottom.addEventListener('click', function () {
    if (addPieceBottom(centerBuffer) == 0)
        newPiece()
})
trash.addEventListener('click',newPiece)

document.addEventListener('keydown',function(e){
    switch(e.code){
        case "ArrowUp":
            if (addPieceUp(centerBuffer) == 0)
                newPiece()
            break;
        case "ArrowDown":
            if (addPieceBottom(centerBuffer) == 0)
                newPiece()
            break;
        case "ArrowRight":
            newPiece()
    }
})

init()
window.setInterval(drawAll,100)
newPiece()
