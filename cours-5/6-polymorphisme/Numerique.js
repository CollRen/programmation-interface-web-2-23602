class Numerique extends Livre {
    #_format;
    #_nombreAppareils;

    constructor(auteurPrenom, auteurNom, nombrePages, pageActuelle, format, nombreAppareils) {
        super(auteurPrenom, auteurNom, nombrePages, pageActuelle);

        this.#_format = format;
        this.#_nombreAppareils = nombreAppareils;
    }


    /**
	 * Retourne la description de ce livre numérique
	 * @returns 
	 */
    decrire() {
        return `Ce livre de ${this.auteur} sur format ${this.#_format} a ${this.nombrePages} pages, je suis présentement rendu à la page ${this.pageActuelle}. Je peux lire ce livre numérique sur encore ${this.#_nombreAppareils} appareil${this.#_nombreAppareils > 1 ? 's' : ''}.`;
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