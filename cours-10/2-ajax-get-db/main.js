(function() {

	let elSelectEquipe = document.querySelector('[data-js-select-equipes]'),
		elJoueurs = document.querySelector('[data-js-joueurs]');



	/**
	 * Initialise le gestionnaire d'événement
	 */
	elSelectEquipe.addEventListener('change', function() {
		if (elSelectEquipe.value != 0) appelAJAX();
	});



	/**
	 * Fonction asynchrone pour récupérer les joueurs de l'équipe spécifiée
	 */
	function appelAJAX() {





	};



	/**
     * Vérifie le format JSON
     * reférence : https://stackoverflow.com/questions/3710204/how-to-check-if-a-string-is-a-valid-json-string
     * @param {string} string 
     * @returns 
     */
    function estJson(string) {
        let estJson = true;
        try {
            JSON.parse(string);
        } catch (e) {
            estJson = false;
        }
        return estJson;
    };
})();