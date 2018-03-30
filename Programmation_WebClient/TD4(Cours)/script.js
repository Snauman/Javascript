var td={}

td.exercice1={
echange:function(){
  let para=$("#changingText");
  para.toggleClass('hop');
  para.toggleClass('zap');

},

ajoutEvent:function(){
  let para=$("#changingText");
  para.on("click",td.exercice1.echange);
}
}


td.exercice2={
  augmentationLargeur:function(e){
    let taille=e.target.offsetWidth;
    e.target.style.width=(taille+10)+"px";
  },

  tailleInitial:function(e){
      e.target.style.width="100px";
  },

  init:function(){
    let el=$("#square");
    console.log(el.children());
    el.children().each((i,e)=>{

      $(e).on("mouseover",td.exercice2.augmentationLargeur);
      $(e).on("click",td.exercice2.tailleInitial);

    });
    let add=$("#one");
    add.on("click",td.exercice2.ajoutBoite);

    let modify=$("#two");
    modify.on("click",td.exercice2.changeAttributBoites);

    let fade=$("#three");
    fade.on("click",td.exercice2.fadeAway);
  },

  ajoutBoite:function(){
    let el=$("#square");
    let last=el.children().length;
    let boite=$("<div>");
    boite.addClass("boite_orange");
    boite.append(last+1);
    boite.on("mouseover",td.exercice2.augmentationLargeur);
    boite.on("click",td.exercice2.tailleInitial);
    el.append(boite);
  },

  changeAttributBoites(){
    console.log("test");
    let el=$("#square");
    console.log(el.children());
    el.children().each((i,e)=>{
      $(e).toggleClass('boite_orange');
      $(e).toggleClass('boite_verte');

    });
  },

  fadeAway(t){
      let el=$("#square");
      el.children().each((i,e)=>{
        if($(e).css('opacity')==0){

            $(e).fadeTo(1000,1);
        }
        if($(e).css('opacity')==1){
            $(e).fadeTo(1000,0);
        }
      });
  }
}





$(window).on('load',() => {
  td.exercice1.ajoutEvent();
  td.exercice2.init();
})
