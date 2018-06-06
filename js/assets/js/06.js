/* --------------------------------------
    Les fonctions 🤖
----------------------------------------*/

function Bonjour() {
    /* Lors de l'appel de cette fonction, 
       les instructions  ci dessous seront excutés 
    
    alert('Bonjour !');*/
}

/* Je vais appeler ma fonction "Bonjour" et declencher ses instruction.
*/
Bonjour();

// function NomdeMafonction (Argument 1, Argument 2, Argument n)
//    Les instructions
// 

function ditBonjour(Prenom, Nom){
    document.write("<p>Bonjour <strong>"+ Prenom + " " + Nom + "</strong> ! </p>")
}

ditBonjour( "Riki", "Ndinga");


function addition(var1,var2){

     return var1 + var2;
}

document.write("<p>" + addition(10,5) + "</p>")