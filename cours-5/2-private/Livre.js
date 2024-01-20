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
	 * Retourne la valeur concaténée du prenom et du nom de l'auteur de ce livre
	 * @returns 
	 */
	#concateneNom() {
        return `${this.#_auteurPrenom} ${this.#_auteurNom}`;
    }


	/**
	 * Retourne la description de ce livre
	 * @returns 
	 */
	decrire() {
		return `Ce livre de ${this.#concateneNom()} a ${this.#_nombrePages} pages, je suis présentement rendu à la page ${this.#_pageActuelle}.`;
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
}