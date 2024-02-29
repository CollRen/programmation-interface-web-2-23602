(function() {

	let elSelect = document.querySelector('[data-js-usagers]'),
        elMain = document.querySelector('main'),
        elTemplateUsager = document.querySelector('[data-template-usager]');

        
    elSelect.addEventListener('change', function() {
        if (elSelect.value != 0) recupereUsager(elSelect.value);
	});


    /**
     * Récupère les informations de l'usager sélectionné
     * @param {String} id 
     */
    function recupereUsager(id) {

        /**
         * return Une promette
         */
        fetch(`requetes/requeteAsync.php?idUsager=${id}`) // GET par défaut, si tu veux POST met fetch(POST) ***Je pense***
            .then(function(reponse) {
                if(reponse.ok) return reponse.json();  // Selon ce que tu reçois (.text .json . etc.)
                else throw new Error('pas ok');
            })
            .then(function(data){
                afficheUsager(data);
            }.bind(this))  // En orienté object
            .catch(function(erreur){
                console.log(erreur.message)
            })

    }


    /**
     * Injecte les informations de l'usager
     * @param {Object} data 
     */
    function afficheUsager(data) {

        let elCloneTemplate = elTemplateUsager.cloneNode(true);

		for (const cle in data) {
			let regExp = new RegExp('{{' + cle + '}}','g');

			elCloneTemplate.innerHTML = elCloneTemplate.innerHTML.replace(regExp, data[cle]);
			
			console.log(regExp);
			console.log(data[cle]);
		}
		
		let elContent = document.importNode(elCloneTemplate.content, true)

		elMain.append(elContent);



    }
})();