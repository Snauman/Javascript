var ligne="!EXCLAMATION-POINT	EH K S K L AH M EY SH AH N P OY N T";
var lignee="AACHEN	AA K AH N";
var lignee="'END-INNER-QUOTE	EH N D IH N ER K W OW T";
var exp_reg = "[a-z|A-Z]";
var mot="";

//Partie Mot
  if(!ligne.charAt(0).match(exp_reg)){
    mot=ligne.charAt(0);

  }else{

    for (var i = 0; i < ligne.length; i++) {
      if(ligne.charAt(i).match(exp_reg)){
          mot+=ligne.charAt(i);
      }else{
        break;
      }


    }

  }

document.write(mot);

document.write("<br/>");

//Partie
var expr="[ \t]+[A-Za-z \t]+";
var trad=false;
document.write(ligne.match(expr));
