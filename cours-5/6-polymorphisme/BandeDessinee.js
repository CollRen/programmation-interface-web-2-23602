class BandeDessinee extends Livre {
    #_pays;

    constructor(auteurPrenom, auteurNom, nombrePages, pageActuelle, pays) {
        super(auteurPrenom, auteurNom, nombrePages, pageActuelle);

        this.#_pays = pays;
    }


    /**
	 * Retourne la description de cette bande dessinée
	 * @returns 
	 */
    decrire() {
		return `Ce${this.#_pays == 'Japon' ? ' manga' : 'tte bande dessinée'} de ${this.auteur} a ${this.nombrePages}, je suis présentement rendu à la page ${this.pageActuelle}.`;
	}


    /**
     * GETTER (public)
     * Retourne le pays d'origine de l'auteur de cette bande dessinée
     */
    get pays() {
        return this.#_pays;
    }
}