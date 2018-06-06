/**  Les selecteurs jQuery */

// -- Format : $('selecteur);
// -- En jQuery, tous les selecteurs CSS sont disponibles....

$(function(){ 
   l = e => console.log(e);

   /** Je veux selectionner mon Menu grace a son ID */
   //En JS 
   l (document.getElementsByTagName('span'));

   //En JQ
   l ( $('#menu'));

   /** Je veux selectionner mon Menu grace a sa classe */
   //En JS 
   l (document.getElementsByClassName('MaClasse'));

   //En JQ
   l ( $('.MaCLasse'));

   /** Selectionner un Attribut */
   //En JS 
   l ('[href="http://www.google.fr"]');




})