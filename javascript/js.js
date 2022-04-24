//code de open/close password (afficher le mot de passe)
var state = false;

function signinpassword() {
	if (state) {
		document.getElementById("password").setAttribute("type", "password");
		document.getElementById("open").style.display = "none";
		document.getElementById("close").style.display = "block";
		state = false;
	} else {
		document.getElementById("password").setAttribute("type", "text");
		document.getElementById("open").style.display = "block";
		document.getElementById("close").style.display = "none";
		state = true;
	}
}
var etat = false;

function ouvrepassword() {
	if (etat) {
		document.getElementById("password").setAttribute("type", "password");
		document.getElementById("open").style.display = "none";
		document.getElementById("close").style.display = "block";
		etat = false;
	} else {
		document.getElementById("password").setAttribute("type", "text");
		document.getElementById("open").style.display = "block";
		document.getElementById("close").style.display = "none";
		etat = true;
	}
}
var situation = false;

function showpassword() {
	if (situation) {
		document.getElementById("password_retype").setAttribute("type", "password");
		document.getElementById("_open").style.display = "none";
		document.getElementById("_close").style.display = "block";
		situation = false;
	} else {
		document.getElementById("password_retype").setAttribute("type", "text");
		document.getElementById("_open").style.display = "block";
		document.getElementById("_close").style.display = "none";
		situation = true;
	}
}
// fin de code de open/close password (afficher le mot de passe)