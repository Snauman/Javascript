window.onload=function(){
  let frame=document.createElement('iframe');
  frame.src="old/index.html";
  frame.id="terminalWindow";
  frame.name="terminalWindow";
  frame.className="cache";
  frame.sandbox="allow-scripts";
  document.body.append(frame);

  let frame2=document.createElement('iframe');
  frame2.src="modern/index.html";
  frame2.id="internetWindow";
  frame2.name="internetWindow";
  frame2.className="cache";
  frame2.sandbox="allow-scripts";
  document.body.append(frame2);
  console.log("loaded");
  let terminal=document.getElementById('terminal');

  terminal.addEventListener("click",function(){


      document.getElementById('terminalWindow').classList.toggle("cache");
      document.getElementById('terminalWindow').classList.toggle("montre");
  });

  let internet=document.getElementById('internet');

  internet.addEventListener("click",function(){


      document.getElementById('internetWindow').classList.toggle("cache");
      document.getElementById('internetWindow').classList.toggle("montre");
  });

  let demarrer=document.getElementById('demarrer');

  demarrer.addEventListener("click",function(){


      document.getElementById('menuDemarrer').classList.toggle("cache");
      document.getElementById('menuDemarrer').classList.toggle("montre");
  });
}
