import { vins } from '../data/vins.js';


class VinService {
    #_elMain;

    constructor() {
        this.#_elMain = document.querySelector('main');

        this.afficheListeVins = this.afficheListeVins.bind(this);
        this.afficheCepages = this.afficheCepages.bind(this);
    }


    /**
     * Injecte la liste des vins
     */
    afficheListeVins() {

        let dom = '';

        for (let i = 0, l = vins.length; i < l; i++) {
            dom += `<a href="#!/vins/${i}" data-js-id="0">${vins[i].region}</a>`;
        }
        this.#_elMain.innerHTML = dom;
    };


    /**
     * Injecte les informations associées à l'index reçu en paramètre
     * @param {String} index
     */
    afficheCepages(index) {

        let dom = '';

        if (index < vins.length) {
            dom = `<h3>Les cépages de la région ${vins[index].region} sont :</h3>
                    <ul>`;

            //console.log(vins[index].cepages.length);
            for (let i = 0, l = vins[index].cepages.length; i < l; i++) {
                dom += `<li>${vins[index].cepages[i]}</li>`;
            }
            dom += '</ul>';

            this.#_elMain.innerHTML = dom;
        }
    };
}

export const { afficheListeVins, afficheCepages } = new VinService();