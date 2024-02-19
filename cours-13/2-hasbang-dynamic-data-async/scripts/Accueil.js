class Accueil {
    #_elMain;

    constructor() {
        this.#_elMain = document.querySelector('main');
        this.accueil = this.accueil.bind(this);
    }


    /**
     * Contenu de la page d'acceuil
     */
    accueil() {
        this.#_elMain.innerHTML = '<h3>Acceuil</h3>';
        document.querySelector(`[data-js-equipes] option[value="0"]`).selected = true;
    }
} 

export const { accueil } = new Accueil();