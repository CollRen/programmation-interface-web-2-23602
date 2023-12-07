//
class Etats {
    //constructor methode lancé une seule fois est exécuté automatique lors de l'utilisation du mot clé 'New' afin de pouvoir utiliser des
    constructor(el) {
        //_ -> La barre en basceci est une propriété
        this._el = el;

        this.init();
    }
    init() {
        for (const cle in oEtats) {
            let dom = `<article class="etat" data-js-etat=${cle}>
                            <img src="./assets/img/${oEtats[cle].img}.jpeg" alt="image de ${cle}" class="etat__img">
                        </article>`;

            this._el.insertAdjacentHTML("beforeend", dom);

            new Etat(this._el.lastElementChild);
        }
    }
}
