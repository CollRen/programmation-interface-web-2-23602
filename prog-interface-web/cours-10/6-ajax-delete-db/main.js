(function () {
  let elEquipes = document.querySelector("[data-js-equipes]");

  /**
   * Initialise le gestionnaire d'événement
   */
  elEquipes.addEventListener("submit", function (e) {
    e.preventDefault();
    appelAJAX(e.target);
  });

  /**
   * Fonction asynchrone pour supprimer l'équipe spécifiée
   */
  function appelAJAX(elForm) {
    let xhr = new XMLHttpRequest();

    if (xhr) {
      let data = { idEquipe: elForm.dataset.jsEquipe };

      xhr.open("DELETE", "requetes/requeteAJAX.php");

      xhr.setRequestHeader("content-Type", "application/json");

      xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            if (xhr.reponse != "Erreur id") elForm.remove();
          }
        }
      });

      xhr.send(JSON.stringify(data));
    }
  }
})();
