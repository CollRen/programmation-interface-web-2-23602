/**
 * On définit notre espace de noms
 * qui est une variable globale qui permettra de protéger nos nomenclatures.
 * L'instruction suivante affecte la variable global monEspaceDeNoms à deux options 
 * (le || permet de distinguer les deux options) :
 * option 1 : si la variable globale monEspaceDeNoms existe déjà on récupère son contenu et on réaffecte la valeur de variable monEspaceDeNoms
 * option 2 : si la variable globale monEspaceDeNoms n'existe pas, on initialise un objet littéral vide {} 
 */

var monEspaceDeNoms = monEspaceDeNoms || {};

(function(monEspaceDeNoms) {

	/**
	 * Section publique
	 * Méthodes
	 */
	
    function sePresente() {
        return `Je m'appelle ${this.prenom} ${this.nom}`;
    }

    function creeListe(tableau) {
		let chaine = '';
		for (let i = 0, l = tableau.length; i < l; i++) {
			chaine += `${tableau[i]}\n`;
		}
		return chaine;
	}

	function ajouteCours(cours) {
		this.listeDeCours.push(cours);
	}


	/**
	 * Section publique
	 * Création du constructeur Personne
	 * Par convention, la première lettre du nom du constructeur est en majuscule
	 */
	let Personne = function(prenom, nom) {
		this.prenom = prenom;
		this.nom = nom;
		this.nomComplet = `${prenom} ${nom}`;
		this.listeDeCours = [];
	}	

	// Ensemble des méthodes publiques dans le prototype de Personne 
	Personne.prototype = {
        setPrenom: function(prenom) {
			this.prenom = prenom;
		},
		setNom: function(nom) {
			this.nom = nom;
		},
        sePresente: sePresente,
        creeListe: creeListe,
		ajouteCours: ajouteCours
	}	
	

	// Crée et affecte la clé Personne de l'objet monEspaceDeNoms au constructeur Personne
	monEspaceDeNoms.Personne = Personne;

})(monEspaceDeNoms);