function YouTubeVideo(youTubeVideo) {

    //console.log(youTubeVideo);

    this.id = youTubeVideo.id;
    this.titre = youTubeVideo.titre;
    this.chaineYouTube = youTubeVideo.chaineYouTube;
    this.elParent = youTubeVideo.elParent;

    this.injecteVideo();
}


YouTubeVideo.prototype = {
    injecteVideo: function() {
        let youTubeVideoDOM = `
                        <div class="youtube">
                            <div class="youtube__detail">
                                <h2>${this.titre}</h2>
                                <h3>${this.chaineYouTube}</h3>
                            </div>
                            <div class="youtube__video-wrapper">
                                <iframe src="https://www.youtube.com/embed/${this.id}" class="youtube__video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    `;

        this.elParent.insertAdjacentHTML('beforeend', youTubeVideoDOM);
    }
}