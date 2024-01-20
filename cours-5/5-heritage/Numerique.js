class Numerique extends Livre {
    #_format;
    #_nombreAppareils;

    constructor(auteurPrenom, auteurNom, nombrePages, pageActuelle, format, nombreAppareils) {
        super(auteurPrenom, auteurNom, nombrePages, pageActuelle);

        this.#_format = format;
        this.#_nombreAppareils = nombreAppareils;
    }


    /**
	 * Décrémente de un le nombre d'appareil sur lequel ce livre numérique peut être consulté
	 */
    enleveAppareil() {                        
		if (this.#_nombreAppareils > 0) {
			this.#_nombreAppareils--;
		}
	}


    /**
     * GETTER (public)
     * Retourne le format de ce livre numérique
     */
    get format() {
        return this.#_format;
    }


    /**
     * GETTER (public)
     * Retourne le nombre d'appareil sur lequel ce livre numérique peut être consulté
     */
    get nombreAppareils() {
        return this.#_nombreAppareils;
    }
}