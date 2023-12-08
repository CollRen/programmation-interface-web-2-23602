/**
 * Prototypes Objet
 */

// Constructeur de l'objet prototype Livre
function Livre(valNbPage, valPageActuelle, valAuteurPrenom, valAuteurNom) {
    this.nombrePage = valNbPage;
    this.pageActuelle = valPageActuelle;
    this.auteurPrenom = valAuteurPrenom;
    this.auteurNom = valAuteurNom;
};


// Syntaxe 1
// Définir des méthodes
Livre.prototype = {
    avancePage: function() {
        if (this.pageActuelle < this.nombrePage) {
            this.pageActuelle++;
        }
    },
    reculePage: function() {
        if (this.pageActuelle > 0) {
            this.pageActuelle--;
        }
    }
}

// Syntaxe 2
// Ajouter des méthodes
Livre.prototype.decrire = function () {
    return `Ce livre de ${this.auteurPrenom + ' ' + this.auteurNom} a ${this.nombrePage} pages, je suis présentement rendu à la page ${this.pageActuelle}.`;
};