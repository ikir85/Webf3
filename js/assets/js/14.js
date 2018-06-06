/**   
 * 
 *      ~ Les  evenements ~    
 * 
 * Les evenement vont me permettre de declencher une fonction, c'est a dire une serie d'instructions;
 * suite  a une action de mon utlisateur...
 * 
 * Ojectif : Etre en mesure de capturer ces evenements afin d'executer une focntion.
 * 
 * Les evenements : Mouse ( Souris)
 *     click : au click sur un element;
 *     mouseenter : la souris passe au dessus de la zone d'un element;
 *     mouseleave : la souris sors de cette zone.
 * 
 * Les evenement: KEYBOARD (Clavier)
 *     keyup : une touche du clavier a ete relachee;
 *     keydown : une touche est enfoncés.
 * 
 * Les evenement: WINDOW ( Fenetre )
 *     scroll : defilement de la fenetre;
 *     resize : redimentionnement de la fenetre.
 * 
 * Les evenements : FORM ( Formulaire )
 *     change : pour les elements <input>, <select> et <textarea>;
 *     submit : à l'envoie (soulission) du formulaire
 *     input : pour capter la saisie d'un utlisateur sur un champ <input>     
 * 
 */

//  Les ecouteurs d'evenements 

var p = document.getElementById('MonParagraphe');

function changerLaCouleurEnROuge(){
   p.style.color = "red";

}

p.addEventListener('click', changerLaCouleurEnROuge);



var inputUser = document.createElement('input');

inputUser.setAttribute('type','text');
inputUser.setAttribute('placeholder','Saisissez un contenu...');
inputUser.id = "Myinput";

document.body.appendChild(inputUser);

function Seevalue(){
alert(inputUser.value);
}

inputUser.addEventListener('change', Seevalue);




