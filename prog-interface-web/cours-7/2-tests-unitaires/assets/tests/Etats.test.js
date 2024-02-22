import { test, affirme } from './test.test.js';
import { oEtats } from '../scripts/oEtats.js';


export function valideInjecteEtats() {
    test('Valide l\'injection de tous les états', function() {
        let elEtats = document.querySelector('[data-js-etats]'),
            elsEtat = elEtats.querySelectorAll('[data-js-etat]'),
            nbEtats = Object.keys(oEtats).length,
            estValide = true;

        if (elsEtat.length != nbEtats) estValide = false;
        
        affirme(estValide, `Il y a ${elsEtat.length} état${elsEtat.length > 1 ? 's' : ''} injecté${elsEtat.length > 1 ? 's' : ''} alors qu'il y a ${nbEtats} état${nbEtats > 1 ? 's' : ''} dans la structure de données.`);
    });
}


/**
 * valideAttributAlt
 * Valide l'attribut alt de chaque image
 */


