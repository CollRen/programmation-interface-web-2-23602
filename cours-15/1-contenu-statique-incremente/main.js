(function() {

	let elTemplateLi = document.querySelector('[data-template-list-item]'),
		elBtn = document.querySelector('[data-js-btn]'),
		elListe = document.querySelector('[data-js-liste]'),
		compteur = 0;

		console.log(elTemplateLi);


	elBtn.addEventListener('click', ajouteListItem);	


	/**
	 * Injecte l'élément <li> incrémenté de 1 dans la liste
	 */
	function ajouteListItem() {

		let elCloneTemplate = elTemplateLi.cloneNode(true);

		elCloneTemplate.innerHTML = elCloneTemplate.innerHTML.replace('{{increment}}', ++compteur);

		let elNouveauLi = document.importNode(elCloneTemplate.content, true)

		console.log(elNouveauLi);

		elListe.append(elNouveauLi);  // Ajouter un noeud

		/**
		 * Dinamiser le contenu
		 * Comme Mustache et Twig
		 * Identifier un élément sur lequel je veux assigner une valeur
		 */
		




	
	




	}
})();