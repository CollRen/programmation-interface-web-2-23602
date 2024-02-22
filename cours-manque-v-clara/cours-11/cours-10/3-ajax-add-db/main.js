(function() {

	let elFormWrapper =  document.querySelector('[data-js-form-wrapper]'),
		elForm = elFormWrapper.querySelector('[data-js-form]'),
		elUsager = elForm.usager,
		elMotDePasse = elForm['mot-de-passe'],
		elNom = elForm.nom,
		elPrenom = elForm.prenom,
		elBtn = elForm.querySelector('[data-js-btn]'),
		elNouvelUsager = elFormWrapper.querySelector('[data-js-nouvel-usager]');



	/**
	 * Initialise le gestionnaire d'événement
	 */
	elBtn.addEventListener('click', function(e) {
		e.preventDefault();

		// Validation FRONT
		//if (validation.estValide) {
			elForm.classList.add('envoye');
			elBtn.disabled = true;
			//ajouter loader
			appelAJAX();
		//}
	});



	/**
	 * Fonction asynchrone pour porter les informations à la base de données
	 */
	function appelAJAX() {

		let xhr = new XMLHttpRequest();

		let usager = encodeURIComponent(elUsager.value);
		let motDePasse = encodeURIComponent(elMotDePasse.value);
		let nom = encodeURIComponent(elNom.value);
		let prenom = encodeURIComponent(elPrenom.value);

		xhr.open("POST", 'requetes/requeteAJAX.php');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

		xhr.addEventListener('readystatechange', function(){
			if(xhr.readyState == 4) {
				if(xhr.status == 200) {
					let dom = `<div data-js-usager=${xhr.response}>
					<p>Username: ${decodeURIComponent(usager)}</p>
					<p>Name: ${decodeURIComponent(prenom)}</p>
					<p>Family name: ${decodeURIComponent(nom)}</p>
					</div>`;

					elNouvelUsager.innerHTML = dom;
				} else {
					console.log("ça va pas");
				}
			}
		})


		xhr.send(`usager=${usager}&password=${motDePasse}&nom=${nom}&prenom=${prenom}`);
	};
})();