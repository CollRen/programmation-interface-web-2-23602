(function () {
  let elSelect = document.querySelector("[data-js-select]"),
    elReponse = document.querySelector("[data-js-reponse]");

  /**
   * Initialise le gestionnaire d'événement
   */
  elSelect.addEventListener("change", function () {
    if (elSelect.value != 0) appelAJAX();
  });

  /**
   * Fonction asynchrone pour récupérer la valeur du fichier .txt spécifié
   */
  function appelAJAX() {
    let xhr = new XMLHttpRequest();
    if (xhr) {
      xhr.open("GET", `txt/${elSelect.value}.txt`);

      xhr.addEventListener("readystatechange", function () {
        // console.log(xhr.readyState);
        if (xhr.readyState == 4) {
          //4 etat done
          if (xhr.status == 200) {
            console.log(xhr.response);
            // console.log(xhr.responseURL);
            // console.log(xhr.responseXML);
            // console.log(xhr.responseType);
            // console.log(xhr.responseText);

			elReponse.innerHTML = `<p>${xhr.response}</p>`
			


          } else if (xhr.status == 404) {
            console.log("le fichier n'existe pas");
          } else {
            console.log("problème à verifier");
          }
        }
      });

      xhr.send();
    }
  }
})();
