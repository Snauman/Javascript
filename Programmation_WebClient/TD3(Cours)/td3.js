
'use strict'

//Exercice 1

function logClick(e){
  console.log("click");
}

window.addEventListener('load',() => {
  let bouton=document.getElementById('ex1');
  bouton.addEventListener("click",logClick)
})

//Exercice 2
function updateButtonClass(e){
  e.target.classList.toggle("c1");
  e.target.classList.toggle("c2");
}

window.addEventListener('load',() => {
  let bouton=document.getElementById('ex1');
  bouton.addEventListener("click",updateButtonClass);
})


//Exercice 3
  var j=1;
function ajouterEnfant(e){
  let liste=document.getElementById('ex2');
  let t=document.createElement("li");
  let text = document.createTextNode("click bouton: "+j);
  t.appendChild(text);
  liste.appendChild(t);
  j++;
}

window.addEventListener('load',() => {
  let bouton=document.getElementById('ex1');
  bouton.addEventListener("click",ajouterEnfant);
})


//Exercice 4


function clear(e){
  let liste=document.getElementById('ex2');
  var l=liste.childNodes;
  let c=liste.querySelectorAll("li");

  for (var k = 0; k < c.length; k++) {
    liste.removeChild(c[k]);
  }
}

window.addEventListener('load',() => {
  let bouton=document.getElementById('ex3');
  bouton.addEventListener("click",clear);
})

//Exercice 5

function incrInputValue(e){
  let input=document.getElementById('ex4i');
  input.value++;
}

window.addEventListener('load',() => {
  let bouton=document.getElementById('ex4b');
  bouton.addEventListener("click",incrInputValue);
})
