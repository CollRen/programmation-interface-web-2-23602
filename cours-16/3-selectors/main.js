$(window).on('load', function() {


// $('div').addClass('selected');
$('div:nth-child(2)').addClass('selected');

$('div .paragraphe').addClass('selected');

$('div.paragraphe').addClass('selected');

// Bref, les sélecteurs CSS fonctionnent

// odd, even, contains
$('p:odd').addClass('odd');
$('p:even').addClass('even');
$('p:contains("test")').addClass('contient-test');


$('p:first()').addClass('first-p');

$('div').chidren('.paragraphe').addClass('div-last-child'); // Celui-ci ne fonctionne pas ?

});