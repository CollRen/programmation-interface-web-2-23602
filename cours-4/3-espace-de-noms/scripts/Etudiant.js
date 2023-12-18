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
	//console.log(M)
	let Personne = monEspaceDeNoms.Personne;							// Récupère l'objet Personne stocké dans l'objet monEspaceDeNoms
	//console.log(Personne);
	//console.log(Personne.prototype);


	/**
	 * Section publique
	 * Méthodes
	 */

	function afficheCours() {
		let chaineCours = this.creeListe(this.listeDeCours);
		return `Voici la liste de cours auxquels ${this.nomComplet} assiste :\n${chaineCours}`;
	}


	/**
	 * Section publique
	 * Création du constructeur Etudiant
	 */
	let	Etudiant = function(prenom, nom) {
		Personne.call(this, prenom, nom);					// La méthode call() réalise un appel à une fonction avec une valeur this donnée et des argumonEspaceDeNomsts fournis individuellemonEspaceDeNomst. (MDN)
	}

	/**
	 * Pour que Étudiant puisse hériter des méthodes définies dans le prototype de Personne,
	 * on doit affecter au prototype de Etudiant le prototype de Personne
	 * La méthode Object.create() crée un nouvel objet avec un prototype donné et des propriétés données. (MDN)
	 */
	Etudiant.prototype = Object.create(Personne.prototype);
	//console.log(Etudiant.prototype)

	// Ensemble des méthodes publiques dans le prototype de Etudiant ajoutées aux méthodes héritées de Personne
	Etudiant.prototype.afficheCours = afficheCours;


	// Crée et affecte la clé Etudiant de l'objet monEspaceDeNoms au constructeur Etudiant
	monEspaceDeNoms.Etudiant = Etudiant;

})(monEspaceDeNoms);