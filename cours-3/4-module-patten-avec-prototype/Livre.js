let Livre = (function() {

    /**
     * Section privée
     */
    // Variables privées
    let nombrePage = 300,
        pageActuelle = 1,
        auteurPrenom = 'Tom',
        auteurNom = 'Tucker';
    

    // Méthodes privées
    function concateneNom(prenom, nom) {
        return `${prenom} ${nom}`;
    };


    /**
     * Section publique
     */
    // Méthodes publiques
    function decrire() {    
        return `Ce livre de ${this.auteur} a ${this.nombrePage} pages, je suis présentement rendu à la page ${this.pageActuelle}.`;
    };
    

    // Constructeur
    let Livre = function(valNbPage, valPageActuelle, valAuteurPrenom, valAuteurNom) {
        this.nombrePage = valNbPage || nombrePage;
        this.pageActuelle = valPageActuelle || pageActuelle;

        if (valAuteurPrenom && valAuteurNom) this.auteur = concateneNom(valAuteurPrenom, valAuteurNom);
        else this.auteur = concateneNom(auteurPrenom, auteurNom);
    };
    
    
    // Prototype
    Livre.prototype = {

        // Méthodes publiques
        avancePage: function() {                        
            if (this.pageActuelle < this.nombrePage) {
                this.pageActuelle++;
            }
        },
        reculePage: function() {
            if (this.pageActuelle > 0) {
                this.pageActuelle--;
            }
        },

        // Alias publique
        decrire: decrire
    };


    // Retourne l'objet instanciable avec son prototype
    return Livre;
})();