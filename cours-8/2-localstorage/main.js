(function() {

    /**
     * Ajouter un localStorage
     */

    let localMaPremiereCle = localStorage.getItem('maPremiereCle'),
        localMaSecondeCle = localStorage.getItem('maSecondeCle');

    console.log(localMaPremiereCle);
    console.log(localMaSecondeCle);

    
    // Vérifie si le localStorage localMaPremiereCle a été défini => la valeur null est un falsy
    //if (localMaPremiereCle == null) {
    if (!localMaPremiereCle) {

        console.log('J\'initialise le localStorage maPremiereCle');

        // Enregistrer des données dans localStorage
        localStorage.setItem('maPremiereCle', 'data enregistrée sur le localStorage maPremiereCle');

        // Place la valeur du localStorage dans une variable
        localMaPremiereCle = localStorage.getItem('maPremiereCle');
        console.log(localMaPremiereCle);
    }
    
    console.log(localStorage.getItem('maPremiereCle'));
    console.log(localMaPremiereCle);


    // Vérifie si le localStorage localMaSecondeCle a été défini => la valeur null est un falsy
    if (!localMaSecondeCle) {

        console.log('J\'initialise le localStorage maSecondeCle');

        let objet = {
            prenom: 'Tom',
            nom: 'Tucker'
        };
        
        // Enregistrer des données dans localStorage
        localStorage.setItem('maSecondeCle', JSON.stringify(objet));

        // Place la valeur du localStorage dans une variable
        localMaSecondeCle = localStorage.getItem('maSecondeCle');
        console.log(localMaSecondeCle);
    }

    console.log(localMaSecondeCle);
    
    let data = JSON.parse(localStorage.maSecondeCle);
    console.log(data.prenom);
    console.log(data.nom);



    /**
     * Supprimer des données d'un localStorage (remove)
     */

    let elRemoves = document.querySelectorAll('[data-js-remove]');

    for (let i = 0, l = elRemoves.length; i < l; i++) {
        
        elRemoves[i].addEventListener('click', function() {

            let dataset = elRemoves[i].dataset.jsRemove;
            
            localStorage.removeItem(dataset);
            console.log(`localStorage ${dataset} : ${localStorage.getItem(dataset)}`);
        });
    }


    /**
     * Supprimer toutes les données de localStorage (clear)
     */

    let elClear = document.querySelector('[data-js-clear]');

    elClear.addEventListener('click', function() {
        
        localStorage.clear();
        console.log(localStorage.getItem('maPremiereCle'));
        console.log(localStorage.getItem('maSecondeCle'));
    });
})();