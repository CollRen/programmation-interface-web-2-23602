window.addEventListener("DOMContentLoaded", function () {
    /* 
Le fichier main.js ne devrait contenir que la boucle pour 
lancer les comportements demandés
*/

    //el parent, ajoute ce parent à l'objet à envoyer
    const elParent = document.querySelector("[data-js-youtube-videos]");
    for (let i = 0, l = youTubeVideos.length; i < l; i++) {
        new Video(youTubeVideos[i], elParent);
    }
    // Seulement pour rafraichir la page plus rapidement durant la phase test du code
    this.window.addEventListener("click", function () {
        location.reload();
    });
});
