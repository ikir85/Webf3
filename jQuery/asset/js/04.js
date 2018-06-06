$(function(){ 

    l = e => console.log(e);
    

    $( "#MonFormulaire" ).submit(function( event ) { //on
      var inputValue= $('#nomcomplet').val();
      var pElement = "<p></p>";
      event.preventDefault();

      $('form').hide('slow');
      $("body").append(pElement); 
      $('p').append(" Bonjour <b>" + inputValue +"</b>" );
    });

  });