class LoremIpsum {
    #_el;
    #_elImg;
    #_elCitation;

    constructor(el) {
        this.#_el = el;
        this.#_elImg = this.#_el.querySelector('img');
        this.#_elCitation = this.#_el.querySelector('[data-js-citation]');
    }

	init() {
		this.#_el.addEventListener('click', function(onClick) {

			if (this.#_el.classList.contains('ipsum--flip')){
				this.#_el.classList.remove('ipsum--flip');
				this.afficheFace();
			} else {
				this.#_el.classList.add('ipsum--flip');
				this.afficheDos();
			}
			
		}.bind(this))
	}
	
	#nbrAleatoire(max) {
		let index = Math.floor(Math.random() * max) + 1;
		return parseInt(index);
	}

	afficheDos() {
		this.#_elCitation.innerHTML = this.citationAleatoire;
		
	}

	afficheFace() {
		this.#_elImg.src = this.imageAleatoire;
	}
	
	/**
	 * @returns Une citation aléatoire
	 * 
	 */
	get citationAleatoire() {
		return this._citations[this.#nbrAleatoire(this._citations.length) - 1];
	}

	get insertionHTML() {
		let citation = this.citationAleatoire();
		return this._elCitation.innerHTML = citation;
	}

	get imageAleatoire() {
			let src = this.#_elImg.src,
			path = src.substring(0, src.lastIndexOf('/')),
			img = src.substring(src.lastIndexOf('/') + 1, src.lastIndexOf('-'));
			return `${path}/${img}-${this.#nbrAleatoire(3)}.jpeg`;
		}
}
