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
		
		console.log(elForm);
		let xhr = new XMLHttpRequest ();

		if(xhr) {

			let data = {
				nomEquipe: elForm.nom.value,
				idEquipe: elForm.dataset.jsEquipe
			}

			xhr.open("PUT", "requetes/requeteAjax.php");
			xhr.setRequestHeader("Content-Type", "application/json");

			xhr.addEventListener("readystatechange", function(){
				if(xhr.readyState == 4) {
					if(xhr.status == 200) {

						let elLabel = elForm.querySelector('label');

						elLabel.textContent = `${data.nomEquipe} :`;

						elForm.reset();
					}
				}
			})

			xhr.send(JSON.stringify(data));

		}
	};
})();