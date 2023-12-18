/**
 * Vous avez une structure de data listant six états (fichier oEtats.js), vous devez :
 *      - injecter une tuile pour chacune des six villes au chargement de la page
 *      - injecter les informations associées à cette ville au survol d'une tuile
 *      - supprimer le noeud DOM précédement injecté à la sortie du curseur d'une tuile
 *      - faire la gestion des transitions d'arrivée et de sortie
 *      - notez que toutes les propriétés CSS nécessaires aux comportements demandés sont déjà définies
 */


window.addEventListener('DOMContentLoaded', function() {

    let elsEtats = document.querySelectorAll('[data-js-etats]');

    for (let i = 0, l = elsEtats.length; i < l; i++) {
        new Etats(elsEtats[i]);        
    }

});