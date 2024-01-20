(function() {

    let numerique1 = new Numerique('Tom', 'Tucker', 300, 1, 'PDF', 6),
        bd1 = new BandeDessinee('Enki', 'Bilal', 50, 1, 'France');


    console.log(numerique1.pageActuelle);
    numerique1.pageActuelle = 20;
    console.log(numerique1.pageActuelle);
    console.log(numerique1.format);

    numerique1.enleveAppareil();

    console.log(numerique1.nombreAppareils);

    numerique1.avancePage();
    numerique1.avancePage();
    numerique1.avancePage();
    numerique1.avancePage();

    console.log(numerique1.pageActuelle);
    console.log(numerique1.decrire());


    console.log(bd1.pays);

    bd1.avancePage();
    bd1.avancePage();
    bd1.avancePage();
    bd1.avancePage();
    bd1.avancePage();
    bd1.avancePage();
    bd1.avancePage();
    bd1.avancePage();
    console.log(bd1.decrire());
    
})();