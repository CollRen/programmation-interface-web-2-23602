let Calculatrice = (function () {

    /**
     * Section privée
     */
    // Méthodes privées

    function additionne(nb1, nb2) {
        return nb1 + nb2;
    };

    function soustraire(nb1, nb2) {
        return nb1 - nb2;
    };

    function multiplie(nb1, nb2) {
        return nb1 * nb2;
    };

    function divise(nb1, nb2) {
        return nb1 / nb2;
    };


    /**
     * Section publique
     */
    // Méthodes publiques

    /**
     * Initialise les comportements
     */
    function init() {
        this.elBtn.addEventListener('click', function (e) {
            e.preventDefault();
            this.calcule();
        }.bind(this))
    };


    /**
     * Injecte le résultat de l'opération mathématique
     */
    function calcule() {
        let nb1 = parseInt(this.elNb1.value),
            nb2 = parseInt(this.elNb2.value),
            operateur = this.elSelect.value,
            msg;

        if (!isNaN(nb1) && !isNaN(nb2)) {
            let resultat;
            if (operateur == 'addition') resultat = additionne(nb1, nb2);
            if (operateur == 'soustraction') resultat = soustraire(nb1, nb2);
            if (operateur == 'multiplication') resultat = multiplie(nb1, nb2);
            if (operateur == 'division') resultat = divise(nb1, nb2);
            msg = `<p>Le résultat de l'équation est : <span>${resultat}</span></p>`;
        } else {
            msg = '<p>Les entrées saisies ne sont pas valides.</p>';
        }

        this.elResultat.innerHTML = msg;
    }


    // Constructeur
    let Calculatrice = function (elCalculatrice) {
        this.elForm = elCalculatrice.querySelector('form');
        this.elNb1 = this.elForm.nb1;
        this.elNb2 = this.elForm.nb2;
        this.elSelect = this.elForm.querySelector('select');
        this.elBtn = this.elForm.querySelector('button');
        this.elResultat = elCalculatrice.querySelector('[data-js-resultat]');

        this.init();
    };


    // Prototype
    Calculatrice.prototype = {
        // Méthodes publiques
        init,
        calcule
    };


    // Retourne l'objet avec son prototype
    return Calculatrice;
})();