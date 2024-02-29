$(window).on('load', function() {
    
    $('button').on('click', function() {

        // display='none' devient display='block' et vice-versa
        $('div').toggle();
    });

});