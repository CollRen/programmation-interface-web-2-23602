//class Compteur

class Compteur {
    constructor(el) {
        // créer le this.'noeud DOM';
        this._el = el;
        this._elOperations = this._el.querySelector("[data-js-operations]");
        this._elNombre = this._el.querySelector("[data-js-nombre]");
        this._nombre = parseFloat(this._elNombre.textContent); // testContent prend le contenu de ce qu'il y a à cet endroit

        this.init();
    }
    init() {
        this._elOperations.addEventListener(
            "click",
            function (pointerEv) {
                let action = pointerEv.target.dataset.jsAction;
                if (action) {
                    this.calculer(action);
                    this.afficher(action);
                }
            }.bind(this)
        );
    }

    calculer(operateur) {
        if (operateur == "moins") this._nombre--;
        if (operateur == "plus") this._nombre++;
    }

    afficher(action) {
        this._elNombre.classList.add(`${action}--transition`);
        this._elNombre.innerText = this._nombre;
    }
}

//Lopper dans les élément HTML, inclure un new compteur
//une fois que 1 compteur fonctionne les autres devraient fonctionner

/*

1
Vous avez cinq éléments DOM affichant un nombre, au clic d’un des deux 
boutons à sa droite, faites le calcul (plus ou moins un) de ce nombre.
Plus précisément :
-
Cours 1 - Exercice (formatif)

1- Au chargement de la page, faites l’instanciation de la classe Compteur 
pour chaque élément data-js-compteur en prenant soin de passer sa 
référence DOM en argument.


2- À l’intérieur de la classe Compteur, récupérez d’abord les éléments et 
informations nécessaires aux comportements à suivre.


3- Initialisez le(s) gestionnaire(s) d’événements.

4- Suite au clic d’un bouton, faites le calcul approprié.

5- Pour enrichir l’expérience usager, faites une transition de sortie du 
nombre précédent puis une transition d’arrivée pour le nombre actualisé 
nouvellement injecté. 

Je suggère une courte transition du bas vers le 
haut pour une addition et, inversement, du haut vers le bas pour une 
soustraction. Pour ce faire, vous aurez à mettre à profit les propriétés et 
méthodes de l’API DOM vues la session passée ainsi que l’événement 
'transitionend'. 

Notez également que vous aurez à définir les 
différentes classes et propriétés CSS nécessaires aux transitions.
Assurez-vous de factoriser votre code afin d’éviter la redondance et de 
commenter dès que pertinent.
-
*/
