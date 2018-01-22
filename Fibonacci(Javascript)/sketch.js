var f = 2; //change le nombre de carrés
var L;
var l;
var fibo = new Array(f);

fibo[0] = 100;
fibo[1] = fibo[0];
var slider;
var BoutonZoom;
var BoutonDezoom;
var BoutonSuivant;
var BoutonPrecedent;
var AfficherCourbe;
var texte;

function square(x, y, c) {
	stroke('white');
	line(x, y, x + c, y);
	line(x, y, x, y + c);
	line(x + c, y, x + c, y + c);
	line(x, y + c, x + c, y + c);
}

function zoom() { //methode qui "zoom" en agrandissant les longueurs
	for (var k = 0; k < fibo.length; k++) {
		fibo[k] = fibo[k] * 2;
	}
}

function dezoom() { //methode qui "dezoom" en diminuant les longueurs
	for (var k = 0; k < fibo.length; k++) {
		fibo[k] = fibo[k] * 0.5;
	}
}

function suivant() {
	f = f + 1;
}

function precedent() {
	if (f >= 3) {
		f = f - 1;
	}
}


function setup() {
	 L = window.innerWidth;
	 l = window.innerHeight;

	createCanvas(L, l);
	background(0);

	BoutonPrecedent = createButton('Generation Precedente');
	BoutonPrecedent.position(20, 20);
	BoutonPrecedent.mousePressed(precedent);

	BoutonSuivant = createButton('Generation Suivante');
	BoutonSuivant.position(170, 20);
	BoutonSuivant.mousePressed(suivant);

	BoutonZoom = createButton('zoom');
	BoutonZoom.position(20, 40);
	BoutonZoom.mousePressed(zoom);

	BoutonDezoom = createButton('dezoom');
	BoutonDezoom.position(70, 40);
	BoutonDezoom.mousePressed(dezoom);

	AfficherCourbe = createInput(0, 1, 0);
	AfficherCourbe.attribute("type", "checkbox");
	AfficherCourbe.position(270, 40);
	AfficherCourbe.attribute('unchecked', null);

}



function draw() {

	 L = window.innerWidth;
	 l = window.innerHeight;

	var X = L / 2; //Met l'origine des carrés au centre de la fenetre 
	var Y = l / 2; //

	var incr = 1; //numero de l'etape(utile au dessin des carrés)

	var sX = X;
	var sY = Y;

	fibo.length = f;

	for (var i = 1; i < fibo.length - 1; i++) { //
		fibo[i + 1] = fibo[i] + fibo[i - 1];		 // Boucle qui construit la suite de Fibonnaci
		console.log(fibo[i]);																					//						
	} 																			 //			

	background(0);
	noFill();

	for (var j = 0; j < fibo.length; j++) {

		if (AfficherCourbe.elt.checked) {
			arc(sX + fibo[1], sY + fibo[1], 2 * fibo[1], 2 * fibo[1], PI, -PI / 2);
		}

		

		square(X, Y, fibo[j]);

		switch (incr) {
			case 1:
				X += fibo[j];
				if (AfficherCourbe.elt.checked) {
					arc(X, Y + fibo[j + 1], 2 * fibo[j + 1], 2 * fibo[j + 1], -PI / 2, 0);
				}
				break;
			case 2:
				X -= fibo[j - 1];
				Y += fibo[j];
				if (AfficherCourbe.elt.checked) {
					arc(X, Y, 2 * fibo[j + 1], 2 * fibo[j + 1], 0, PI / 2);
				}
				break;
			case 3:
				X = X - fibo[j + 1];
				Y = Y - fibo[j - 1];
				if (AfficherCourbe.elt.checked) {
					arc(X + fibo[j + 1], Y, 2 * fibo[j + 1], 2 * fibo[j + 1], PI / 2, PI);
				}
				break;
			case 4:
				Y -= fibo[j + 1];
				incr = 0;
				if (AfficherCourbe.elt.checked) {
					arc(X + fibo[j + 1], Y + fibo[j + 1], 2 * fibo[j + 1], 2 * fibo[j + 1], PI, -PI / 2);
				}
				break;
		}

		
		incr += 1;

	}
	fill(255);
	noStroke();
	textAlign(CENTER);
	textFont("Georgia");
	textSize(15);
	text("Afficher la courbe", 200, 55);


}