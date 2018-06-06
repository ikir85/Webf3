/**
 *       La disponibilite du DOM
 * 
 *  A partir du moment ou mon DOM, c'est a dire l'ensemble de l'arborescence 
 *  de ma page HTML est completement chargé ; je peux commencer à utliser jQuery.
 * 
 *  Je vais mettre l'ensemble de mon code dans une fontction
 * 
 * 
 * 
 */
    // 1er version
   jQuery(document).ready(function(){
   //Ici, le DOM est entierement chargé, je peux procéder à mon code JS !
   // ...
    // En JS
    document.getElementById('textEnJquery').innerHTML="<strong> Mon texte en JS</strong>";
    
    // En Jquery
    $('#textEnJquery').html('Mon Teste en JQ')


   })

   
   
  