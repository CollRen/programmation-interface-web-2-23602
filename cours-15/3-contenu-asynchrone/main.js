(function() {

	let elSelect = document.querySelector('[data-js-usagers]'),
        elMain = document.querySelector('main'),
        elTemplateUsager = document.querySelector('[data-template-usager]');

        
    elSelect.addEventListener('change', function() {
        if (elSelect.value != 0) recupereUsager(elSelect.value);
	});


    /**
     * Récupère les informations de l'usager sélectionné
     * @param {String} id 
     */
    function recupereUsager(id) {





    }


    /**
     * Injecte les informations de l'usager
     * @param {Object} data 
     */
    function afficheUsager(data) {





    }
})();