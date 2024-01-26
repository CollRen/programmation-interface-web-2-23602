class LoremIpsum {
    #_el;
    #_elImg;
    #_elCitation;

    constructor(el) {
        this.#_el = el;
        this.#_elImg = this.#_el.querySelector('img');
        this.#_elCitation = this.#_el.querySelector('[data-js-citation]');
    }


    /**
     * Initialise les comportements 
     * -> Appelée via this.init() de chaque Class enfant (SANS #)
     */
    init() {
        this.#_el.addEventListener('click', function() {
            if (this.#_el.classList.contains('ipsum--flip')) this.#afficheFace();
            else this.afficheDos();
        }.bind(this));
    }


    /**
     * Affiche le côté face de la tuile
     */
    #afficheFace() { // Utilisée dans le INIT donc SANS #
        this.#_elImg.src = this.image;
        this.#_el.classList.remove('ipsum--flip');
    }


    /**
     * Affiche le côté dos de la tuile
     */
    afficheDos() { // AUSSI utilisée dans "BobRoss" ( donc SANS #)
        this.#_elCitation.innerHTML = this.citation;
        this.#_el.classList.add('ipsum--flip');
    }


    /**
     * Retoune un entier au hasard sous la valeur reçue en paramètre
     * @param {Int} max 
     * @returns
     */
    #randomNumber(max) { // Fonctions seulement utilisée ICI (#)
        return Math.floor(Math.random() * max);
    }


    /**
     * Retourne l'élément
     */
    get el() {
        return this.#_el;
    }


    /**
     * Retourne l'élément dans lequel injecter la citation
     */
    get elCitation() { // Ce get rend cette propriété disponible de global, ou en héritage?
        return this.#_elCitation;
    }


    /**
     * Retourne l'image aléatoire à injecter dans la tuile
     * Cette fonction pourra être utilisée de fâçon globale
     */
    get image() {
        let src = this.#_elImg.src,
            path = src.substring(0, src.lastIndexOf('/')),
            img = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('-')),
            randomIndex = this.#randomNumber(3) + 1;

        return`${path}/${img}-${randomIndex}.jpeg`;
    }


    /**
     * Retourne la citation aléatoire à injecter dans la tuile
     */
    get citation() {
        let randomIndex = this.#randomNumber(this._citations.length);
        return `<p>${this._citations[randomIndex]}</p>`;
    }
}