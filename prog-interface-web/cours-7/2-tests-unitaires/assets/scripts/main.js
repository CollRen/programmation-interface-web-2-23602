import Etats from './Etats.js';
import { appelleTests } from '../tests/appelleTests.test.js';


window.addEventListener('DOMContentLoaded', function() {

    let elsEtats = document.querySelectorAll('[data-js-etats]');

    for (let i = 0, l = elsEtats.length; i < l; i++) {
        new Etats(elsEtats[i]);        
    }


    /**
     * Appelle les tests automatisés
     */
    appelleTests();

});