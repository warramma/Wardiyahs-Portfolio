$('html').addClass('js'); // prevent hiding divs on DOM ready from 'flashing'

$(function() {

  var counter = 1;

  $('#toggle_value').click(function() {
    $('div','#container')
      // to stop current animations - clicking really fast could originally
      // cause more than one div to show 
      .stop() 
      // hide all divs in the container
      .hide() 
      // filter to only the div in question
      .filter( function() { return this.id.match('div' + counter); })
      // show the div 
      .show('fast');

    // increment counter or reset to 1 if counter equals 3
    counter == 7? counter = 1 : counter++; 

    // prevent default anchor click event
    return false; 

  });

});