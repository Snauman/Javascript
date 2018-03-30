
var dico=["test","dico","ceci","est","un","mot"];
var zone=[];
window.onload= ()=>{
  var barre=document.getElementById('texte');
  var area=document.getElementById('zone');
  console.log(dico);
  console.log(zone);
  document.addEventListener("keypress", (e) => {
    if(e.keyCode==13){ //touche entrer
      analyse(barre.value);
      ajoutMots();
    }

});
setInterval(()=>interval(),2000);


  function analyse(val){
    for (var i = 0; i < zone.length; i++) {
      if(val==zone[i].innerHTML){
        console.log("succes");
        area.remove(area.childNodes[i+1]);
        zone.splice(zone.indexOf(val),1);
        break;

      }else{
        console.log("echec");
      }
    }
  }

  function ajoutMots(){
    if(dico.length>0){
      let rand=Math.floor(Math.random()*dico.length);
      let el=document.createElement("b");
      el.innerHTML=dico[rand];
      zone.push(el);
      dico.splice(rand,1);
    //  console.log(dico);
      //console.log(zone);
    }

  }

  function interval(){
    ajoutMots();
    affichage();
  }

  function affichage(){
    for (var i = 0; i < area.chilNodes; i++) {
      area.removeChilds[1];
    }
    for (var i = 0; i < zone.length; i++) {
      console.log("affichage");
      area.appendChild(zone[i]);
    }
  }

}
