class EquipeService {
    #_elMain;

    constructor() {
        this.#_elMain = document.querySelector('main');
        this.getJoueursParEquipe = this.getJoueursParEquipe.bind(this);
    }


    /**
     * Récupère en asynchrone les joueurs associés à une équipe
     * @param {String} id 
     */
    getJoueursParEquipe(id) {

        /**
         * Gestion asynchrone
         */
        let encodedId = encodeURIComponent(id);

        fetch(`requetes/requeteAsync.php?idEquipe=${encodedId}`)
            .then(function(reponse) {
                if (reponse.ok) return reponse.json();
                else throw new Error('La réponse n\'est pas OK');
            })
            .then(function(data) {
                //console.log(data);

                if (data && data != 'Erreur query string') {
                    this.#afficheListeJoueurs(data);
                } else {
                    //console.log('Erreur query string');
                }
            }.bind(this))
            .catch (function(erreur) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${erreur.message}`);
            });
    }


    /**
     * Injecte dans le DOM la liste des joueurs associés à l'équipe
     * @param {*} data 
     */
    #afficheListeJoueurs(data) {
        //console.log(data);

        if (data) {
            let dom = '<div class="players-list" data-js-liste-joueurs>';

            if (data == 'Cette équipe n\'existe pas.') {
                dom += `<p>${data}</p>`;
            } else if (data[1] == 'Cette équipe n\'a aucun joueur.') {
                dom += `<h3>${data[0].nom} de ${data[0].quartier}</h3>
                        <p>${data[1]}</p>`;
            } else {
                dom += `<h3>${data[0].nom} de ${data[0].quartier}</h3>
                        <ul>`;
                for (let i = 0, l = data.length; i < l; i++) {
                    dom += `<li data-js-joueur="${data[i].joueurId}">${data[i].numero} : ${data[i].prenom} ${data[i].nomFamille}</li>`;
                }
                dom += '</ul>';
            }
            dom += '</div>';

            this.#_elMain.innerHTML = dom;
        }
    }
} 

export const { getJoueursParEquipe } = new EquipeService();