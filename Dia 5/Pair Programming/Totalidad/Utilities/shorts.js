$('#displayNone').click(function(e) {
  
    // Resetear, por si acaso has estado jugando con la otra propiedad
    $('#hide-me').css('visibility', 'visible');
    
    if( $('#hide-me').is(":visible") ) {
      $('#hide-me').css('display', 'none'); 
    } else {
      $('#hide-me').css('display', 'flex');
    }
  });
  
  $('#visibilityHidden').click(function(e) {
    
    // Resetear, por si acaso has estado jugando con la otra propiedad
    $('#hide-me').css('display', 'flex');
    
    if( $('#hide-me').css('visibility') != 'hidden' ) {
      $('#hide-me').css('visibility', 'hidden');
    } else {
      $('#hide-me').css('visibility', 'visible');
    }
  });