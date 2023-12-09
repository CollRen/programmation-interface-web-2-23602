/**
 * Vous avez une structure de data listant six états (fichier oEtats.js), vous devez :
 *      - injecter une tuile pour chacune des six villes au chargement de la page
 *      - injecter les informations associées à cette ville au survol d'une tuile
 *      - supprimer le noeud DOM précédement injecté à la sortie du curseur d'une tuile
 *      - faire la gestion des transitions d'arrivée et de sortie
 *      - notez que toutes les propriétés CSS nécessaires aux comportements demandés sont déjà définies
 */

//Lancer une instance de état

// Pour chaque etats on va lancer un etat (sans le "s").

window.addEventListener("DOMContentLoaded", function () {
  let elsEtats = document.querySelectorAll("[data-js-etats]");

  for (i = 0, l = elsEtats.length; i < l; i++) {
    // Différence entre argument (envoyer) et paramètre (Reçu lors de l'appel)
    /**
     * @description
     * @param elsEtats [data-js-etats] sélectionné au lancement de la page
     */
    new Etats(elsEtats[i]);
  }
});
