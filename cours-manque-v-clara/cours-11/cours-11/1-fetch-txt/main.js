(function() {

	let elSelect = document.querySelector('[data-js-select]'),
		elReponse = document.querySelector('[data-js-reponse]');



	/**
	 * Initialise le gestionnaire d'événement
	 */
	elSelect.addEventListener('change', function() { 
		if (elSelect.value != 0) appelFetch();
	});



	/**
	 * Fonction asynchrone pour récupérer la valeur du fichier .txt spécifié
	 */
	function appelFetch() {

		fetch(`txt/${elSelect.value}.txt`)
			.then(function (reponse) {

				console.log(reponse);
				console.log(reponse.type);
				console.log(reponse.status);
				console.log(reponse.statusText);
				console.log(reponse.ok);

			if(reponse.ok) return reponse.text();
			else throw new Error("La réponse n'est pas ok");
			})
			.then(function (data) {
				console.log(data)
			})
			.catch(function (erreur){
				console.log(erreur.message);
			})
	};
})();