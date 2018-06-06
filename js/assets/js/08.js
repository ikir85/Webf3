function VerifAge() {

    var age = parseInt(prompt("Bonjour quel est votre age","<Saisir votre age>"));

    if (  age > 0 && age < majoriteLegale ){
        alert("Erreur, vous n'avez pas l'age legale");
        document.location.href="http://google.com";
    }
    else if( age < 0){
        alert("Erreur, veuillez saisir une valeur positive");
        var age = parseInt(prompt("Bonjour quel est votre age","<Saisir votre age>"));

        if (  age > 0 && age < majoriteLegale ){
            alert("Erreur, vous n'avez pas l'age legale");
            document.location.href="http://google.com";
        }
        else{
            alert("Bienvenue a vous !");
        }
    }
    else{
        alert("Bienvenue a vous !");
    }
   
}

VerifAge();