/**
 * @description Object contenant les mouseover etc.
 * @param
 *
 */
class Etat {
  /**
   *
   * @param {Là où Etat est instancié} el est le noeud DOM
   */
  constructor(el) {
    this._el = el;

    this._etat = this._el.dataset.jsEtat;
    this._detail = oEtats[this._etat];
    this.init();
  }

  /**
   * Initialise les comportements
   */
  init() {
    //console.log(this._el);

    // this._el.addEventListener(
    //     "mouseover",
    //     function () {
    //         console.log(this._el);
    //     }.bind(this)
    // );
    this._el.addEventListener(
      "mouseover",
      function () {
        // À faire: injecter le détail de l'etat (this.detail.***)

        //console.log(this._detail).bind(this._etat);
        let dom = `<div class="etat__detail">
                <h2>${this._detail.capitale}</h2>
                <p>population: ${this._detail.population}</p>
                <p>superficie: ${this._detail.superficie}</p>
                <p>langue: ${this._detail.langue}</p>
                <p>monnaie: ${this._detail.monnaie}</p>

          </div>`;
        this._el.insertAdjacentHTML("beforeend", dom);
      }.bind(this)
    );

    this._el.addEventListener(
      "mouseout",
      function () {
        console.log(this._el.children[1]);
        this._el.children[1].classList.add("etat__detail--cache");

        // À faire: supprimer le détail précédemment injecté (Utilise "remove")
      }.bind(this)
    );
  }
}

// capitale: 'Paris',
// population: '67&thinsp;076&thinsp;000',
// superficie: '551&thinsp;695',
// langue: 'Français',
// monnaie: 'Euro',
// img: 'france'
// },: 'Paris',
// population: '67&thinsp;076&thinsp;000',
// superficie: '551&thinsp;695',
// langue: 'Français',
// monnaie: 'Euro',
// img: 'france'
// },
