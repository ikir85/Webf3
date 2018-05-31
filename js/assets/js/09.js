/* Les operateur de comparaisons

  l'operateur de comparaison " == " siginifie : Egal a.
  Il permet de verifier que 2 variables sont identique.

  l'operateur de comparaison " === " siginifie : strictement egal a.
  Il compare la valeur et le type.

  L'operateur " != "; different de
  L'operateur " !=="; strictment different de

*/

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";


/* Technique 1
function VeriIdentif() {

    var emailUser = prompt("Entrez votre email","email");

    var mdpUser = prompt("Entrez votre mdp","mdp");

    if(( emailUser == email ) && ( mdpUser == mdp )) {
        alert("Mot de passe et email correct");
    }
    else{
        alert("Mauvais mot de passe");
    }

}

VeriIdentif();*/

function verifIdent(emailUser,mdpUser){
    if (( emailUser == email ) && ( mdpUser == mdp )) {
        return true;
    } else {
        return false;
    }
}

var emailUser = prompt("Entrez votre email","email");

var mdpUser = prompt("Entrez votre mdp","mdp");

if(verifIdent(emailUser,mdpUser)) {
    alert("Mot de passe et email correct");
}
else{
    alert("Mauvais mot de passe");
}

