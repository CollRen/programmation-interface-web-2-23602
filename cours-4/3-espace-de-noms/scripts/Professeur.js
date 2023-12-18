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
		return `Voici la liste de cours que ${this.nomComplet} enseigne :\n${chaineCours}`;
	}

	function afficheHoraire() {
		let chaineHoraire = this.creeListe(this.listeHoraire);
		return `Voici l'horaire des cours que ${this.nomComplet} enseigne :\n${chaineHoraire}`;
	}
	
	function setHoraire(plageHoraire) {
		this.listeHoraire.push(plageHoraire);
	}

	function afficheCourriel() {
		let chaineCourriel = this.creeListe(this.listeCourriel);
		return `Les courriels de ${this.nomComplet} sont :\n${chaineCourriel}`;
	}

	function setCourriel(courriel) {
		this.listeCourriel.push(courriel);
	}


	/**
	 * Section publique
	 * Création du constructeur Professeur
	 */
	let Professeur = function(prenom, nom) {
		Personne.call(this, prenom, nom);				// La méthode call() réalise un appel à une fonction avec une valeur this donnée et des argumonEspaceDeNomsts fournis individuellemonEspaceDeNomst. (MDN)
        this.listeHoraire = [];
        this.listeCourriel = [];
	}
    
	/**
	 * Pour que Professeur puisse hériter des méthodes définies dans le prototype de Personne,
	 * on doit affecter au prototype de Professeur le prototype de Personne.
	 * La méthode Object.create() crée un nouvel objet avec un prototype donné et des propriétés données. (MDN)
	 */
	Professeur.prototype = Object.create(Personne.prototype);
	//console.log(Professeur.prototype)

	// Ensemble des méthodes publiques dans le prototype de Professeur ajoutées aux méthodes héritées de Personne
	Professeur.prototype.afficheCours = afficheCours;
	Professeur.prototype.afficheHoraire = afficheHoraire;
	Professeur.prototype.setHoraire = setHoraire;
	Professeur.prototype.afficheCourriel = afficheCourriel;
	Professeur.prototype.setCourriel = setCourriel;
        
	
	// Crée et affecte la clé Professeur de l'objet monEspaceDeNoms au constructeur Professeur
	monEspaceDeNoms.Professeur = Professeur;

})(monEspaceDeNoms);