var score=0;
var height=600;
var width=600;

var l1=new Lane(width/3);
var l2=new Lane(l1.x+width/3);
var l3=new Lane(l2.x+width/3);
var lanes=[];
lanes.push(l1);
lanes.push(l2);
lanes.push(l3);
var player=new Player(1);
let c1=new Coin(1);
let c2=new Coin(1);

window.addEventListener("load",()=>{
  var canvas = document.getElementById('canvas');

  canvas.style.height=height+"px";
  canvas.style.width=width+"px";

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    player.draw(ctx);
    for (lane of lanes) {
      lane.draw(ctx);
    }
    console.log("canvas !");
  } else {
      console.log("no canvas !");
  }
window.addEventListener("keypress",(e)=>{
  player.remove(ctx);
  switch (e.key) {
    case "a":
    player.move(-1);
    break
    case "z":
    player.move(1);
  }
  player.draw(ctx);
});

  jeu(ctx);
});


function Lane(x){
  this.x=x;
  this.width=width/3;
  this.objects=[];

  this.draw=function(ctx){
      ctx.fillRect(this.x,height,2,-height);
      for (object of this.objects) {
        object.draw(ctx);
      }
  }
}

function Player(idLane){
  this.lane=idLane;
  this.x=lanes[idLane].x-(lanes[idLane].width/2);
  this.y=height-50;

  this.draw=function(ctx){
    ctx.fillRect(this.x,this.y,10,-10);
  }

  this.remove=function(ctx){
      ctx.clearRect(this.x,this.y,10,-10);
  }

  this.move=function(dir){

    if(this.lane==1)
      this.lane+=dir;
    if(this.lane==0){
      if(dir==1)
        this.lane+=dir
    }
    if(this.lane==2){
      if(dir==-1)
        this.lane+=dir
    }
      this.x=lanes[this.lane].x-(lanes[this.lane].width/2);
  }
}

function Coin(idLane,pos){
  this.lane=idLane;
  lanes[this.lane].objects.push(this);
  this.x=lanes[idLane].x-(lanes[idLane].width/2);
    this.y=pos;
    this.y=this.y-height;
  this.draw=function(ctx){
      ctx.fillRect(this.x,this.y,10,-10);
  }

  this.move=function(ctx){
      ctx.clearRect(this.x,this.y,10,-10);
      this.y+=1;
      ctx.fillRect(this.x,this.y,10,-10);
      if(this.y>height+10){
        score--;
        this.removeFromLane();
      }
  }

  this.removeFromLane=function(){
    lanes[this.lane].objects.splice(lanes[this.lane].objects.indexOf(this),1);
    for (prop in this){this[prop]=null}


  }
}

function collision(p,o,ctx){
  if(p.y==o.y && p.x==o.x){
    ctx.clearRect(o.x,o.y,10,-10);
    o.removeFromLane();
    score++;
  }
}

function jeu(ctx){
    var divScore =document.getElementById('score');
  if(score<100){
    var i=0;
    setInterval(()=>{

    player.draw(ctx);
    for (lane of lanes) {
      for (object of lane.objects) {
        object.move(ctx);
          collision(player,object,ctx);
      }
    }
    if(Math.floor(Math.random()*10)<1){
    new Coin(Math.floor(Math.random()*3),height-(50*(i+2)));
    i++;
  }
    divScore.innerHTML="Score: "+score;
  })
  }else{
    document.body.innerHTML="Vous avez gagner";
  }
}
