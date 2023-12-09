/**
 * @description Object contenant les instanciations de l'object "Etat"
 *
 */
class Etats {
  //constructor methode lancé une seule fois est exécuté automatique lors de l'utilisation du mot clé 'New' afin de pouvoir utiliser des
  /**
   *
   * @param {[data-js-etats] sélectionné au lancement de la page} el
   */
  constructor(el) {
    //_ -> Barre en bas => "ceci est une propriété"
    this._el = el;

    this.init();
  }
  init() {
    for (const cle in oEtats) {
      let dom = `<article class="etat" data-js-etat=${cle}>
                            <img src="./assets/img/${oEtats[cle].img}.jpeg" alt="image de ${cle}" class="etat__img">
                        </article>`;

      this._el.insertAdjacentHTML("beforeend", dom);
      /**
       * @argument this._el.lastElementChild: Là où Etat est instancié
       */
      new Etat(this._el.lastElementChild);
    }
  }
}
