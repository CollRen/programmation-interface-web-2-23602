(function () {
  let elSelect = document.querySelector("[data-js-select]"),
    elReponse = document.querySelector("[data-j-reponse]");

  /**
   * Initialise le gestionnaire d'événement
   */
  elSelect.addEventListener("change", function () {
    if (elSelect.value != 0) appelFetch();
  });

  /**
   * Fonction asynchrone pour récupérer la valeur du fichier .txt spécifié
   */
  function appelFetch() {
    fetch(`txt/${elSelect.value}.txt`)
      .then(function (reponse) {
        // console.log(reponse);
        // console.log(reponse.type);
        // console.log(reponse.status);
        // console.log(reponse.statusText);
        // console.log(reponse.ok);

        if (reponse.ok) return reponse.text();
        else throw new Error("La reponse n'est pas ok");

        return reponse.text();
      })
      .then(function (data) {
        console.log(data);
        elReponse.innerHTML = `<p>${data}</p>`;
      })
      .catch(function (erreur) {
        console.erreur(erreur.message);
      });
  }
})();
