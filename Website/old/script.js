
window.onload=function(){
  var res=["CV","PROGRAMMES","ACCUEIL"];
  var commandes=["CV","PROGRAMMES","ACCUEIL","LS","HISTORY","CLEAR","HELP"];
  var buffer=[];
  var history=[];
  var b=document.getElementById('buffer');
  var save=b.innerHTML;
  var bas=document.getElementById('bas');

  function liens(){
    let t=document.getElementsByClassName("lien");
    if(t.length>0){
      for (var i = 0; i < t.length; i++) {
        let e=t[i];
        e.addEventListener("click",function(){
          affichagePage(e.innerHTML);
          update();

        });
      }
    }
  }

  affichagePage("ACCUEIL");
  update();
  var barre=document.getElementById('barre');
  barre.focus();
  barre.onblur=function(){
    barre.focus();
  }

  function allerEnBas(){
    let b=document.getElementById('buffer');
    console.log(b.scrollHeight);
    console.log(b.scrollTop);
    console.log(document.body.scrollTop);
    b.scrollTop=b.scrollHeight;
  }
  document.onkeypress=function(e){
    if(e.keyCode==13){
      history.push(barre.value);
      analyse(barre.value);

      barre.value="";
    }
  }
  function analyse(commande){
    if(res.includes(commande)){
      //  buffer.push(commande);
      affichagePage(commande);
    }else{
        let tmp;
      switch (commande) {
        case "":
        buffer.push("");
        break;
        case "LS":
        tmp="";
        for (c of res) {
          tmp+=c+"<br/>";
        }
        buffer.push(tmp);
        break;
        case "HISTORY":
        tmp="";
        if(history.length>0)
        for (var i = 0; i < history.length; i++) {
          tmp+=history[i]+"<br/>";
        }
        buffer.push(tmp);
        break;
        case "CLEAR":
        buffer=[];
        break;
        case "HELP":
        tmp="";
        if(commandes.length>0)
        for (var i = 0; i < commandes.length; i++) {
          tmp+=commandes[i]+"<br/>";
        }
        buffer.push(tmp);
        break;
        default:
        buffer.push("commande inexistante (Utilisez \"HELP\" pour la liste des <br/> commandes disponibles)");
      }

    }
    update();

  }
  function update(){
    let b=document.getElementById('buffer');
    b.innerHTML="";
    let cont="";

    for (var i = buffer.length-1; i >=0; i--) {

      cont="<br/>"+  cont;
      cont="<text>"+buffer[i]+ "</text>"+ cont;
      cont="<text>"+"/~"+ "</text>"+ cont;
    }

    b.innerHTML=cont;
    b.append(bas);
    liens();
    allerEnBas();
    //  console.log(cont);

  }

  function affichagePage(nom){
    let iter;
    switch (nom) {
      case "CV":
      iter=cv;
      break;
      case "ACCUEIL":
      iter=accueil;
      break;
      case "PROGRAMMES":
      iter=programmes;
      break;
      default:

    }
    let temp="";
    for (var i = 0; i < iter.length; i++) {
      temp+=iter[i]+"<br/>";
    }
    buffer.push(temp);

  }
}
