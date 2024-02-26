$(window).on('load', function() {
    
    $('button').on('click', function() {
        console.log($('p').attr('class'));
        console.log($('p').attr('data-js-paragraphe'));
    });

});