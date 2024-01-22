class LoremIpsum {
    constructor() {
        this.init = this.init.bind(this);
        this.afficheFace = this.afficheFace.bind(this);
    }


    /**
     * Initialise les comportements
     */
    init(el, elImg, elCitation, aCitations) {
        el.addEventListener('click', function() {
            if (el.classList.contains('ipsum--flip')) this.afficheFace(el, elImg);
            else this.afficheDos(el, elCitation, aCitations);
        }.bind(this));
    }


    /**
     * Affiche le côté face de la tuile
     */
    afficheFace(el, elImg) {
        let src = elImg.src,
            path = src.substring(0, src.lastIndexOf('/')),
            img = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('-')),
            randomIndex = this.#randomNumber(3) + 1;

        elImg.src = `${path}/${img}-${randomIndex}.jpeg`;
        el.classList.remove('ipsum--flip');
    }


    /**
     * Affiche le côté dos de la tuile
     */
    afficheDos(el, elCitation, aCitations) {
        let randomIndex = this.#randomNumber(aCitations.length);
            
        elCitation.innerHTML = `<p>${aCitations[randomIndex]}</p>`;
        el.classList.add('ipsum--flip');
    }


    /**
     * Retoune un entier au hasard sous la valeur reçue en paramètre
     * @param {Int} max 
     * @returns 
     */
    #randomNumber(max) {
        return Math.floor(Math.random() * max);
    }
}

export const { init, afficheFace } = new LoremIpsum();