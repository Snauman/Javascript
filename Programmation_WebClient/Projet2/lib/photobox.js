let photobox={
  modules:{

  }
};
photobox.modules.photoloader={
  service:null,
  init:function(serveur){
    this.service=serveur;
  },

  load:function(uri){
    var pr=$.ajax(this.service+uri,{
      type:"GET",
      context:this,
      xhrFields:{withCredential:true}
    });
      pr.fail(()=>{console.log("raté");});
    return pr;
  }

};

photobox.modules.galery={
  load:function(){
    photobox.modules.photoloader.init( "https://webetu.iutnc.univ-lorraine.fr");
    let pr=photobox.modules.photoloader.load("/www/canals5/photobox/photos/");
    pr.done((data,status,jqXHR)=>{
        let gal=$('#photobox-gallery');
        gal.empty();
      for(let i=0;i<data.photos.length;i++){
          let img=document.createElement('img');
          img.src="https://webetu.iutnc.univ-lorraine.fr"+data.photos[i].photo.original.href;
          let gal=document.getElementById('photobox-gallery');
          let div=document.createElement('div');
          div.className='vignette';
          div.append(img);
          div.append(data.photos[i].photo.titre);
          gal.append(div);
        console.log(data.photos[i].photo.original.href);
      }
    });//console.log(data);console.log("succès")});


  },
  handler:function(){
    let chargement=document.getElementById('load_gallery');
    chargement.addEventListener("click",photobox.modules.galery.load);
}
};
photobox.modules.lightbox={

};

window.addEventListener("load",function(){
  console.log("chargé");

    photobox.modules.galery.handler();

  });
