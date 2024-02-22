import { valideInjecteEtats } from './Etats.test.js';
import { valideInjecteDetail, valideCacheDetail, valideSupprimeDetail } from './Etat.test.js';
import { valideFormatEtats } from './oEtats.test.js';


export function appelleTests() {
    // valideInjecteEtats();
    // valideInjecteDetail();
    // valideCacheDetail();
    // valideSupprimeDetail();
    valideFormatEtats();

}