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
        matieres: {
            francais: 12,
            anglais: 14,
            maths: 18,
        }
    },
    {
        prenom: "Riki",
        nom: "NDINGA",
        matieres: {
            francais: 11,
            espagnol: 16,
            physique: 9,
        }
    },
    {
        prenom: "Jules",
        nom: "Verne",
        matieres: {
            francais: 9,
            histoire: 17,
            maths: 15,
            literrature: 20
        }
    },
    {
        prenom: "Pascal",
        nom: "Robitaille",
        matieres: {
            anglais: 17,
            sVT: 8,
            maths: 11,
        }
    },
    {
        prenom: "Julien",
        nom: "Dupont",
        matieres: {
            latin: 10,
            techno: 10,
            maths: 9,
            anglais: 17,
            sVT: 8
        }
    }
];



for( i = 0; i < PremierTrismestre.length ; i++ ){
    let Etudiant = PremierTrismestre[i];
    let j = 0;
    let totalNote= 0 , moyenneGeneral= 0, moyenneDec = 0 ;

    w( Etudiant.prenom + ' ' + '<span style="text-transform: Uppercase;">' +Etudiant.nom+ '</span>' )
    w( '<ul style="list-style: none;">');

    while ( j < Object.keys(Etudiant.matieres).length){
        w( '<li style="text-transform: capitalize;">' + Object.keys(Etudiant.matieres)[j] + ' : '+ Object.values(Etudiant.matieres)[j]+ '</li>');
        totalNote += Object.values(Etudiant.matieres)[j];
        moyenneGeneral = totalNote / Object.keys(Etudiant.matieres).length;
        moyenneDec = moyenneGeneral.toFixed(2);
        j++;
    }
        w( '<br><li style="text-transform: capitalize;">' + '<b>Moyenne General</b> : ' + moyenneDec + '</li>');
        
    w( '</ul><hr>');
}



/* for (let matiere in Etudiant.matieres){ 

    let( matiere);

    w('<li>');
        w(matiere + ' : ' + Etudiant.matieres[matiere]);
    w('<li>');


}*/