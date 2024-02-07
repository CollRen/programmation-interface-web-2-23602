(function() {
	
	let elEquipes = document.querySelector('[data-js-equipes]');



	/**
	 * Initialise le gestionnaire d'événement
	 */
	elEquipes.addEventListener('submit', function(e) {
		e.preventDefault();
		if (e.target.nom.value != '') appelAJAX(e.target);
	});



	/**
	 * Fonction asynchrone pour modifier le nom de équipe spécifiée
	 */
	function appelAJAX(elForm){





	};
})();