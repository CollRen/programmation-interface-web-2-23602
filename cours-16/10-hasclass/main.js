$(window).on('load', function() {
    
    $('button').on('click', function() {
        
        // bool
        console.log($('p').hasClass('paragraphe'));
        console.log($('p').hasClass('nope'));

        // this -> target (button)
        console.log($(this));
        $(this).addClass('clicked');

        // toggle
        if ($('div').hasClass('hidden')) $('div').removeClass('hidden');
        else $('div').addClass('hidden');
    
    });

});