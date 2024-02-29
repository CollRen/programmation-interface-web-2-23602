/* window.addEventListener('DOMContentLoaded', function() {

console.log('OK!');

}); */


/**
 * Base jQuery 
 * Selecteur -> action
 */

//"addEventListener" = ".on"

$(window).on('load', function() {
    console.log('OK!');


    //jQuery -> hide elements
    let elsHidden = $('[data-js-hide]');
    elsHidden.hide();


    //Vanille -> hide elements
/*     let elsHidden = document.querySelectorAll('[data-js-hide]');
    
    elsHidden.forEach(function(elHidden) {
        elHidden.style.display = 'none';
    }) */

    
});