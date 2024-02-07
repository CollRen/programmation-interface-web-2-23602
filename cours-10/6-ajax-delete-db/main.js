(function() {
	
	let elEquipes = document.querySelector('[data-js-equipes]');



	/**
	 * Initialise le gestionnaire d'événement
	 */
	elEquipes.addEventListener('submit', function(e) {
		e.preventDefault();
		appelAJAX(e.target);
	});



	/**
	 * Fonction asynchrone pour supprimer l'équipe spécifiée
	 */
	function appelAJAX(elForm) {





	};
})();