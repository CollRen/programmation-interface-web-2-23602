window.addEventListener('DOMContentLoaded', function() {

    let elsCompteur = document.querySelectorAll('[data-js-compteur]');

    for (let i = 0, l = elsCompteur.length; i < l; i++) {
        new Compteur(elsCompteur[i]);     
    }

});