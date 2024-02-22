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

		/**
		 * Les clés vont correspondrent avec le {{ }} de la page index
		 * ex { prenom }
		 */
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

		
		// console.log(elCloneTemplate);
/* 		elCloneTemplate.innerHTML = elCloneTemplate.innerHTML.replaceAll('{{prenom}}', infos.prenom);
		elCloneTemplate.innerHTML = elCloneTemplate.innerHTML.replace('{{nom}}', infos.nom);
		elCloneTemplate.innerHTML = elCloneTemplate.innerHTML.replace('{{courriel}}', infos.courriel); */


		let elCloneTemplate = elTemplateDetail.cloneNode(true);

		for (const cle in infos) {
			let regExp = new RegExp('{{' + cle + '}}','g');

			elCloneTemplate.innerHTML = elCloneTemplate.innerHTML.replace(regExp, infos[cle]);
			
			console.log(regExp);
			console.log(infos[cle]);
		}
		
		let elContent = document.importNode(elCloneTemplate.content, true)

		elDetail.append(elContent);

	}
})();