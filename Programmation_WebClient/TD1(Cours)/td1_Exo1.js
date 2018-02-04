/**
 * Created by canals on 25/01/2017.
 */
'use strict'


/* exercice 1.1 */

function min(a,b) {
  if(a<b){
    return a;
  }else if(b<a){
    return b;
  }else{
    return a;
  }
}
console.log("Minimum entre 3 et 4");
console.log( min(3, 4));

let max = (a,b) => {
  if(a>b){
    return a;
  }else if(b>a){
    return b;
  }else{
    return a;
  }
}

console.log("Maximum entre 3 et 4");
console.log( max(3, 4));

/*Exercice 1.2*/

function bingo(){
  for (var i = 1; i <= 100; i++) {
    var res=i;
    if(i%3==0){
      res+="woueee";
    }
    if(i%5==0){
    res+="yoooo";
    }
    if(i==73){
      res+="Bingoooo";
    }
    console.log(res);
  }
}

console.log("Fonction Bingo");
bingo();



/*Exercice 1.3*/

function power(x,n){
  var res=x;
  for (var i = 1; i < n; i++) {
    res*=x;
  }
  console.log(res);
}

console.log("Fonction puissance ex: 3^2");
power(3,2);


/*Exercice 1.4*/

function powerR(x,n){
  var tmp
  if(n==0){
    return 1;
  }else{
    tmp=x*powerR(x,n-1)
  }
  return tmp;
}

console.log("Fonction puissance recursive ex: 2^3");
console.log(powerR(2,3));
