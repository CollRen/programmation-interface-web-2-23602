export default class Nombre {
//export default class {
//export class Nombre {

    #_nb;
    #_elDetail;


    constructor(nb) {
        this.#_nb = nb;
        this.#_elDetail = document.querySelector('[data-js-detail]');

        //console.log(this);
        this.init();
    }

    
    /**
     * Initialise les comportements
     */
    init() {
        this.afficheDetailNb();
    }
    

    /**
     * Retourne une chaîne annonçant si ce nombre est pair ou impair
     * @returns 
     */
    #estPair() {
        let msg = `Le chiffre ${this.#_nb} est ${this.#_nb % 2 == 0 ? 'pair' : 'impair'}.`;
        return msg;
    }


    /**
     * Retourne une chaîne annonçant si ce nombre est premier ou non
     * @returns 
     */
    #estPremier() {
        let estPremier = true;
    
        for (let i = 2, l = this.#_nb; i < l; i++) {
            if (this.#_nb % i === 0) estPremier = false;
        }
    
        let msg = `Le chiffre ${this.#_nb} ${estPremier ? 'est' : 'n\'est pas'} premier.`;
        return msg;
    }


    /**
     * Retourne une chaîne annonçant la valeur de ce nombre au carré
     * @returns 
     */
    #carre() {
        let msg = `Le carré de ${this.#_nb} est ${Math.pow(this.#_nb, 2)}.`;
        return msg;
    }


    /**
     * Construit les informations de ce nombre à afficher
     */
    afficheDetailNb() {
        let msg = this.#estPair();
        msg += ` ${this.#estPremier()}`;
        msg += ` ${this.#carre()}`;

        console.log(msg);
        //this.#_elDetail.insertAdjacentHTML('beforeend', msg);
    }
}