(function () {
  let elSelectEquipe = document.querySelector("[data-js-select-equipes]"),
    elJoueurs = document.querySelector("[data-js-joueurs]");

  /**
   * Initialise le gestionnaire d'événement
   */
  elSelectEquipe.addEventListener("change", function () {
    if (elSelectEquipe.value != 0) appelFetch();
  });

  /**
   * Fonction asynchrone pour récupérer les joueurs de l'équipe spécifiée
   */
  function appelFetch() {
    let idEquipe = elSelectEquipe.value;

    fetch(`requetes/requeteFetch.php?idEquipe=${idEquipe}`)
      .then(function (reponse) {
        if (reponse.ok) return reponse.json();
        else throw new Error("La réponse != ok");
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (erreur) {
        console.log(erreur.message);
      });
  }
})();
