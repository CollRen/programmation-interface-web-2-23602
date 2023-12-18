/*
Le prototype 'YouTubeVideo' s’acquitte de la 
création du composant, puis de son injection à l’intérieur du parent 
data-js-youtube-videos

On peut enlever ça pour que ce soit mieux responsive: width="560" height="315" 

Et changer le id, tout ce qui est après embed/: ru3U8MHbFFI?si=1-sZyxG4aXYJyUG1

<iframe src="https://www.youtube.com/embed/" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        id: 'PFmuCDHHpwk',
        titre: 'Object-oriented Programming in JavaScript: Made Super Simple | Mosh',
        chaineYouTube:
*/
const oVideo = youTubeVideos;

class Video {
    constructor(oVideo, elParent) {
        this._id = oVideo.id;
        this._titre = oVideo.titre;
        this._chaineYouTube = oVideo.chaineYouTube;
        this._elParent = elParent;
        this.init();
    }

    init() {
        this.injecteHTML();
    }

    // el parent
    // appeler la méthode d'injection
    /**
     * Injecte dans le DOM
     */
    injecteHTML() {
        let dom = `<iframe src="https://www.youtube.com/embed/${this._id}" title="${this.titre}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
        console.log(dom);
        // this._elParent.insertAdjacentHTML("beforeend", dom);
    }
}
