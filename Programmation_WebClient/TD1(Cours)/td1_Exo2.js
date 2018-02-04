'use strict'

/*Exercice 2.1*/

function creerMultiplicateur(n){
  return (x) => {return x*n}
}

var mult2=creerMultiplicateur(2);
console.log('montre un multiplicateur de 2 avec le chiffre 3');
console.log(mult2(3));

/*Exercice 2.2*/

function creerSequence(init,step){
  return () => {return init+=step}
}

var sequ2=creerSequence(1,2);

console.log("Montre une sequence commençant a 1 et etant incrémenté de 2");
for (var i = 0; i < 3; i++) {
  console.log(sequ2());
}

/*Exercice 2.3*/

function fibonacci(c1,c2){

  return ()=>{
    var res=c1+c2;
    c1=c2;
    c2=res;

    return res;
  }
}

var f=fibonacci(1,1);
console.log("Suite de fibonacci commençant à 1 et 1");
for (var i = 0; i < 5; i++) {
  console.log(f());
}


/*Exercice 2.4*/

function NCreerMultiplicateur(n,x) {
  if(arguments.length==1){
      return (x) => {return x*n}
  }else if(arguments.length==2){
    return n*x;
  }

}


console.log('multiplicateur avec un argument ex: multiplcateur de 2 avec le chiffre  3');
var nMult2=NCreerMultiplicateur(2);
console.log(nMult2(3));

console.log('multiplicateur avec 2 argument ex: multiplication de 3 et 4');
console.log(NCreerMultiplicateur(3,4));

/*Exercice 2.5*/

function NPower(n,x){
  if(arguments.length==1){
    return (a) => {
      var tmp
      if(n==0){
        return 1;
      }else{
        tmp=a*NPower(n-1,a)
      }
      return tmp;
    }
  }else if(arguments.length==2){
    var tmp
    if(n==0){
      return 1;
    }else{
      tmp=x*NPower(n-1,x)
    }
    return tmp;
  }
}

console.log("Puissance avec 1 argument ex: n=3 et chiffre 2");
var pow3=NPower(3);
console.log(pow3(2));

console.log("Puissance avec 2 argument ex: n=2 et x=3");
console.log(NPower(2,3));

/*Exercice 2.6*/

function formatter(n) {
  let i=n
  return (mess)=>{
    i++;
    return i-1+': '+mess;

  }
}

console.log('fonction formatter a partir de 10');
var f=formatter(10);
console.log(f('premier message'));
console.log(f('deuxieme message'));
console.log(f('troisieme message'));


/*Exercice 2.7*/

function write(mess) {
  console.log(mess);
}

function writeAlert(mess) {
  write(mess);
}

console.log("test fonction write()");
write("message");
console.log("test fonction writeAlert()");
writeAlert("message");

/*Exercice 2.8*/

function logger(formattage,ecriture){
  return (mess)=>{
  //  console.log('le message a été ecrit avec la fonction '+formattage+' et la fonction '+ecriture);
    ecriture(formattage(mess));
  }
}

console.log("Fonction de formattage de la question precedente et fonction d'ecriture qui ecrit ans la console");


var MajConsole =logger(formatter(10),write);
MajConsole("test");
