"use strict";
(function () {
    function init() {
        const elsCompteur = document.querySelectorAll("[data-js-compteur]");

        for (let i = 0, l = elsCompteur.length; i < l; i++) {
            new Compteur(elsCompteur[i]);
        }
    }

    init();
})();
