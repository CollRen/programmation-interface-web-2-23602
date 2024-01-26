//Sélectionner html où instancier la ou les calculatrices
//Boucle pour instancier autant de calculatrice que le html en demande

let el = document.querySelectorAll("[data-js-calculatrice]");

el.forEach(function (element) {
    new Calculatrice(element);

    /* OU
    let inst_calculatrice = new Calculatrice(element);
    inst_calculatrice.init(); */
});
