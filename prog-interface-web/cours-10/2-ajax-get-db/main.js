(function () {
  let elSelectEquipe = document.querySelector("[data-js-select-equipes]"),
    elJoueurs = document.querySelector("[data-js-joueurs]");

  /**
   * Initialise le gestionnaire d'événement
   */
  elSelectEquipe.addEventListener("change", function () {
    if (elSelectEquipe.value != 0) appelAJAX();
  });

  /**
   * Fonction asynchrone pour récupérer les joueurs de l'équipe spécifiée
   */
  function appelAJAX() {
    let xhr = new XMLHttpRequest();

    if (xhr) {
        let idEquipe = encodeURIComponent(elSelectEquipe.value);
        xhr.open("GET", `requetes/requeteAJAX.php?idEquipe=${idEquipe}`);
  
        xhr.addEventListener("readystatechange", function () {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              // console.log(xhr.response);
              let joueurs = JSON.parse(xhr.response);
              dom ='<ul>';
  
              for (let i = 0; i < joueurs.length; i++) {
                  dom += `<li>#${joueurs[i].numero} : ${joueurs[i].prenom} ${joueurs[i].nomFamille}</li>`
              }
              dom += '</ul>';
  
              elJoueurs.innerHTML = dom;
  
              console.log(joueurs);
            } else {
              console.log("pas 200");
            }
          }
        });
  

      xhr.send();
    }
  }

  /**
   * Vérifie le format JSON
   * reférence : https://stackoverflow.com/questions/3710204/how-to-check-if-a-string-is-a-valid-json-string
   * @param {string} string
   * @returns
   */
  function estJson(string) {
    let estJson = true;
    try {
      JSON.parse(string);
    } catch (e) {
      estJson = false;
    }
    return estJson;
  }
})();
