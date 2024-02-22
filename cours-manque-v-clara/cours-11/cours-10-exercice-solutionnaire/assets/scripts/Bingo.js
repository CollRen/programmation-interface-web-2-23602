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

        let xhr = new XMLHttpRequest();

        if (xhr) {

            xhr.open('GET', this._urlBingos);

            xhr.addEventListener('readystatechange', function() {

                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {

                        // Les données ont été reçues
                        //console.log(xhr.response);
                        this._bingos = JSON.parse(xhr.response);
                        //console.log(this._bingos.Bingo)

                        this.injecteOptionsVilles();
                        this._elSelectVilles.addEventListener('change', this.injecteBingos.bind(this));

                    } else if (xhr.status === 404) {
                        console.log('Le fichier appelé dans la méthode open() n\'existe pas.');
                    }
                } 
            }.bind(this));

            xhr.send();
        }
    }



    /**
     * Injecte les villes à l'intérieur de l'élément select
     */
    injecteOptionsVilles() {
        
        let licences = this._bingos.Bingo[4].Licences,
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
            licences = this._bingos.Bingo[4].Licences,
            dom = '';

        for (let i = 0, l = licences.length; i < l; i++) {
            if (licences[i].Lieux[0].Ville == ville) dom += `<li>${licences[i].Titulaire}</li>`;
        }

        this._elBingos.innerHTML = dom;
    }
}