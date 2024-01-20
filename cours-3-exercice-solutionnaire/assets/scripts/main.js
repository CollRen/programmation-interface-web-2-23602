window.addEventListener('DOMContentLoaded', function() {

    let elsCalculatrice = document.querySelectorAll('[data-js-calculatrice]');

    for (let i = 0, l = elsCalculatrice.length; i < l; i++) {
        let calculatirce = new Calculatrice(elsCalculatrice[i]);
    }

});