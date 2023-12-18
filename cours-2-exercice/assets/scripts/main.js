/* 
Le fichier main.js ne devrait contenir que la boucle pour 
lancer les comportements demandés
*/

//el parent, ajoute ce parent à l'objet à envoyer
const elParent = document.querySelectorAll("[data-js-youtube-videos]");
// youTubeVideos.forEach(function (element) {
//     let test = new Video(element, youTubeVideos);

//     console.log(test);
// });

console.log(Video.prototype);

let video1 = new Video(youTubeVideos, elParent[0]);
console.log(youTubeVideos);
