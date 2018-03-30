'use strict-mode'

window.onload=()=>{
var box1=$("#box1");
var box2=$("#box2");
var searchButton=$("button");


function search(val1,val2){


  let server="https://en.wikipedia.org/w/api.php";
  let req=$.ajax({
  url:server+"?action=query&titles="+val1+"&action=query&format=json&prop=links&formatversion=2",
  type:'GET',
  dataType:'jsonp',
    xhrFields:{withCredential:true},
    headers:{'Api-User-Agent': 'Example/1.0','Access-Control-Allow-Origin':true},
    success:function(data){callback(data.query.pages[0].links)},
    fail:function(){callback("echec")}

  });

  var sol=[];
  sol.push(val1);
  function callback(v) {
    console.log(v);
   recursion(0,v,sol);
    
  }

  function recursion(n,links,sol) {
    if(links[n].title==val2){
      sol.push(val2);
      console.log(sol);
      return true;
    }

    for (var i = 0; i < links.length; i++) {

    }

  }

  }




searchButton.click(function(){
  search(box1.val(),box2.val())
});











}
