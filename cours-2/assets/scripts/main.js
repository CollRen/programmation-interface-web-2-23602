window.addEventListener("DOMContentLoaded", function () {
    (function () {
        let n = 0;
        n++;

        let css =
            "color: black; font-size: 14px; font-weight: bold; padding: 15px 0;";

        /**
         * Tout en JavaScript est un objet
         */
        let test64 = new Livre(200, 5, "René", "de Montigny");

        console.log(test64);

        n++;
        console.log(`${n}: `, "%cTout en JavaScript est un objet", css);

        // let test = 'test';                               // est l’équivalent de
        let chaine = new String("Chaine");

        n++;
        console.log(`${n}: `, chaine); // Objet nommé chaine, instance de l'objet String
        n++;
        console.log(`${n}: `, chaine.__proto__); // Détail de la propriété prototype de l'objet chaine hérité du propotype String -> Object
        n++;
        console.log(`${n}: `, chaine.length); // Propriété héritée du prototype de l'objet String
        n++;
        console.log(`${n}: `, chaine.toString()); // Méthode héritée du prototype de l'objet String
        n++;
        console.log(`${n}: `, chaine.valueOf()); // Méthode héritée du prototype de l'objet Object

        let aChaine = chaine.split(""); // Méthode du prototype String pour transformer la chaîne en tableau (instance de l'objet Array)
        n++;
        console.log(`${n}: `, aChaine); // Objet nommé aChaine, instance de l'objet Array
        n++;
        console.log(`${n}: `, aChaine.__proto__); // Détail de la propriété prototype de l'objet aChaine hérité du propotype Array -> Object
        n++;
        console.log(`${n}: `, aChaine.length); // Propriété héritée du prototype de l'objet Array
        n++;
        console.log(`${n}: `, aChaine.join("")); // Méthode héritée du prototype de l'objet Array
        n++;
        console.log(`${n}: `, aChaine.valueOf()); // Méthode héritée du prototype de l'objet Object
        n++;
        console.log(`${n}: `, aChaine.hasOwnProperty(0)); // Méthode héritée du prototype de l'objet Object (true - 'C')
        n++;
        console.log(`${n}: `, aChaine.hasOwnProperty(10)); // Méthode héritée du prototype de l'objet Object (false - undefined)

        /**
         * Rappel objets littéraux
         */

        n++;
        console.log(`${n}: `, "%cRappel objets littéraux", css);

        let livre = {
            nombrePage: 300,
            pageActuelle: 1,
            auteurPrenom: "Tom",
            auteurNom: "Tucker",
            avancePage: function () {
                if (this.pageActuelle < this.nombrePage) {
                    this.pageActuelle++;
                }
            },
            reculePage: function () {
                if (this.pageActuelle > 0) {
                    this.pageActuelle--;
                }
            },
        };

        livre.decrire = function () {
            return `Ce livre de ${this.auteurPrenom + " " + this.auteurNom} a ${
                this.nombrePage
            } pages, je suis présentement rendu à la page ${
                this.pageActuelle
            }.`;
        };

        n++;
        console.log(`${n}: `, livre); // Objet nommé livre, instance de l'objet Object
        n++;
        console.log(`${n}: `, livre.decrire()); // Méthode de l'objet livre
        n++;
        console.log(`${n}: `, livre.__proto__); // Détail de la propriété prototype de l'objet livre hérité du propotype Object
        n++;
        console.log(`${n}: `, livre.hasOwnProperty("nombrePage")); // Méthode héritée du prototype de l'objet Object (true - 300)

        /**
         * Objets prototypes
         */

        n++;
        console.log(`${n}: `, "%cObjets prototypes", css);

        // Instancier un prototype
        let livre1 = new Livre(300, 1, "Tom", "Tucker"),
            livre2 = new Livre(400, 1, "Tricia", "Takanawa");

        // Prototype
        n++;
        console.log(`${n}: `, Livre.prototype); // Détail de la propriété prototype de l'objet Livre -> Object
        n++;
        console.log(`${n}: `, livre1); // Objet nommé livre1, instance de l'objet Livre
        n++;
        console.log(`${n}: `, livre1.__proto__); // Détail de la propriété du prototype de l'objet livre1 hérité du propotype Livre -> Object
        n++;
        console.log(`${n}: `, livre2); // Objet nommé livre2, instance de l'objet Livre
        n++;
        console.log(`${n}: `, livre2.__proto__); // Détail de la propriété prototype de l'objet livre2 hérité du propotype Livre -> Object

        // Accéder aux propriétés d’une instance d’objet
        n++;
        console.log(`${n}: `, livre1.nombrePage); // Propriété de l'objet livre1
        n++;
        console.log(`${n}: `, livre1.pageActuelle); // Propriété de l'objet livre1
        n++;
        console.log(`${n}: `, livre1.auteurPrenom); // Propriété de l'objet livre1
        n++;
        console.log(`${n}: `, livre1.auteurNom); // Propriété de l'objet livre1

        n++;
        console.log(`${n}: `, livre2.nombrePage); // Propriété de l'objet livre2
        n++;
        console.log(`${n}: `, livre2.pageActuelle); // Propriété de l'objet livre2
        n++;
        console.log(`${n}: `, livre2.auteurPrenom); // Propriété de l'objet livre2
        n++;
        console.log(`${n}: `, livre2.auteurNom); // Propriété de l'objet livre2

        // Appeler des méthodes d’une instance d’objet
        n++;
        console.log(`${n}: `, livre1.decrire()); // Méthode héritée du prototype de l'objet Livre
        livre1.avancePage(); // Méthode héritée du prototype de l'objet Livre
        n++;
        console.log(`${n}: `, livre1.decrire()); // Méthode héritée du prototype de l'objet Livre

        n++;
        console.log(`${n}: `, livre2.decrire()); // Méthode héritée du prototype de l'objet Livre
        livre2.avancePage(); // Méthode héritée du prototype de l'objet Livre
        livre2.avancePage(); // Méthode héritée du prototype de l'objet Livre
        livre2.avancePage(); // Méthode héritée du prototype de l'objet Livre
        livre2.avancePage(); // Méthode héritée du prototype de l'objet Livre
        livre2.avancePage(); // Méthode héritée du prototype de l'objet Livre
        livre2.avancePage(); // Méthode héritée du prototype de l'objet Livre
        livre2.reculePage(); // Méthode héritée du prototype de l'objet Livre
        n++;
        console.log(`${n}: `, livre2.decrire()); // Méthode héritée du prototype de l'objet Livre

        n++;
        console.log(`${n}: `, livre1.hasOwnProperty("nombrePage")); // Méthode héritée du prototype de l'objet Object (true - 300)
        n++;
        console.log(`${n}: `, livre2.hasOwnProperty("nombrePage")); // Méthode héritée du prototype de l'objet Object (true - 400)

        // Ajouter une propriété directement sur un objet instancié
        livre1.editeur = "Quahog 5 Press";
        n++;
        console.log(`${n}: `, livre1.editeur); // Nouvelle propriété sur l'objet livre1
        n++;
        console.log(`${n}: `, livre1.decrire()); // Méthode héritée du prototype de l'objet Livre

        // Ajouter une méthode directement sur un objet instancié (polymorphisme)
        livre1.decrire = function () {
            return `Ce livre de ${this.auteurPrenom + " " + this.auteurNom}${
                this.editeur ? " publié chez l'éditeur " + this.editeur : ""
            } a ${
                this.nombrePage
            } pages, je suis présentement rendu à la page ${
                this.pageActuelle
            }.`;
        };

        n++;
        console.log(`${n}: `, livre1);
        n++;
        console.log(`${n}: `, livre1.decrire()); // Méthode decrire() ajoutée au contexte de l'objet livre1
        n++;
        console.log(`${n}: `, livre2.decrire()); // Méthode héritée du prototype de l'objet Livre
    })();
});
