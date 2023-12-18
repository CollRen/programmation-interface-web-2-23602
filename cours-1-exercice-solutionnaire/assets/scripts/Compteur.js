class Compteur {
    constructor(el) {
        this._el = el;
        this._elOperations = this._el.querySelector('[data-js-operations]');
        this._elNombre = this._el.querySelector('[data-js-nombre]');
        this._nombre = parseInt(this._elNombre.textContent);

        this.init();
    }


    /**
     * Initialise les comportements
     */
    init() {
        this._elOperations.addEventListener('click', function(e) {
            let action = e.target.dataset.jsAction;
            if (action) {
                this.calculeNombre(action);
                this.injecteNombre(action);
            }
        }.bind(this));
    }


    /**
     * Incrémente ou décrémente la valeur du nombre
     * @param {String} action 
     */
    calculeNombre(action) {
        if (action == 'plus') this._nombre++;
        if (action == 'moins') this._nombre--;
        //if (action == 'moins') this._elNombre.textContent = --this._nombre;
        //if (action == 'plus') this._elNombre.textContent = ++this._nombre;
    }


    /**
     * Supprime le nombre précédent et injecte le nouveau nombre
     * @param {String} action 
     */
    injecteNombre(action) {

        /* Transition de sortie */
        let elNombre = this._el.querySelector('[data-js-nombre]');
        elNombre.classList.add(`nombre--transition-${action == 'plus' ? 'haut' : 'bas'}`);
        this._elOperations.style.pointerEvents = 'none';

        /* Transition d'arrivée */
        elNombre.addEventListener('transitionend', function(e) {
            if (e.propertyName == 'opacity') {
                elNombre.remove();
                let dom = `<span class="nombre nombre--transition-${action == 'plus' ? 'bas' : 'haut'}" data-js-nombre>${this._nombre}</span>`;
                this._el.insertAdjacentHTML('afterbegin', dom);
                setTimeout(function() {
                    let elNombre = this._el.querySelector('[data-js-nombre]');
                    elNombre.classList.remove(`nombre--transition-${action == 'plus' ? 'bas' : 'haut'}`);
                    this._elOperations.style.pointerEvents = 'all';
                }.bind(this), 10);
            }
        }.bind(this));
    }
}