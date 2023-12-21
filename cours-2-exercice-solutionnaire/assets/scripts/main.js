window.addEventListener('DOMContentLoaded', function() {

    let elYouTubeVideos = document.querySelector('[data-js-youtube-videos]');

    for (let i = 0, l = youTubeVideos.length; i < l; i++) {
        youTubeVideos[i].elParent = elYouTubeVideos;
        new YouTubeVideo(youTubeVideos[i]);
    }
    
});