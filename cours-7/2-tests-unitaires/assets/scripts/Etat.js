import { oEtats } from './oEtats.js';


export default class Etat {
    constructor(el) {
        this._el = el;
        this._etat = this._el.dataset.jsEtat;

        this._elDetail = document.createElement('div');
        this._elDetail.setAttribute('class', 'etat__detail etat__detail--cache');
        
        let detail = `<h2>${this._etat}</h2>`,
            delais = 0;

        for (const cle in oEtats[this._etat]) {
            if (cle != 'img') {
                delais++;
                detail += `<p style="--delais: ${delais};"><small>${cle} : </small>${oEtats[this._etat][cle]}${cle == 'superficie' ? ' km<sup>2</sup>' : ''}</p>`;
            }
        }
        this._elDetail.insertAdjacentHTML('beforeend', detail);

        this.supprimeDetail = this.supprimeDetail.bind(this)
        this.init();
    }


    /**
     * Initialise les comportements
     */
    init() {
        this._el.addEventListener('mouseover', this.injecteDetail.bind(this));
        this._el.addEventListener('mouseout', this.cacheDetail.bind(this));
    }


    /**
     * Injecte dans le DOM le détail de cet état
     */
    injecteDetail() {
        this._el.append(this._elDetail);
        setTimeout(function() {
            this._el.lastElementChild.classList.remove('etat__detail--cache');
        }.bind(this), 10);
    }


    /**
     * Injecte la classe CSS pour cacher le détail de cet état
     */
    cacheDetail() {
        let elDetail = this._el.lastElementChild;
        elDetail.classList.add('etat__detail--cache');

        elDetail.addEventListener('transitionend', this.supprimeDetail);
    }


    /**
     * Supprime du DOM le détail de cet état
     */
    supprimeDetail(e) {
        let elDetail = this._el.lastElementChild;
        if (elDetail.classList.contains('etat__detail--cache') && e.propertyName == 'opacity') elDetail.remove();

        elDetail.removeEventListener('transitionend', this.supprimeDetail);
    }
}