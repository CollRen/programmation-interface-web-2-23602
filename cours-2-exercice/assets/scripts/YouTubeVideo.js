const oVideo = youTubeVideos;

class Video {
    constructor(LienVideo, elParent) {
        this._id = LienVideo.id;
        this._titre = LienVideo.titre;
        this._chaineYouTube = LienVideo.chaineYouTube;
        this._elParent = elParent;
        this.init();
    }

    init() {
        this.injecteHTML();
    }

    /**
     * Injecte dans le DOM
     */
    injecteHTML() {
        let dom = `<div class="youtube__detail">
				<h2>${this._titre}</h2>
				<h3>${this._chaineYouTube}</h3>
			</div>
			<div class="youtube__video-wrapper"><iframe src="https://www.youtube.com/embed/${this._id}" title="${this._titre}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
			</div>`;
        this._elParent.insertAdjacentHTML("beforeend", dom);
    }
}
