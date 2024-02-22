/**
 * Du registre québécois des données publiques (https://www.donneesquebec.ca/recherche/dataset/?sort=metadata_created+desc&res_format=JSON),
 * injectez de façon asynchrone dans l'élément <select> les villes titulaires de bingo(s) de la catégorie 'MEDIA'
 * puis, à l'événement change du <select>, affichez les titulaires de licence de bingo de la ville sélectionnée. 
 * 
 * Fiche descriptive de la ressource : https://www.donneesquebec.ca/recherche/dataset/racj-licence-bingo/resource/d29b1267-ad6d-4ee7-a4e4-86fe1163d9fb
 * Licences de bingo en format JSON : https://www.donneesquebec.ca/recherche/dataset/2180052d-8382-4938-ae14-37f5e594d26f/resource/d29b1267-ad6d-4ee7-a4e4-86fe1163d9fb/download/racj-licence-bingo.json
 */


export default class Bingo {

    constructor(el) {
        this._el = el;
        this._elSelectVilles = this._el.querySelector('[data-js-select-villes]');
        this._elBingos = this._el.querySelector('[data-js-bingos]');

        this._urlBingos = 'https://www.donneesquebec.ca/recherche/dataset/2180052d-8382-4938-ae14-37f5e594d26f/resource/d29b1267-ad6d-4ee7-a4e4-86fe1163d9fb/download/racj-licence-bingo.json';
        this._bingos;

        this.init();
    }



    /**
     * Initialise les comportements
     */
    init() {
        this.getBingos();
    }



    /**
     * Récupère la structure de data des licences de bingo
     */
    getBingos() {
        fetch(this._urlBingos)
            .then(function(reponse) {
                if (reponse.ok) return reponse.json();
                else throw new Error('La réponse n\'est pas OK');
            })
            .then(function(data) {
                //console.log(data);
                this._bingos = data;
                //console.log(this._bingos.Bingo)

                this.injecteOptionsVilles();
                this._elSelectVilles.addEventListener('change', this.injecteBingos.bind(this));
            }.bind(this))
            .catch(function(erreur) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${erreur.message}`);
            });
    }



    /**
     * Injecte les villes à l'intérieur de l'élément select
     */
    injecteOptionsVilles() {
        
        let licences = this._bingos.Bingo[0].Licences,
            dom = '';

        //console.log(licences);

        for (let i = 0, l = licences.length; i < l; i++) {
            dom += `<option value="${licences[i].Lieux[0].Ville}">${licences[i].Lieux[0].Ville}</option>`;
        }

        this._elSelectVilles.innerHTML += dom;
    }   
    


    /**
     * Injecte la liste des licences de bingo pour la ville sélectionnée
     */
    injecteBingos(e) {
        
        let ville = e.target.closest('select').value,
            licences = this._bingos.Bingo[0].Licences,
            dom = '';

        for (let i = 0, l = licences.length; i < l; i++) {
            if (licences[i].Lieux[0].Ville == ville) dom += `<li>${licences[i].Titulaire}</li>`;
        }

        this._elBingos.innerHTML = dom;
    }
}