class Nombre {
    #_nb;


    constructor() {
        this.#_nb;
        this.afficheDetailNb = this.afficheDetailNb.bind(this);     // Lie (bind) le contexte this à la méthode afficheDetailNb exportée
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
    afficheDetailNb(nb) {
        this.#_nb = nb;
        let msg = this.#estPair();
        msg += ` ${this.#estPremier()}`;
        msg += ` ${this.#carre()}`;

        console.log(msg);
    }
}

export const { afficheDetailNb } = new Nombre();