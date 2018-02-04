var img = new Image();
var rainbows=0;
var rps=0;

window.onload=function(){
  displayButton();
  display();

}
var price=[10,100,500];
var bonus=[0.01,0.05,0.1];
var quantity=[0,0,0];

img.onload=function(){
  let pic=document.getElementById('image');
  pic.src=img.src;
  pic.width=200;
}
img.src="ressources/rainbow.png";

function incrementRainbows(amount) {
  rainbows+=amount;
  //console.log("rainbows");
  display();
  animPicture();
}

function display(){
  let compteur=document.getElementById("compteur");
  let val="Rainbows: "+Math.floor(rainbows*100)/100;
  let vRps="Rps: "+Math.floor(rps*100)/100;
  compteur.innerText=val+' '+vRps;
  //console.log(document.title);
  document.title='Rainbows: '+Math.floor(rainbows*100)/100;
  setTimeout(display,500);
  for (var i = 1; i <= price.length; i++) {
    let b=document.getElementById('upgrade'+i);
    if(price[i-1]>rainbows){
      b.disabled=true;
    }else {
      b.disabled=false;
    }
  }

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
  setTimeout(rainbowsPerSec,100);
  //console.log(rps);
  //console.log(rainbows);
  //display();
}
rainbowsPerSec();


function achat(id){


  if(rainbows>=price[id-1]){
    rps+=bonus[id-1];
    rainbows-=price[id-1]
    price[id-1]=Math.floor(price[id-1]*1.1);
    console.log(price[id-1]);
    quantity[id-1]++;
  }
  for (let i = 1; i <= price.length ; i++) {
    let b=document.getElementById('upgrade'+i);
    b.innerText="Upgrade "+i+",Price: "+price[i-1]+" Quantity: "+quantity[i-1];
  }
}

function displayButton(){
  for (var i = 1; i <= price.length; i++) {
    let b=document.createElement("button");
    b.innerText="Upgrade "+i+",Price: "+price[i-1]+" Quantity: "+quantity[i-1];
    b.id="upgrade"+i;
    let id=i;
    b.onclick=function(){achat(id);}
    let div=document.getElementById("upgrades");
    console.log(b);
    div.appendChild(b);

  }
}
