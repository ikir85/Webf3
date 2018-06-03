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
        nom: "NDINGA",
        moyenneMatiere: {
            francais: 11,
            espagnol: 16,
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
            literrature: 20
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



for( i = 0; i < PremierTrismestre.length ; i++ ){
    var j = 0;
    var totalNote= 0;
    var moyenneGeneral= 0;
    var moyenneDec = 0

    w( PremierTrismestre[i].prenom + ' ' + '<span style="text-transform: Uppercase;">' +PremierTrismestre[i].nom+ '</span>' )
    w( '<ul style="list-style: none;">');
    while ( j < Object.keys(PremierTrismestre[i].moyenneMatiere).length){
        w( '<li style="text-transform: capitalize;">' + Object.keys(PremierTrismestre[i].moyenneMatiere)[j] + ' : '+ Object.values(PremierTrismestre[i].moyenneMatiere)[j]+ '</li>');
        totalNote = totalNote + parseFloat(Object.values(PremierTrismestre[i].moyenneMatiere)[j]);
        moyenneGeneral = totalNote / Object.keys(PremierTrismestre[i].moyenneMatiere).length;
        moyenneDec = moyenneGeneral.toFixed(2);
        j++;
    }
        w( '<br><li style="text-transform: capitalize;">' + '<b>Moyenne General</b> : ' + moyenneDec + '</li>');
    w( '</ul><hr>');
}