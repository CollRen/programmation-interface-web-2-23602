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

        let usager = elUsager.value;
        let motdepasse = elMotDePasse.value;
        let nom = elNom.value;
        let prenom = elPrenom.value;
        
        let oOptions ={
            method: "POST",
            headers:{ "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"},
            body: `usager=${usager}&password=${motdepasse}&nom=${nom}&prenom=${prenom}`
        }

        fetch('requetes/requeteFetch.php', oOptions)
            .then(function(reponse){
                if(reponse.ok) return reponse.text();
                else throw new Error("pas ok");
            })
            .then(function(data){
                if(data != "Les champs ne sont pas tous saisis."){
                    elNouvelUsager.innerHTML = `<h3>Merci , ${usager}</h3>`
                }else{
                    elForm.classList.remove("envoye");
                    elBtn.disabled = false;
                }
                console.log(data);
            })
            .catch(function(erreur){
                console.log(erreur.message);
            })
            .finally(function(){
                //supprimer loader

            })
	};
})();