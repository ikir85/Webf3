/**   
 * 
 *      ~ Les  DOM ~    
 * 
 *      Le DOM est une interface de developpement en JS pour HTML. 
 *      Grace au dom je vais en mesurer de lodifier, d'accceder mon HTML 
 * 
 *      Chaque page chargée dans mon navigateur à un objet "document"
 * 
 */

/**
 * Comment puis je faire pour recuperer les differentes informations de ma page HTML ?
 * document.getElementById() est une focntion qui va permettre de recuperer un élément
 * HTML a partir de son identifiant uniaue: ID
 * 
 */

 var bonjour = document.getElementById('bonjour');
 console.log(bonjour);

 var contenu = document.getElementsByClassName('contenu');
 console.log(contenu);

var span = document.getElementsByTagName('span');
console.log(span);

//  Me renvoie un tableau JS avec mes elements HTML (Collections HTML).