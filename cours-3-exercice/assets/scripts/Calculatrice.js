/* Voir la version du prof qui n'utilise pas le mot class mais bien let calculatrice = (function(){ETC.}()) */

class Calculatrice {
    constructor(lieuViaElementHtml) {
        this._el = lieuViaElementHtml;
        this.form = document.forms; // OK mais serait-il possible d'utiliser:
        this.testNamedForm = document.forms;

        console.log(this.testNamedForm);
        this._nb1 = this._el.querySelector("[data-js-nb1]");
        this._nb2 = this._el.querySelector("[data-js-nb2]");
        this._operateur = this.form[0][1];
        this._resultat = this._el.querySelector("[data-js-resultat]");
        this._calcul = this._el.querySelector("[data-js-calcul]");
        this.nbr1 = 0;
        this.nbr2 = 0;
        this.operateur = "addition";
        this.init();
    }

    init() {
        this._operateur.addEventListener(
            "change",
            function (e) {
                this.operateur = e.target.value;
            }.bind(this)
        );
        this._nb1.addEventListener("change", this.inputNbr1.bind(this));
        this._nb2.addEventListener("change", this.inputNbr2.bind(this));
        this._calcul.addEventListener("click", this.calcul.bind(this));
    }

    inputNbr1(nbr) {
        this.nbr1 = parseInt(nbr.target.value);
    }
    inputNbr2(nbr) {
        this.nbr2 = parseInt(nbr.target.value);
    }
    calcul() {
        switch (this.operateur) {
            case "soustraction":
                this._resultat.textContent = this.nbr1 - this.nbr2;
                break;
            case "multiplication":
                this._resultat.textContent = this.nbr1 * this.nbr2;
                break;
            case "addition":
                this._resultat.textContent = this.nbr1 + this.nbr2;
                break;
            case "division":
                this._resultat.textContent = this.nbr1 / this.nbr2;
                break;
        }
    }
}
