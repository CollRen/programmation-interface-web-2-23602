class Livre {
	#_auteurPrenom;
	#_auteurNom;
	#_nombrePages;
	#_pageActuelle;

	constructor(auteurPrenom, auteurNom, nombrePages, pageActuelle) {
		this.#_auteurPrenom = auteurPrenom;
        this.#_auteurNom = auteurNom;
		this.#_nombrePages = nombrePages;
        this.#_pageActuelle = pageActuelle || 1;
	}


	/**
	 * Retourne le nombre de pages restantes à lire pour ce livre
	 * @returns 
	 */
    #calculeNombrePagesRestantes() {
        return parseInt(this.#_nombrePages) - parseInt(this.#_pageActuelle);
    }


	/**
	 * Retourne la description de ce livre
	 * @returns 
	 */
	decrire() {
		let nombrePagesRestantes = this.#calculeNombrePagesRestantes();
		return `Ce livre de ${this.auteur} a ${this.#_nombrePages} pages, je suis présentement rendu à la page ${this.#_pageActuelle}, il me reste donc ${nombrePagesRestantes} page${nombrePagesRestantes > 1 ? 's' : ''} à lire.`;
	}


	/**
	 * Incrémente de un la valeur de la page actuelle de ce livre
	 */
	avancePage() {                        
		if (this.#_pageActuelle < this.#_nombrePages) {
			this.#_pageActuelle++;
		}
	}


	/**
	 * Décrémente de un la valeur de la page actuelle de ce livre
	 */
	reculePage() {
		if (this.#_pageActuelle > 0) {
			this.#_pageActuelle--;
		}
	}


	/**
	 * GETTER (public)
	 * Retourne la valeur concaténée du prenom et du nom de l'auteur de ce livre
	 */
	get auteur() {
		return `${this.#_auteurPrenom} ${this.#_auteurNom}`;
	}


	/**
     * GETTER (public)
     * Retourne la page actuelle de ce livre
     */
    get pageActuelle() {
        return this.#_pageActuelle;
    }


	/**
	 * SETTER (public)
	 * Affecte la valeur reçue à la propriété this.#_pageActuelle
	 */
    set pageActuelle(nouvelleValeur) {
        this.#_pageActuelle = nouvelleValeur;
    }
}