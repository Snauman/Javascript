
let monster = {
  modules:{}
}
monster.modules.actions = (function(){
  let name;
  let life;
  let money;
  let awake;

  return {
    showme : function(){
    //  alert("name = "+name+", life = "+life+", money = "+money+", awake = "+awake);
      monster.modules.app.log(name);
      monster.modules.app.displayStatus(life,money,awake);
    },
    init : function(n,l,m,a){
      name = n;
      life = l;
      money = m;
      awake = a;
        monster.modules.app.displayStatus(life,money,awake);
    },run : function(){
      if(awake && life>1){
        life--;
        monster.modules.app.log(name+" is running");
          monster.modules.app.displayStatus(life,money,awake);
      }
    },fight : function(){
      if(awake && life>3){
        life-=3;
        monster.modules.app.log(name+" is fighting");
          monster.modules.app.displayStatus(life,money,awake);
      }
  },work : function(){
    if(awake && life>1){
      life-=1;
      money+=2;
      monster.modules.app.log(name+" is working");
        monster.modules.app.displayStatus(life,money,awake);
    }
  },eat : function(){
    if(awake && money>3){
      life+=2;
      money-=3;
      monster.modules.app.log(name+" is eating");
        monster.modules.app.displayStatus(life,money,awake);
    }
  },sleep : function(){
    monster.modules.app.log(name+" falls asleep");
    awake=false;
    monster.modules.app.displayStatus(life,money,awake);
    setTimeout(function(){
      monster.modules.app.log(name+" wakes up");
      life++;
      awake=true;
      monster.modules.app.displayStatus(life,money,awake);
    },10000);

  },random : function(){

    if(awake && life>0){

    life--;
    let rand=Math.floor(Math.random()*Math.floor(5));

    switch (rand) {
      case 0:
        monster.modules.actions.eat();
        break;
        case 1:
          monster.modules.actions.run();
          break;
          case 2:
            monster.modules.actions.sleep();
            break;
            case 3:
              monster.modules.actions.fight();
              break;
              case 4:
                monster.modules.actions.work();
                break;

    }
  }
    monster.modules.app.displayStatus(life,money,awake);
  },
  kill : function(){
    if(awake){
    life=0;
    monster.modules.app.displayStatus(life,money,awake);
  }
  },
  newLife : function(){
    monster.modules.actions.init("Toto",20,10,true);
    monster.modules.app.displayStatus(life,money,awake);
  }
}
})
();

monster.modules.app = (function(){
  let b1 = document.getElementById("b1");
  let b2 = document.getElementById("b2");
  let b3 = document.getElementById("b3");
  let b4 = document.getElementById("b4");
  let b5 = document.getElementById("b5");
  let b6 = document.getElementById("b6");
  let b7 = document.getElementById("b7");
  let kill = document.querySelector("#k");
  let statusLine =document.getElementById('status');
  let m=document.getElementById('monster');


  return {
    run : function(){
      monster.modules.actions.init("Toto",20,10,true);
      b6.onclick = monster.modules.actions.showme;
      b2.onclick = monster.modules.actions.run;
      b3.onclick = monster.modules.actions.fight;
      b7.onclick = monster.modules.actions.work;
      b5.onclick = monster.modules.actions.eat;
      b4.onclick = monster.modules.actions.sleep;
      b1.onclick = monster.modules.actions.newLife;
      kill.onclick = monster.modules.actions.kill;
      setInterval(function(){
        monster.modules.actions.random();
      },12000);

    },
    log : function(message){
      let boite=document.getElementById('actionbox');
      let para=document.createElement("p");
      let childs=boite.childNodes
      para.innerHTML=message;
      boite.insertBefore(para,boite.firstChild);

    },
    displayStatus : function(life,money,awake){
      let vie=statusLine.childNodes[1];
      let argent=vie.nextSibling;
      let rev=argent.nextSibling;

      let statVie=document.createTextNode("Life: "+life);
      let statArgent=document.createTextNode("Money: "+money);
      let statReveil=document.createTextNode(awake ? "Awake":"Asleep");

      vie.replaceChild(statVie,vie.firstChild);
        argent.replaceChild(statArgent,argent.firstChild);
          rev.replaceChild(statReveil,rev.firstChild);
          switch(life){
            case 0:
            m.style.backgroundColor="black";
            break;
            case 1:case 2:case 3:case 4:
            m.style.backgroundColor="red";
            break;
              case 5:case 6:case 7:case 8:case 9:
                m.style.backgroundColor="orange";
                break;
                case 10:case 11:case 12:case 13:case 14:
                  m.style.backgroundColor="yellow";
                  break;
                  case 15:case 16:case 17:case 18:case 19:
                    m.style.backgroundColor="green";
                    break;
                    default:
                    m.style.backgroundColor="blue";

          }
          m.style.border=money*0.5+"px solid yellow";
        //  console.log(m.style);

    }
  }
})();
window.onload = monster.modules.app.run;
