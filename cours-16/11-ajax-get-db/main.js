$(window).on('load', function() {

	$('[data-js-btn]').on('click', function(e) {
		//e.preventDefault();

		let msg = '';

		$.get('requetes/requeteAJAX.php')
			.done(function(data) {

				console.log(data);
				console.log('Réussi');

				let equipes = $.parseJSON(data);

				$.each(equipes, function(i, equipe) {
					console.log(equipe.nom);
					msg += `<p>${equipe.nom} - ${equipe.quartier}</p>`;
				});

				$('[data-js-resultat]').html(msg);

			})
			.fail(function() {
				console.log('Échec');
			})
			.always(function() {
				console.log('Toujours');
			});
	});
	
});