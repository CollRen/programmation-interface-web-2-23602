import { oEtats } from './oEtats.js';
import Etat from './Etat.js';


export default class Etats {
    #_el;

    constructor(el) {
        this.#_el = el;

        this.#init();
    }    


    /**
     * Initialise les comportements
     */
    #init() {
        this.#injecteEtats();
    }


    /**
     * Injecte dans le DOM les états de l'objet oEtats
     */
    #injecteEtats() {
        for (const cle in oEtats) {
            let dom =  `<article class="etat" data-js-etat="${cle}">
                            <img src="./assets/img/${oEtats[cle].img}.jpeg" alt=${cle} class="etat__img">
                        </article>`;
            
            this.#_el.insertAdjacentHTML('beforeend', dom);
            new Etat(this.#_el.lastElementChild);
        }
    }
}