(function() {

	let elUsager = document.querySelector('[data-js-usager]'),
		elTemplateDetail = elUsager.querySelector('[data-template-detail]'),
		elFormulaire = elUsager.querySelector('[data-js-formulaire]'),
		elBtn = elFormulaire.querySelector('[data-js-btn]'),
		elDetail = elUsager.querySelector('[data-js-detail]');


	elBtn.addEventListener('click', function(e) { 
		e.preventDefault();

		// Validation FRONT
		//if (validation.estValide) {

			let infos = {
				prenom: elFormulaire.prenom.value,
				nom: elFormulaire.nom.value,
				courriel: elFormulaire.courriel.value
			}

			// ...appel asynchone

			elFormulaire.classList.add('sent');
			elBtn.disabled = true;
			afficheDetail(infos);
		//}
	});


	/**
	 * Injecte le détail du nouvel usager
	 * @param {Object} infos 
	 */
	function afficheDetail(infos) {





	}
})();