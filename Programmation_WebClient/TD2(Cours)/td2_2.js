/*Exercice 2.1*/
function objTab(tab){
  return {"nbrElement":tab.length,"somme":sumFor(tab),"moyenne":moyFor(tab)}
}

t=[1,2,3]
console.log("creation d'objet a partir d'un tableau d'entier de 1 a 3");
console.log(objTab(t));

/*Exercice 2.2*/

var etudiant={
  "numero":2,
  "nom":"tetris",
  "prenom":"Lucas",
  "dateNaiss":new Date(2000,2,1),
  "mail":"luca.tetris@hotmail.com",
  "notes":[],

  calculerAge() {
    var anneeM=new Date().getFullYear();
    var anneeNaiss=this.dateNaiss.getFullYear();
    return anneeM-anneeNaiss;},

  info() {
    res='';
    res+="Prenom: "+this.prenom+", NOM: "+this.nom.toUpperCase()+", Date de naissance: ";
    res+=this.dateNaiss.getMonth()+"/"+this.dateNaiss.getDay()+"/"+this.dateNaiss.getFullYear();
    return res;},

  moyenne() {
    tab=[];
    for (var i = 0; i < this.notes.length; i++) {
      tab.push(this.notes[i].note)
    }
    return moyFor(tab);},

    ajouterNote(m,n) {
      var o={"matiere":m,"note":n};
      this.notes.push(o);
    }


};


console.log("Affichage de l'eleve litteral");
console.log(etudiant);

/*Exercice 2.3*/

console.log("Afficher l'age de l'eleve crée auparavant");
console.log(etudiant.calculerAge());

/*Exercice 2.4*/

console.log("affiche les informations de l'eleve");
console.log(etudiant.info());

/*Exercice 2.4*/
console.log("Ajout de note");
etudiant.ajouterNote("Anglais",5);
etudiant.ajouterNote("Anglais",15);
console.log(etudiant.notes);
/*Exercice 2.5*/
console.log("Moyenne de l'eleve");
console.log(etudiant.moyenne());


/*Exercice 2.6*/
function Etudiant(num,nom,pre,jourNais,moisNais,anneeNais,mail) {
    this.numero=num;
    this.nom=nom;
    this.prenom=pre;
    this.dateNaiss=new Date(anneeNais,moisNais,jourNais);
    this.mail=mail;
    this.notes=[];

    this.calculerAge=function(){
      var anneeM=new Date().getFullYear();
      var anneeNaiss=this.dateNaiss.getFullYear();
      return anneeM-anneeNais;
    }

    this.info=function(){
      res='';
      res+="Prenom: "+this.prenom+", NOM: "+this.nom.toUpperCase()+", Date de naissance: ";
      res+=this.dateNaiss.getMonth()+"/"+this.dateNaiss.getDay()+"/"+this.dateNaiss.getFullYear();
      return res;
    }

    this.moyenne=function(){
      tab=[];
      for (var i = 0; i < this.notes.length; i++) {
        tab.push(this.notes[i].note)
      }
      return moyFor(tab);
    }

    this.ajouterNote=function(m,n){
      var o={"matiere":m,"note":n};
      this.notes.push(o);
    }
}

console.log("Creation d'un etudiant avec un constructeur");
var e=new Etudiant(1,"Truc","Jean",1,1,2000,"jeantruc@gmail.com");
console.log(e);

/*Exercice 2.7*/

function anniversaire(etudiants,mois){
  res=[];
  for (var i = 0; i < etudiants.length; i++) {
    if(etudiants[i].dateNaiss.getMonth()==mois-1){
      res.push(etudiants[i]);
    }
  }
  return res;
}

console.log("Eleve dont l'anniversaire est en Mars");
console.log(anniversaire([etudiant,e],3));

/*Exercice 2.8*/

function plusQueAge(etudiants,age){
  res=[];
  for (var i = 0; i < etudiants.length; i++) {
    if(etudiants[i].calculerAge()>age){
      res.push(etudiants[i]);
    }
  }
  return res;
}

console.log("Eleves dont l'age ets superieur a 10 ans");
console.log(plusQueAge([etudiant,e],10));

/*Exercice 2.9*/

function GroupeEtudiant(nom,form,liste,annee){
  this.nomGroupe=nom;
  this.formation=form;
  this.liste=liste;
  this.annee=annee;
}
