window.addEventListener('DOMContentLoaded', function() {

    let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;'


    /**
     * Contextes de l'objet this
     */

    console.log('%cContextes de l\'objet this', css);

    // Contexte global

    console.log(this);
    console.log(this === window);       // => true

    this.test = 'test';
    console.log(window.test);           // => 'test'
    console.log(test);                  // => 'test'



    // Fonction simple

    function retourneThis() {
        return this;
    }
    console.log(retourneThis());



    // Gestionnaire d'événement

    let btn = document.querySelector('[data-js-btn]');

    btn.addEventListener('click', function() {
        console.log(this);
    });



    // Objet littéral

    let objet = {
        retourneThis: function() {
            return this;
        }
    };
    console.log(objet.retourneThis())



    // Objet instanciable

    let objetPrototype = function() {
        this.prop = 'value';
    }

    objetPrototype.prototype = {
        retourneThis: function () {
            return this;
        }
    }

    let instanceDeObjetPrototype = new objetPrototype();

    console.log(instanceDeObjetPrototype.retourneThis());



    /**
     * Méthode call()
     */

    console.log('%cMéthode call()', css);

    // Redéfinir les valeur à l'appel d'un objet

    function Personne(prenom, nom) {
        this.prenom = prenom;
        this.nom = nom;
    }

    Personne.prototype = {
        sePresente: function() {
            return `Nom : ${this.prenom} ${this.nom}`;
        }
    }

    let personne1 = new Personne('Tom', 'Tucker');
    console.log(personne1.sePresente()); 
    let personne2 = new Personne('Tricia', 'Takanawa');
    console.log(personne1.sePresente.call(personne2));      // Ici, nous définissons temporairement la valeur de cet objet comme étant l'objet personne2 à l'appel de la méthode sePresente.
    console.log(personne1.sePresente());



    // Chaîner le constructeur d’un objet (héritage)

    function Produit(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
    
    function Cellulaire(nom, prix, compagnie) {
        Produit.call(this, nom, prix);                      // La méthode call() réalise un appel à une fonction avec une valeur this donnée et des arguments fournis individuellement. (MDN)
        this.compagnie = compagnie || 'Apple';
    }
    
    let nexus = new Cellulaire('iPhone', 1000);
    console.log(nexus.nom);
    console.log(nexus.prix);
    console.log(nexus.compagnie);



    /**
     * Méthode apply()
     */

    console.log('%cMéthode apply()', css);

    let nombres = [5, 6, 2, 3, 7],
        max = Math.max.apply(this, nombres),
        min = Math.min.apply(window, nombres);

    console.log(max);
    console.log(min);



    /**
     * Méthode bind()
     */

    console.log('%cMéthode bind()', css);

    // Gestionnaire d'événement

    document.querySelector('[data-js-btn]').addEventListener('click', function () {
        console.log(this);
    }.bind(this));


    document.querySelector('[data-js-btn]').addEventListener('click', function () {
        console.log(this);
    }.bind(window));


    // Objet littéral

    this.x = 9;                                             // Par défaut, pour un navigateur, this est l'objet window.
    let objetX = {
        x: 99,
        getX: function() { 
            return this.x; 
        }
    };

    console.log(objetX.getX());                             // => 99

    let getX = objetX.getX;                                 // Crée la variable getX, affecte la méthode getX à la variable mais sans l'appeler (on change le contexte d'appel).
    console.log(getX());                                    // => 9  |  car this fait référence au contexte d'appel, ici l'objet global
            
    let boundGetX = getX.bind(objetX);                      // On crée une nouvelle fonction à laquelle on lie objetX en tant que 'this'.
    console.log(boundGetX());                               // => 99



    /**
     * Fonctions fléchées
     */

    console.log('%cFonctions fléchées', css);


    // Gestionnaire d'événement

    btn.addEventListener('click', () => {
        console.log(this);
    });


    // Objet littéral

    let objetMethodeFlechee = {
        retourneThis: () => {
            return this;
        }
    };
    console.log(objetMethodeFlechee.retourneThis());

});