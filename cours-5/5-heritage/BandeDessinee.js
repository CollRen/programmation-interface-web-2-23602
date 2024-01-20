class BandeDessinee extends Livre {
    #_pays;

    constructor(auteurPrenom, auteurNom, nombrePages, pageActuelle, pays) {
        super(auteurPrenom, auteurNom, nombrePages, pageActuelle);

        this.#_pays = pays;
    }


    /**
     * GETTER (public)
     * Retourne le pays d'origine de l'auteur de cette bande dessinée
     */
    get pays() {
        return this.#_pays;
    }
}