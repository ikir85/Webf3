$(function(){ 
  console.log($('div'));

  $('div').hide('slow');


  /** Une fois aue la methode hide() est termine; mon alerte peut s'excuter*/
  /** $('div').css('background','yellow');
  $('div').css('color','red');
  $('div').show('slow');

  $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(5000);*/
  $('p').hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);


  
});