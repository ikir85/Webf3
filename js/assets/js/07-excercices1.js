
    
    var person = prompt("Quel est votre nom", "");
   
    alert( "Bonjour " + person );

    
    var Age = parseInt(prompt("Quel est votre age?"));

    var Mois = prompt("Quel est votre mois de naissance?");
   
    var d = new Date();
    var n = d.getFullYear();

    if (Mois < 0 || Mois > 12){
        alert("Erreur, veuillez entrer un chiffre entre 0 et 12 ");
        var Mois = prompt("Quel est votre mois de naissance?");
    }
    
    if (Mois<d.getMonth){
        alert("Votre année de naissance est donc " + ( (n - Age)-1 ));
    }
    else{
        alert("Votre année de naissance est donc " + ( n - Age ));
    }

    alert( "Bonjour " + person + ", tu as " + Age + "ans" ); 