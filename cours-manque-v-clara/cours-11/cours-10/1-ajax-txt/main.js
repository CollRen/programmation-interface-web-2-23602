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

		//xhr - xml http request / abre uma conversa com o servidor
		let xhr = new XMLHttpRequest();

		if(xhr){
			xhr.open('GET', `txt/${elSelect.value}.txt`);

			xhr.addEventListener("readystatechange", function(){

				if(xhr.readyState == 4) {
					if(xhr.status == 200) {
						console.log(xhr.response);
						console.log(xhr.responseText);
						console.log(xhr.responseXML);
						console.log(xhr.responseURL);
						console.log(xhr.responseType);

						elReponse.innerHTML = `<p>${xhr.response}</p>`

					} else if(xhr.status == 404) {
						console.log("Le fichier n'existe pas");
					} else {
						console.log("Deu ruim");
					}
				}
			});

			xhr.send();
		}

	};
})();