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
    appelAJAX();
    //}
  });

  /**
   * Fonction asynchrone pour porter les informations à la base de données
   */
  function appelAJAX() {
    let xhr = new XMLHttpRequest();

    if (xhr) {
      let data = {
        usager: elUsager.value,
        password: elMotDePasse.value,
        nom: elNom.value,
        prenom: elPrenom.value,
      };

      xhr.open("POST", "requetes/requeteAJAX.php");
      xhr.setRequestHeader("Content_type", "application/json");

      xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            console.log(xhr.response);
          }
        }
      });

      xhr.send(JSON.stringify(data));
    }
  }
})();
