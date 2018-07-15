'use strict'

let photobox = {};
photobox.modules = {};
photobox.modules.photoloader = (function(){
	var urlServer;
	return{
		init(endpoint){
			},

		chargement(uri){
			var pr = $.ajax(urlServer + uri,{
				type:"GET",
				context:this,
				dataType: "json",
				xhrFields:{withCredentials : true}
			});

			pr.fail(
				function(jqXhr,status,error){
					console.log(urlServer+uri);
				}
			);
			pr.done(photobox.modules.gallery.buildGallery);

			return pr;
		}
	}
})();
