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
            appelFetch();
        //}
    });



    /**
	 * Fonction asynchrone pour porter les informations à la base de données
	 */
    function appelFetch() {





	};
})();