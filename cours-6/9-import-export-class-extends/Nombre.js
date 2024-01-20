export default class Nombre {
    constructor(nb) {
        this._nb = nb;
    }


    /**
     * Retourne une chaîne annonçant si ce nombre est le carré d'un nombre entier
     * @returns 
     */
    estCarre() {
        let msg;

        if (Math.sqrt(this._nb) % 1 === 0) {
            msg = `Le nombre ${this._nb} est le carré de ${Math.sqrt(this._nb)}.`
        } else {
            msg = `La racine carrée de ${this._nb} n'est pas un entier.`
        }

        return msg;
    };


    /**
     * Retourne une chaîne annonçant la valeur de ce nombre au carré
     * @returns 
     */
    carre() {
        let msg = `Le carré de ${this._nb} est ${Math.pow(this._nb, 2)}.`;
        return msg;
    }
}