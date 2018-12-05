
/*
Program Name: Recipe Display Application
Author: Patrick Trierweiler
Date: 12/3/2018
Filename: script.js
*/

/* global $ */
/* global "slow"*/
//displays the next element after the current target
    function display(event) {

        $(event.currentTarget).next().fadeIn("fast");
        

    }//end of display
   
//attach event listener to h3 elements to invoke display function when clicked
    $("h3").click(display);
    
    //displays and animates the next element after the current target
function display(event) {
 $(event.currentTarget).next().animate( {height: 'toggle'}, "fast");
}//end of display2
    

$( "div" ).css( "border", "4px dotted black" ).width(80)
  .add( "p" )
  .css( "background", "green" );
  
  $( "li" ).css( "border-bottom", "4px solid yellow" ).add( "li" ).width(250);
  $( "p" ).last().after( "<b>Heyyo this was added after</b>" );
  
