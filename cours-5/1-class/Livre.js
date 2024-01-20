/*
// Objet littéral
let livre = {
    auteurPrenom: 'Tom',
    auteurNom: 'Tucker',
    nombrePages: 300,
    pageActuelle: 1
}

// Objet instanciable (prototype)
function Livre(valAuteurPrenom, valAuteurNom, valNbPage, valPageActuelle) {
    this.auteurPrenom = valAuteurPrenom;
    this.auteurNom = valAuteurNom;
    this.nombrePages = valNbPage;
    this.pageActuelle = valPageActuelle;
};

Livre.prototype = {
	concateneNom: function() {
        return `${this.auteurPrenom} ${this.auteurNom}`;
    },
	decrire: function() {
		return `Ce livre de ${this.concateneNom()} a ${this.nombrePages} pages, je suis présentement rendu à la page ${this.pageActuelle}.`;
	},
	avancePage: function() {                        
		if (this.pageActuelle < this.nombrePages) {
			this.pageActuelle++;
		}
	},
	reculePage: function() {
		if (this.pageActuelle > 0) {
			this.pageActuelle--;
		}
	}
}
*/


class Livre {
	constructor(auteurPrenom, auteurNom, nombrePages, pageActuelle) {
		this._auteurPrenom = auteurPrenom;
        this._auteurNom = auteurNom;
		this._nombrePages = nombrePages;
        this._pageActuelle = pageActuelle || 1;
	}


	/**
	 * Retourne la valeur concaténée du prenom et du nom de l'auteur de ce livre
	 * @returns 
	 */
	concateneNom() {
        return `${this._auteurPrenom} ${this._auteurNom}`;
    }


	/**
	 * Retourne la description de ce livre
	 * @returns 
	 */
	decrire() {
		return `Ce livre de ${this.concateneNom()} a ${this._nombrePages} pages, je suis présentement rendu à la page ${this._pageActuelle}.`;
	}


	/**
	 * Incrémente de un la valeur de la page actuelle de ce livre
	 */
	avancePage() {                        
		if (this._pageActuelle < this._nombrePages) {
			this._pageActuelle++;
		}
	}


	/**
	 * Décrémente de un la valeur de la page actuelle de ce livre
	 */
	reculePage() {
		if (this._pageActuelle > 0) {
			this._pageActuelle--;
		}
	}
}