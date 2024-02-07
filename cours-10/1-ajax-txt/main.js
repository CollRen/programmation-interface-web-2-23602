(function() {

	let elSelect = document.querySelector('[data-js-select]'),
		elReponse = document.querySelector('[data-js-reponse]');



	/**
	 * Initialise le gestionnaire d'événement
	 */
	elSelect.addEventListener('change', function() {
		if (elSelect.value != 0) appelAJAX();
	});



	/**
	 * Fonction asynchrone pour récupérer la valeur du fichier .txt spécifié
	 */
	function appelAJAX() {





	};
})();