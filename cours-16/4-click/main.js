$(window).on('load', function() {

    $('button').on('click', function(e) {
        console.log(e.target);
        ajouteClasse('selected');
    })

    function ajouteClasse(classCSS) {
        $('div').addClass(classCSS);
    }


});