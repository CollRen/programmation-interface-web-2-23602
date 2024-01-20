(function() {

    let livre1 = new Livre('Tom', 'Tucker', 300, 1);


    console.log(livre1.pageRestantes);

    livre1.avancePage();
    livre1.avancePage();
    livre1.avancePage();
    livre1.avancePage();
    livre1.avancePage();

    console.log(livre1.pageRestantes);


    livre1.pageActuelle = 50;
    console.log(livre1.pageRestantes);
    console.log(livre1.decrire());

    livre1.pageActuelle = 299;
    console.log(livre1.pageRestantes);
    console.log(livre1.decrire());

})();