import Nombre from './Nombre.js';                                     // export default
//import { Nombre } from './Nombre.js';                               // export sans default


(function() {

    let elInputNumber = document.querySelector('input[name="nb"]'),
        elBtn = document.querySelector('[data-js-submit]');

    elBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let nb = elInputNumber.value;
         
        new Nombre(nb);
        //new Nombre(nb).init();
        //new Nombre(nb).afficheDetailNb();
    });

})();