var img = new Image();
var rainbows=0;
var rps=0;

window.onload=function(){
  displayButton();
  display();
  rainbowsPerSec();
  displayUpgrades();

}
var price=[15,100,1100,12000];
var bonus=[0.1,1,8,47];
var quantity=[0,0,0,0];
//var upgrades=["1","2","3"];
var names=["Lucky child","Rainbow-mining dwarves","Hornless unicorns","Upgrade 4"];

img.onload=function(){
  let pic=document.getElementById('image');
  pic.src=img.src;
  pic.width=200;
}
img.src="ressources/rainbow_small.png";

function incrementRainbows(amount) {
  rainbows+=amount;
  //console.log("rainbows");
  display();
  animPicture();

}

function addBonus(name,p,amount){
  names.push(name);
  bonus.push(amount);
  price.push(p);
}

function display(){
  let compteur=document.getElementById("compteur");
  let val="Rainbows: "+amountDisplay(rainbows);
  let vRps="Rps: "+Math.floor(rps*10)/10;
  compteur.innerText=val+' '+vRps;
  //console.log(document.title);
  document.title='Rainbows: '+Math.floor(rainbows*10)/10;

  for (var i = 1; i <= price.length; i++) {
    let b=document.getElementById('bonus'+i);
    if(price[i-1]>rainbows){
      b.disabled=true;
    }else {
      b.disabled=false;
    }
  }
  setTimeout(display,500);

}

function amountDisplay(amount){
  if(amount>1000000000){
    return amount/1000000000+" billions";
  }
  if(amount>1000000){
    return amount/1000000+" millions";
  }
  return Math.floor(amount*100)/100;
}


function animPicture(){
  let pic=document.getElementById('image');
  pic.width=190;
  pic.height=190;
  setTimeout(()=>{
    let pic=document.getElementById('image');
    pic.width=200;
    pic.height=200;
  },100);
}

function rainbowsPerSec(){

  rainbows+=rps;
  setTimeout(rainbowsPerSec,1000);
  //console.log(rps);
  //console.log(rainbows);
  //display();

}



function achat(id){


  if(rainbows>=price[id-1]){
    rps+=bonus[id-1];
    rainbows-=price[id-1]
    price[id-1]=Math.floor(price[id-1]*1.1);
    quantity[id-1]++;
  }
  for (let i = 1; i <= price.length ; i++) {
    let b=document.getElementById('bonus'+i);
    b.innerText=names[i-1]+",Price: "+price[i-1]+" Quantity: "+quantity[i-1];
  }

}

function displayButton(){
  for (var i = 1; i <= price.length; i++) {
    let b=document.createElement("button");
    b.innerText=names[i-1]+",Price: "+price[i-1]+" Quantity: "+quantity[i-1];
    b.id="bonus"+i;
    let id=i;
    b.onclick=function(){achat(id);}
    let div=document.getElementById("bonus");
    //  console.log(b);
    div.appendChild(b);

  }

}
var i=1;
function rainbowRainAnimation(){

  let rain=new Image();
  rain.src="ressources/rainbow_small.png";
  rain.width=100;
  rain.height=100;
  rain.id="rain"+i;
  rain.style.position="absolute";
  rain.style.top="-400px";
  rain.style.left=aleatoire(-25,0)+"%";
  rain.style.pointerEvents="none";
  rain.onload=function(){
    document.body.appendChild(rain);
    var r=document.getElementById('rain'+i++);
    var pos = -400;
    var id = setTimeout(frame, 5);
    function frame() {
      if (pos == 500) {
        document.body.removeChild(r);
        //clearInterval(id);
      } else {
        pos+=5;
        r.style.top = pos + 'px';
        id = setTimeout(frame, 5);

      }
    }

  }
}

function aleatoire(min, max) {
return (Math.floor((max-min)*Math.random())+min);
}

function displayUpgrades(){
  var c;
  for (var i = 0; i < upgrades.length; i++) {
    c=document.createElement("button");
    c.id="bonusBox";
    c.className="upgrade"+i;
    c.innerText=upgrades[i];
    let id=i;
    c.onclick=function(){achatUpgrade(id)};
    let div=document.getElementById('upgrades');
    div.appendChild(c);
  }
}

function achatUpgrade(id){
    console.log("upgrade"+id);
    let used=document.getElementsByClassName("upgrade"+id);
    let div=document.getElementById('upgrades')
    div.removeChild(used[0]);
}
