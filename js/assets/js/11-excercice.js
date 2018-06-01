/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

// -- Les Flemards.js
function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}


var PremierTrismestre = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        moyenneMatiere: {
            francais: 12,
            anglais: 14,
            maths: 18,
        }
    },
    {
        prenom: "Riki",
        nom: "Ndinga",
        moyenneMatiere: {
            francais: 11,
            anglais: 16,
            physique: 9,
        }
    },
    {
        prenom: "Jules",
        nom: "Verne",
        moyenneMatiere: {
            francais: 9,
            histoire: 17,
            maths: 15,
        }
    },
    {
        prenom: "Pascal",
        nom: "Robitaille",
        moyenneMatiere: {
            anglais: 17,
            sVT: 8,
            maths: 11,
        }
    },
    {
        prenom: "Julien",
        nom: "Dupont",
        moyenneMatiere: {
            latin: 10,
            techno: 10,
            maths: 9,
            anglais: 17,
            sVT: 8
        }
    }
];

var j = 0;

for( i = 0; i < PremierTrismestre.length ; i++ ){
    w( 'Moyenne de ' + PremierTrismestre[i].prenom + ' ' + PremierTrismestre[i].nom )
    w( '<ul>');
    while ( j < Object.keys(PremierTrismestre[i].moyenneMatiere).length){
        l(Object.keys(PremierTrismestre[i].moyenneMatiere).length);
        w( '<li>' + PremierTrismestre[i].moyenneMatiere + '</li>');
        j++;
    }
    j=0;
    w( '</ul>');
}