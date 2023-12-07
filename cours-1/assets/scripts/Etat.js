class Etat {
    constructor(el) {
        this._el = el;
        this._etat = this._el.dataset.jsEtat;
        this._detail = oEtats[this._etat];
        this.init();
    }

    /**
     * Initialise les comportements
     */
    init() {
        console.log(this._el);

        // this._el.addEventListener(
        //     "mouseover",
        //     function () {
        //         console.log(this._el);
        //     }.bind(this)
        // );
        this._el.addEventListener("mouseover", function () {
            console.log(this);

            // À faire: injecter le détail de l'etat (this.detail.***)
        });
        this._el.addEventListener(
            "mouseover",
            function () {
                console.log(this);
            }.bind(this)
        );
        this._el.addEventListener(
            "mouseout",
            function () {
                console.log(this._el);

                // À faire: supprimer le détail précédemment injecté (avec remove)
            }.bind(this)
        );
    }
}

// capitale: 'Paris',
// population: '67&thinsp;076&thinsp;000',
// superficie: '551&thinsp;695',
// langue: 'Français',
// monnaie: 'Euro',
// img: 'france'
// },: 'Paris',
// population: '67&thinsp;076&thinsp;000',
// superficie: '551&thinsp;695',
// langue: 'Français',
// monnaie: 'Euro',
// img: 'france'
// },
