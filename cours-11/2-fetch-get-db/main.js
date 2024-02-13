(function() {

	let elSelectEquipe = document.querySelector('[data-js-select-equipes]'),
		elJoueurs = document.querySelector('[data-js-joueurs]');



    /**
	 * Initialise le gestionnaire d'événement
	 */
	elSelectEquipe.addEventListener('change', function() {
		if (elSelectEquipe.value != 0) appelFetch();
	});



    /**
	 * Fonction asynchrone pour récupérer les joueurs de l'équipe spécifiée
	 */
	function appelFetch() {





    };
})();