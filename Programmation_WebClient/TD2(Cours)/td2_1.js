/*Exercice 1.1*/

function range(a,b){
  res=[];
  if(a<=b){
    for (var i = a; i <=b; i++) {
      res.push(i);
    }
  }else{
    for (var i = b; i <=a; i++) {
      res.push(i);
    }
  }
  return res;
}

console.log("Fonction range, montre les entiers de 1 a 10");
console.log(range(1,10));


/*Exercice 1.2*/

function sumFor(tab){
  var s=0;
  for (var i = 0; i < tab.length; i++) {
    s+=tab[i];
  }
  return s;
}

function sumForEach(tab){
  var s=0;
  tab.forEach((n)=>{s+=n});
  return s;
}

function sumReduce(tab){
  let s=(a,e)=>a+e;
  return tab.reduce(s,0);
}
t=[1,2,3];
console.log("somme des nombre d'un tableau d'entier de 1 a 3 avec for() ");
console.log(sumFor(t));
console.log("somme des nombre d'un tableau d'entier de 1 a 3 avec forEach() ");
console.log(sumForEach(t));
console.log("somme des nombre d'un tableau d'entier de 1 a 3 avec reduce() ");
console.log(sumReduce(t));

/*Exercice 1.3*/

function moyFor(tab){
  return sumFor(tab)/tab.length;
}

function moyForEach(tab){
  return sumForEach(tab)/tab.length;
}

function moyReduce(tab){
  return sumReduce(tab)/tab.length;
}

t=[1,2,3,4];
console.log("moyenne des nombre d'un tableau d'entier de 1 a 4 avec for() ");
console.log(moyFor(t));
console.log("moyenne des nombre d'un tableau d'entier de 1 a 4 avec forEach() ");
console.log(moyForEach(t));
console.log("moyenne des nombre d'un tableau d'entier de 1 a 4 avec reduce() ");
console.log(moyReduce(t));

/*Exercice 1.4*/

function detect(tabString,pattern){
  res=[];
  for (var i = 0; i < tabString.length; i++) {
    if(tabString[i].includes(pattern.toLowerCase())){
      res.push(tabString[i].toUpperCase())
    }
  }
    return res;
}

t=["test","chat","attendre"]
console.log("affiche un tableau avant et apres la detection du pattern 'AT'");
console.log(t);
console.log(detect(t,'at'));


/*Exercice 1.5*/

function detectFilterMap(tabString,pattern){
  let f=(s)=>s.includes(pattern.toLowerCase());
  let m=(e)=>e.toUpperCase()
  return tabString.filter(f).map(m)
}

t=["test","chat","attendre"]
console.log("affiche un tableau avant et apres la detection du pattern 'AT' avec filter() et map()");
console.log(t);
console.log(detectFilterMap(t,'at'));

/*Exercice 1.6*/

function detectGeneral(strings,tstFnct,transFnct){
  return strings.filter(tstFnct).map(transFnct)
}

function nDetect(tab){
  let f=(s)=>s.includes(pattern.toLowerCase());
  let m=(e)=>e.toUpperCase()
  return detectGeneral(f,m);
}
t=["test","chat","attendre"]
console.log("affiche un tableau avant et apres la detection du pattern 'AT' avec la fonction generalisée");
console.log(t);
console.log(detectFilterMap(t,'at'));
