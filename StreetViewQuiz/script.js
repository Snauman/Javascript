//Api key: AIzaSyAQjMNiZWZU_WC_pSLXUFInhvfADiOk_QE

window.onload=function(){
newImage();
let buttonNew=document.getElementById('newImage');
buttonNew.onclick=newImage;

function newImage(){
  let server="https://maps.googleapis.com/maps/api/streetview";
  let places=["Xouxange","Nancy","Marseille","Paris","Bordeaux","Heming",
  "Las Vegas","New York","Tokyo","Nice","Lorquin","Moscou","Strasbourg",
"Rennes","Reims","Toulouse","Istanbul","Copenhague","Mykonos","Berlin",
"Colombus","Mulhouse","Brest","Forbach","Miami","Los Angeles","Kyoto","Taiwan","Stockholm","Dublin","Riga","Bordeaux","Beauvais",
"Bergerac","Rio","Manille"];
  let key="&key=AIzaSyAQjMNiZWZU_WC_pSLXUFInhvfADiOk_QE"
  let width=Math.floor($(document).width()/2);
  let height=Math.floor($(document).height()/2)
  let size="&size="+width+"x"+height;
  let randPlace=places[Math.floor((Math.random())*places.length)];
  let boussole="&heading="+Math.floor(Math.random()*180);
  let src=server+"?location="+randPlace;
  src+=size;
  src+=boussole;
  src+=key;
  let img=document.createElement('img');
  img.src=src;
  let imageDiv=$("#image");
  imageDiv.empty();
  imageDiv.append(img);
  let choices=[];
  let placesCopy=places;
    placesCopy.splice(placesCopy.indexOf(randPlace),1);

  let nbChoice=2;
  for (var i = 1; i <= nbChoice; i++) {
    let rand=placesCopy[Math.floor((Math.random())*placesCopy.length)];
    choices.push(rand);
    placesCopy.splice(placesCopy.indexOf(rand),1);

  }

  let randIndex=Math.floor(Math.random()*3);
  choices.splice(randIndex,0,randPlace);




  let choiceElement=document.createElement("select");
  choiceElement.id="dropBox";
  for (var i = 0; i < choices.length; i++) {
    let choice=document.createElement("option");
    choice.value=choices[i];
    choice.innerHTML=choices[i];
    choiceElement.append(choice);
  }
  let choicesDiv=$('#choices');
  choicesDiv.empty();
  let text=document.createElement("p");
  text.innerHTML="Guess the place: ";
  choicesDiv.append(text);
  choicesDiv.append(choiceElement);
  let checkButton=document.createElement('button');
  checkButton.innerHTML="check";
  checkButton.id="checkButton";
  checkButton.onclick=function(){
    let dropChoice=document.getElementById('dropBox');
    let dropChoiceIndex=dropChoice.selectedIndex;
    let dropChoiceValue=dropChoice.options[dropChoiceIndex].innerHTML;
    //console.log(dropChoiceValue);
    if(dropChoiceValue==randPlace){
      console.log("success");
      alert("SUCCESS!")
      newImage();
    }else {
        alert("FAIL!")
      console.log('fail');
    }
  };
  choicesDiv.append(checkButton);
}

function middlepop(Tab,a){
return (a>Tab.length)?false:(Tab.slice(0,a).concat(Tab.slice(a+1,Tab.length)));
}


}
