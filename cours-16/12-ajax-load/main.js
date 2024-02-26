$(window).on('load', function() {

	$('[data-js-select-equipes]').change(function() {
		let value = $('[data-js-select-equipes]').val();
		if (value != 0) $('[data-js-reponse]').load('requetes/requeteAJAX.php?idEquipe=' + value);
	});

});