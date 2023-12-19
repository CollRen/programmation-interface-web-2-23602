"use strict";
(function () {
    function init() {
        const elsCompteur = document.querySelectorAll("[data-js-compteur]");

        for (let i = 0, l = elsCompteur.length; i < l; i++) {
            new Compteur(elsCompteur[i]);
        }

        /* ajoutTexte(texte); */

        /*         const textContentOutput = document.getElementById("textContentOutput");
    const innerTextOutput = document.getElementById("innerTextOutput");

    textContentOutput.value = source.textContent;
    innerTextOutput.innerHTML = source; */

        const h2 = document.getElementById("myH2");
        let html = "<p>My new paragraph.</p>";
        h2.insertAdjacentHTML("afterend", html);

        const blocHTML = document.querySelectorAll(".test");
        let source = "<p>test</p>";
        h2.insertAdjacentHTML("afterend", source);
    }

    init();
})();
