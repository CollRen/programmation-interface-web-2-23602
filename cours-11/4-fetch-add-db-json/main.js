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

        let usager = elUsager.value,
        motDePasse = elMotDePasse.value,
        nom = elNom.value,
        prenom = elPrenom.value;

    let oOptions = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        }, 
        body: JSON.jsonStringify(usager)
        
        
        // body de ma requête en format queryString (Tout ce qu'il y a après le '?' 
        //dans l'URL qui peut être récupéré via la superGlobal $_POST)
    }
    fetch('requetes/requeteFetch.php', oOptions) // param 1 Ce que j'attend comme ressource 2 obj qui va redéfinir ce que j'attend comme option
    // fetch :: J'ai la promesse de recevoir quelque chose
    
    /**
     * (method) Promise<Response>.then<never, never>(onfulfilled?: ((value: Response) => PromiseLike<never>) | null | 
     * undefined, onrejected?: ((reason: any) => PromiseLike<never>) | null | undefined): Promise<...>
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled — The callback to execute when the Promise is resolved.
     * @param onrejected — The callback to execute when the Promise is rejected.
     * @returns — A Promise for the completion of which ever callback is executed.
     */
        .then(function(reponse) {
            if(reponse.ok) return reponse.text();
            else throw new Error('Pas ok');
        })
        .then(function(data) {
            console.log(data);
            if(data!='Les champs ne sont pas tous saisis.') {
                elNouvelUsager.innerHTML = `<h3>Merci ${usager.usager}</h3>`;
            } else {
                elForm.classList.remove('envoye');
                //elBtn
            }
        })
        .catch(function(erreur) {
            console.log(erreur.message);
        })
        .finally(function() {
            
        })


	};



	};
})();