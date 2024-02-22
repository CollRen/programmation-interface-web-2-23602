(function () {
  let elFormWrapper = document.querySelector("[data-js-form-wrapper]"),
    elForm = elFormWrapper.querySelector("[data-js-form]"),
    elUsager = elForm.usager,
    elMotDePasse = elForm["mot-de-passe"],
    elNom = elForm.nom,
    elPrenom = elForm.prenom,
    elBtn = elForm.querySelector("[data-js-btn]"),
    elNouvelUsager = elFormWrapper.querySelector("[data-js-nouvel-usager]");

  /**
   * Initialise le gestionnaire d'événement
   */
  elBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Validation FRONT
    //if (validation.estValide) {
    elForm.classList.add("envoye");
    elBtn.disabled = true;
    //ajouter loader
    appelFetch();
    //}
  });

  /**
   * Fonction asynchrone pour porter les informations à la base de données
   */
  function appelFetch() {
    let usager = elUsager.value,
      motDePass = elMotDePasse.value,
      nom = elNom.value,
      prenom = elPrenom.value;

    let oOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: `usager=${usager}&password=${motDePass}&nom=${nom}prenom=${prenom}`,
    };
    fetch("requetes/requeteFetch.php", oOptions)
      .then(function (reponse) {
        if (reponse.ok) return reponse.text();
        else throw new Error("Pas ok");
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function () {
        console.log(errur.message);
      });
  }
})();
