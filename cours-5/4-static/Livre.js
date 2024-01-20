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
	 * Retourne la description d'un livre dont les informations sont reçues en paramètre
	 * @returns 
	 */
    static decrire(auteurPrenom, auteurNom, nombrePages, pageActuelle) {
        //return `Ce livre de ${this.#concateneNom()} a ${this.#_nombrePages} pages, je suis présentement rendu à la page ${this.#_pageActuelle}.`;
        return `Ce livre de ${auteurPrenom} ${auteurNom} a ${nombrePages} pages, je suis présentement rendu à la page ${pageActuelle}.`;
    }


    /**
	 * Retourne la valeur concaténée du prenom et du nom de l'auteur de ce livre
	 * @returns 
	 */
    #concateneNom() {
        return `${this.#_auteurPrenom} ${this.#_auteurNom}`;
    }
}