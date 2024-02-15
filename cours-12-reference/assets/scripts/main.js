(function() {

    /**
     * Récupère les éléments du DOM
     */
    let elLigue = document.querySelector('[data-js-ligue]'),
        elForm = elLigue.querySelector('[data-js-form]'),
        elSelectEquipes = elForm.querySelector('[data-js-equipes]'),
        elInputPrenom = elForm.prenom,
        elInputNom = elForm.nom,
        elInputNumero = elForm.numero,
        elBtn = elForm.querySelector('button'),
        elJoueurs = elLigue.querySelector('[data-js-joueurs] ul'),
        optionsRequete = { 
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        };


    /**
     * Initialise les gestionnaires d'événements
     */
    elSelectEquipes.addEventListener('change', afficheJoueurs);


    elBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (elSelectEquipes.value != 0) ajouteJoueur();
    });


    /**
     * Appel asynchrone pour récupérer les joueurs d'une équipe
     */
    function afficheJoueurs() {
        let data = {	
            idEquipe: encodeURIComponent(elSelectEquipes.value)
        };

        appelFetch('requetes/requeteJoueurs.php', data)
            .then(function(joueurs) {
                //console.log(joueurs);

                elJoueurs.innerHTML = '';

                joueurs.forEach(function(joueur) {
                    let dom = `<li data-js-joueur="${joueur.id}">${joueur.numero} : ${joueur.prenom} ${joueur.nomFamille}</li>`;
                    elJoueurs.insertAdjacentHTML('beforeend', dom);

                    //new Player(elJoueurs.lastElementChild);
                });
            })
            .catch(function(erreur) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${erreur.message}`);
            });
    };


    /**
     * Appel asynchrone pour ajouter un joueur pour une équipe
     */
    function ajouteJoueur() {
        
        let data = {	
            idEquipe: encodeURIComponent(elSelectEquipes.value),
            prenom: encodeURIComponent(elInputPrenom.value),
            nomFamille: encodeURIComponent(elInputNom.value),
            numero: encodeURIComponent(elInputNumero.value)
        }

        //console.log(data)

        appelFetch('requetes/requeteAjout.php', data)
            .then(function(id) {
                //console.log(id);

                let domJoueur = `<li data-js-joueur="${id}">${data.numero} : ${data.prenom} ${data.nomFamille}</li>`;
                elJoueurs.insertAdjacentHTML('beforeend', domJoueur);
                
            })
            .catch(function(erreur) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${erreur.message}`);
            });
    }


    /**
     * Initialise l'appel fetch et retourne la réponse analysée selon le Content-Type de la réponse
     * @param {String} ressource 
     * @param {Object} data 
     * @returns 
     */
    async function appelFetch(ressource, data) {

        try {
            optionsRequete.body = JSON.stringify(data);
            let reponse = await fetch(ressource, optionsRequete);

            if (reponse.ok) {
                // ref : https://stackoverflow.com/questions/37121301/how-to-check-if-the-response-of-a-fetch-is-a-json-object-in-javascript
                //console.log(reponse.headers.get('content-type'));
                const contentType = reponse.headers.get('content-type');
                if (contentType && contentType.indexOf('application/json') !== -1) return reponse.json();
                else return reponse.text();
            } else throw new Error('La réponse n\'est pas OK');

        } catch (erreur) {
            return erreur.message;
        }
	};
})();