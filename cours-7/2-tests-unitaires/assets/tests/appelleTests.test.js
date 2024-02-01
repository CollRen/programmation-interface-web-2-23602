import { valideInjecteEtats } from './Etats.test.js';
import { valideInjecteDetail, valideCacheDetail, valideSupprimeDetail } from './Etat.test.js';


export function appelleTests() {
    valideInjecteEtats();
    valideInjecteDetail();
    valideCacheDetail();
    valideSupprimeDetail();

}