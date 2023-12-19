function Voiture(annee, marque, transmission, couleur) {
    this.annee = annee;
    this.couleur = couleur;
    this.transmission = transmission;
    this.marque = marque;
    this.kmh = 0;
}

Voiture.prototype = {
    jeBouge: function () {
        return "Je bouge!";
    },

    decrire: function () {
        return `Je suis née en ${this.annee} et je fais des lifts au gens qui aiment ${this.marque}`;
    },
    accelere: function () {
        window.setInterval(
            function () {
                if (this.kmh < 1) {
                    this.kmh++;
                    console.log(this.kmh);
                }
            }.bind(this),
            100
        );
    },
};

let voiture1 = new Voiture(1995, "ford", "manuel", "bleu");
let voiture2 = new Voiture(2012, "Hunday", "automatique", "orange fluo");

console.log(voiture1.annee);
console.log(voiture1.jeBouge());
console.log(voiture2.decrire());
