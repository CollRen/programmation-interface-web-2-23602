class LoremIpsum {
    constructor() {
        //this.init = this.init.bind(this);
        //this.afficheFace = this.afficheFace.bind(this);
    }

    init(el, elImg, elCitation, aCitations) {
        el.addEventListener('click', function() {
            if (el.classList.contains('ipsum--flip')) this.afficheFace(el, elImg);
            else this.afficheDos(el, elCitation, aCitations);
        }.bind(this));
    }

    afficheFace(el, elImg) {
        let src = elImg.src,
            path = src.substring(0, src.lastIndexOf('/')),
            img = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('-')),
            randomIndex = this.#randomNumber(3) + 1;

        elImg.src = `${path}/${img}-${randomIndex}.jpeg`;
        el.classList.remove('ipsum--flip');
    }

    #randomNumber(max) {
        return Math.floor(Math.random() * max);
    }
}

export const { init, afficheFace } = new LoremIpsum();