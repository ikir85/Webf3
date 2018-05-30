/* alert('wow ! Tu es sur ma page');
alert('Tu es le bienvenue.');*/

// Deux slash pour faire un commentaire

/* Ici je peux faire un commentaire sur plusieur ligner
    Raccourci : ctrl +:
       ou ctr l+ shift:
*/


//  --1 Declarer une variable
var prenom;

//  --2 Affecter une variable
prenom = "riki"; 

//  --3 Afficher la variable sur console.
console.log(prenom);
    


/* 
   Les Types de variables
*/

console.log(typeof prenom);

var Age = 40;
console.log(typeof Age);



/* 
   La portée des variables
   Les variables declarés directement a la racine du fichier JS sont appelés variables GLOBALES.

   Elles sont disponibles dans l'ensemble de votre document, y compris dans les fonctions.
   
   ### 

   Les variables declarés a l'interieur d'une fonction sont appelés variables LOCALES.

   Elles sont disponibles uniquement dans le scope de la fonction

*/

// Les variables de type FLOAT
var uneDecimal = -2.984;
console.log(uneDecimal);
console.log(typeof uneDecimal);

// Les booleens ( Vrai / Faux )
var unBooleen = false; // true
console.log(unBooleen);
console.log(typeof uunBooleen);

/*
La declaration CONST permet de creer une constante accessible uniquement en lecture. Sa valeur ne pourra pas etre modifiée par des reaffectations ulterieures. Une constante ne peut pas etre declaree a nouveau.

Generalement par convention, les constantes sont en majuscules.
*/

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// Je ne peux pas faire cela...
// USER = "Hugo";
// Uncaught TypeError: Assigment to constant variable; 

/*
        La minute info

    Au fur et à mesure aue l'on affecte ou ré-affecte des valeurs à une variable, celle-ci prend la nouvelle valeur et le nouveau type !

    En javascript ( ECMA Script ) ; les variables sont auto-typées.

    Pour convertir une variable de type NUMBER en STRING et STRING en NUMBER, je peux utiliser les fonctions natives de JS.
        
*/

var Age1 = "40";
console.log(Age1);
console.log(typeof Age1);


/*
 * La fonction parseInt() pour retourner un Entier a partir de ma chaine de charctere.
 *       
*/

Age1 = parseInt(Age1);
console.log(Age1);
console.log(typeof Age1);

unFloat = "12.55";
console.log(unFloat);
console.log(typeof unFloat);


// Convertion force d'un nombre en float
unFloat = parseFloat(unFloat);
console.log(unFloat);
console.log(typeof unFloat);

unNombre1 = 10;
var monNombreeDeTypeString = unNombre1.toString();
console.log(unNombre1);
console.log(typeof unNombre1);




