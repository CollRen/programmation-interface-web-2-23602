(function() {

    let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;'


    /**
     * Passage par valeur, type primitif
     */

    console.log('%cPassage par valeur, type primitif', css);


    function carre(chiffre) {
        chiffre = chiffre * chiffre;
        return chiffre;
    }

    let chiffre = 10,
        resultat = carre(chiffre);          // on passe la valeur de la variable chiffre à la fonction carre()
    console.log(chiffre);                   // => 10  |  si JavaScript utilisait le passage par référence, la valeur de la variable chiffre serait 100
    console.log(resultat);                  // => 100



    /**
     * La variable contenant un objet est une référence à cet objet 
     * et non l’objet lui-même
     */

    console.log('%cUn objet est une référence à cet objet', css);

     let livre1 = {
         nombrePage: 300,
         pageActuelle: 1,
         auteur: 'Tom Tucker',
     }
 
     let livre2 = livre1;
     livre2.auteur = 'Tricia Takanawa';
     console.log(livre1.auteur);



    /**
     * Passage par valeur, objet
     */

    console.log('%cPassage par valeur, objet', css);

    /**
     * En JavaScript, la variable contenant un objet (variable structurée) est une référence à cet objet et non l’objet lui-même.
     * Du coup,les variables ordinateur (argument) et machine (paramètre) font référence au même objet.
     */
    (function() {
        function ouvrir(machine) {              // La variable machine partage la référence au même objet que ordinateur.
            machine.estOuvert = true;
        }
        
        let ordinateur = {                      // La variable ordinateur est une référence à l'objet réel.
            estOuvert: false
        };

        ouvrir(ordinateur);
        console.log(ordinateur.estOuvert);      // => true
    })();



    /**
     * Toutefois, en JavaScript, tous les arguments de fonction sont toujours transmis par valeur.
     * Par exemple, lorsque l'on modifie réellement les propriétés de l'objet passé en paramètre, le changement sera limité au scope de la fonction.
     */
    (function() {
        function ouvrir(machine) {
            machine = {
                estOuvert: true                 // La valeur de la propriété estOuvert (variable primitive) est à true uniquement dans le scope de la fonction ouvrir().
            };
            console.log(machine);
        }
        
        let ordinateur = {
            estOuvert: false
        };
        
        ouvrir(ordinateur);
        console.log(ordinateur.estOuvert);      // => false
    })();


    (function() {
        function ouvrir(estOuvert) {
            estOuvert = true;                   // La valeur de la propriété estOuvert est à true uniquement dans le scope de la fonction ouvrir().
        }
        
        let ordinateur = {
            estOuvert: false
        };
        
        ouvrir(ordinateur.estOuvert);
        console.log(ordinateur.estOuvert);      // => false
    })();



    /**
     * En résumé
     */
    (function() {
        function changeValeurs(a, b, c) {
            a = a * 10;
            b.item = 'changé';
            c =  'changé';
        }

        let chiffre = 10;
        let objet1 = {
            item: 'inchangé'
        };
        let objet2 = {
            item: 'inchangé'
        };

        changeValeurs(chiffre, objet1, objet2.item);

        console.log(chiffre);                   // => 10  |  la variable chiffre a été passée par valeur et non référence
        console.log(objet1.item);               // => 'changé'  |  même si le passage d'un argument de fonction se fait toujours par valeur, mais les variable objet1 et le paramètre b partage la référence au même objet
        console.log(objet2.item);               // => 'inchangé'  |  la valeur de la propriété item de l'objet objet2 est une variable de type primitif
    })();

})();