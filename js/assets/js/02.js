//  Declarer un tableau Indexé
var monTableau = [];
var myArray = new Array;

monTableau[0] = "Hugo";
monTableau[1] = "Roro";
monTableau[2] = "Filou";

console.log(monTableau); // Affiche toutes les données du tableau
console.log(monTableau[1]); // Roro
console.log(monTableau[2]); // Filou

var NosPrenoms = ["Sylvain", "wahib", "robin", "nicolas", "marine", "julien"];
console.log(NosPrenoms);


// Declarer et affecter des valeurs à un objet

var Coordonnee = { 
    prenom : "Hugo",
    nom : "Liegard",
    age : 28
};

console.clear
console.log(Coordonnee); // Roro
console.log(Coordonnee['prenom']); 
console.log(Coordonnee.nom); 

var AnnuaireDesApprenants = [
    ["Hugo", "Liegard", "07 86 62 25 58"], 
    ["Sylvain", "Gord", "xx xx xx xx xx"], 
    "robin", 
]

console.log(AnnuaireDesApprenants);
console.log(AnnuaireDesApprenants[0][1]);
console.log(AnnuaireDesApprenants[1][2]);


var AnnuaireDesApprenants = [
   {
       prenom: "Hugo",
       nom: "Liegard",
       coordonées :{
           adresse : "Ducos",
           cp: 97884,
           region: "Martinique",
           pays: {
               code: FR,
               nom : "France"
           }
       },
       tel: {
           fixe: "",
           fixex: "",
           port: ""
       }
   }
]

