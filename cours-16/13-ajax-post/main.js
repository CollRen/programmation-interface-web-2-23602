$(window).on('load', function() {

	$('[data-js-btn]').on('click', function(e) {
		e.preventDefault();

		let usager = $('input[name="usager"]').val(),
			password = $('input[name="mot-de-passe"]').val(),
			nom = $('input[name="nom"]').val(),
			prenom = $('input[name="prenom"]').val();

		$.post('requetes/requeteAJAX.php', { usager: usager, password: password, nom: nom, prenom: prenom })
			.done(function(data) {

				console.log(data);

				if (data != 'Erreur query string' && data != 'Les champs ne sont pas tous saisis.') {
					$('[data-js-form]').hide();
					$('[data-js-form-wrapper]').html('<h3>Merci !</h3>');

					console.log('Réussi');
				}
				
			})
			.fail(function() {
				console.log('Échec');
			})
			.always(function() {
				console.log('Toujours');
			});
	});
});