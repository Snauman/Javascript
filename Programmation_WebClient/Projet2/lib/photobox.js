'use strict'



photobox.modules.gallery = (function(){
	let urlLinkNext = "";
	let urlLinkPrev = "";
	let urlCurrent  = "/www/canals5/photobox/photos/?offset=0&size=10";
	let urlLinkFirst= "";
	let urlLinkLast = "";
	let urltmp = "";
	return{
		buildGallery(data,status,jqXhr){
			let photos = data.photos;
			let vignette; let image;
			$("#photobox-gallery").empty();
			photos.forEach( (p) => {

				vignette = $("<div class=\"vignette\">");
				image = $("<img data-img=\""+"https://webetu.iutnc.univ-lorraine.fr"+p.photo.original.href+"\" src=\"" +"https://webetu.iutnc.univ-lorraine.fr"+p.photo.thumbnail.href+"\">");
				vignette.append(image);
				vignette.append($("<h1>"+ p.photo.titre +"</h1>"));
				vignette.on("click",photobox.modules.lightbox.openLightbox);
				$("#photobox-gallery").append(vignette);
			});

			urlLinkPrev = data.links.prev.href;
			urlLinkNext = data.links.next.href;
			urlLinkLast = data.links.last.href;
			urlLinkFirst= data.links.first.href;
			urlCurrent  = urltmp;
		if(photobox.modules.lightbox.changeLightbox() < 0){
				let v = $("#gallery").find(".vignette").last();
				console.log(v);
				photobox.modules.lightbox.updateCurrentVignette(v);
			}
			if(photobox.modules.lightbox.changeLightbox() > 0){
				let v = $("#gallery").find(".vignette").first();
				photobox.modules.lightbox.updateCurrentVignette(v);
			}
		},
		nextGallery(){
			photobox.modules.gallery.verifLastFirst();
			if(urlLinkNext===urlCurrent){
				urlLinkNext = urlLinkFirst;
			}
			urltmp = urlLinkNext;
			photobox.modules.photoloader.chargement(urlLinkNext);
		},
		prevGallery(){
			photobox.modules.gallery.verifLastFirst();
			if(urlCurrent===urlLinkFirst){
				urlLinkPrev = urlLinkLast;
			}else{
				urlLinkPrev = urlLinkPrev.replace("size=3","size=10");
			}
			urltmp = urlLinkPrev;
			photobox.modules.photoloader.chargement(urlLinkPrev);
		},
		currentGallery(){
			urltmp = urlCurrent;
			photobox.modules.photoloader.chargement(urlCurrent);
		},
		init(){
			$('#load-gallery').on("click",photobox.modules.gallery.currentGallery);
			$('#next').on("click",photobox.modules.gallery.nextGallery);
			$('#previous').on("click",photobox.modules.gallery.prevGallery);
		},
		verifLastFirst(){
			if(urlLinkFirst.includes("size=3")){
				urlLinkFirst = urlLinkFirst.replace("size=3","size=10");
			}
			if(urlLinkLast.includes("size=3")){
				urlLinkLast = urlLinkLast.replace("size=3","size=10");
			}
		}
	}
})();

photobox.modules.lightbox = ( function(){
	let CurrentVignette;let changeLightbox;
	return{
		changeLightbox(){
			return changeLightbox;
		},
		setChangeLightbox(value){
			changeLightbox = value;
		},
		openLightbox(event){
			photobox.modules.lightbox.setChangeLightbox(0);
			CurrentVignette = $(event.target);
			if(!CurrentVignette.hasClass("vignette")){
				CurrentVignette = CurrentVignette.parent(".vignette");
			}
			let image;
			let titre;
			image = CurrentVignette.find("img");
			titre = CurrentVignette.find("h1");
			$("#lightbox-img").attr("src","");
			let lightbox = $("#lightbox");
			$("#lightbox-img").attr("src", image.attr("data-img"));
			$("#lightbox-title").text( titre.text());
			lightbox.toggleClass("lightbox-hidden");
			$('html, body').animate({
				scrollTop:$("#lightbox").offset().top
			}, 'slow');
		},
		closeLightbox(){
			photobox.modules.lightbox.setChangeLightbox(0);
			$("#lightbox").toggleClass("lightbox-hidden");
		},
		init(){
			$("#lightbox-close").on("click",photobox.modules.lightbox.closeLightbox);
			$("#lightbox-prev").on("click",photobox.modules.lightbox.prev);
			$("#lightbox-next").on("click",photobox.modules.lightbox.next);
			$(document).on("keypress", function(e){
				if(e.keyCode == 37 || e.charCode == 113){
					//goche
					//console.log("goche");
					photobox.modules.lightbox.prev();
				}else if(e.keyCode == 39 || e.charCode == 100){
					//drwatte
					//console.log("drwatte");
					photobox.modules.lightbox.next();
				}else if(e.keyCode == 27){
					//echap = close lightBox
					if(!$("#lightbox").hasClass("lightbox-hidden")){
						photobox.modules.lightbox.closeLightbox();
					}
				}else if(e.keyCode == 13){
					// enter = open lightBox
					e.target = $("#gallery").find(".vignette").first();
					photobox.modules.lightbox.openLightbox(e);
				}
			})
		},
		next(){
			photobox.modules.lightbox.setChangeLightbox(0);
			if(!CurrentVignette.hasClass("vignette")){
				CurrentVignette = CurrentVignette.parent(".vignette")
			}
			if(CurrentVignette.next(".vignette").length !==0){
				CurrentVignette = CurrentVignette.next(".vignette");
				$("#lightbox-img").attr("src","");
				$("#lightbox-img").attr("src",CurrentVignette.find("img").attr("data-img"));
				$("#lightbox-title").text( CurrentVignette.find("h1").text());
			}else{
				photobox.modules.lightbox.setChangeLightbox(1);
				photobox.modules.gallery.nextGallery();
			}
		},
		prev(){
			photobox.modules.lightbox.setChangeLightbox(0);
			if(!CurrentVignette.hasClass("vignette")){
				CurrentVignette = CurrentVignette.parent(".vignette")
			}
			if(CurrentVignette.prev(".vignette").length !== 0){
				CurrentVignette = CurrentVignette.prev(".vignette");
			}else{
				photobox.modules.lightbox.setChangeLightbox(-1);
				photobox.modules.gallery.prevGallery();
			}
			$("#lightbox-img").attr("src","");
			$("#lightbox-img").attr("src",CurrentVignette.find("img").attr("data-img"));
			$("#lightbox-title").text( CurrentVignette.find("h1").text());
		},
		updateCurrentVignette(vignette){
			CurrentVignette = vignette;
			$("#lightbox-img").attr("src","");
			$("#lightbox-img").attr("src",CurrentVignette.find("img").attr("data-img"));
			$("#lightbox-title").text( CurrentVignette.find("h1").text());
		}
	}
})();

photobox.init = function(){
	$("#photobox-gallery").empty();
	photobox.modules.photoloader.init("https://webetu.iutnc.univ-lorraine.fr");
	photobox.modules.gallery.init();
	photobox.modules.lightbox.init();
};

$(document).ready(photobox.init);
