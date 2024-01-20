(function() {

    let livre1 = new Livre('Tom', 'Tucker', 300, 1);


    console.log(livre1._auteurPrenom);
    console.log(livre1.decrire());
    livre1.avancePage();
    livre1.avancePage();
    livre1.avancePage();
    livre1.avancePage();
    livre1.avancePage();
    console.log(livre1.decrire());

})();