'use strict'

let photobox = {};
photobox.modules = {};
photobox.modules.photoloader = (function(){
	var urlServer;
	return{
		init(endpoint){
			urlServer = endpoint;
			// https://webetu.iutnc.univ-lorraine.fr
			// https://webetu.iutnc.univ-lorraine.fr/www/canals5/photobox/photos/12
		},
		// uri : www/canals5/photobox/photos/12
		chargement(uri){
			var pr = $.ajax(urlServer + uri,{
				type:"GET",
				context:this,
				dataType: "json",
				xhrFields:{withCredentials : true}
			});
			
			pr.fail(
				function(jqXhr,status,error){
					//alert("error loading data : "+ error);
					console.log(urlServer+uri);
				}
			);
			pr.done(photobox.modules.gallery.buildGallery);
			
			return pr;
		}
	}
})();