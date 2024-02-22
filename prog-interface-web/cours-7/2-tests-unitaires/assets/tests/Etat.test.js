import { test, affirme } from './test.test.js';
import { oEtats } from '../scripts/oEtats.js';
import Etat from '../scripts/Etat.js';


export function valideInjecteDetail() {
    test('Valide l\'injection du détail d\'une tâche', function() {
        let mockElEtat = document.createElement('article');
        mockElEtat.setAttribute('class', 'etat');
        mockElEtat.setAttribute('data-js-etat', 'France');
        mockElEtat.innerHTML = `<img src="./assets/img/france.jpeg" alt="France" class="etat__img"></img>`;

        let etat = new Etat(mockElEtat);
        etat.injecteDetail();
        //console.log(mockElEtat);

        let mockElDetail = mockElEtat.querySelector('.etat__detail'),
            mockElDetailElsP = mockElDetail.querySelectorAll('p'),
            estValide = true;

        if (!mockElDetail) {
            estValide = false;
        }
        if (mockElDetail.querySelector('h2').innerHTML != 'France') {
            estValide = false;
        }
        if (mockElDetailElsP[0].firstElementChild.nodeName != 'SMALL') {
            estValide = false;
        }
        if (mockElDetailElsP[0].lastChild.textContent != oEtats.France.capitale) {
            estValide = false;
        }
        if (mockElDetailElsP[1].firstElementChild.nodeName != 'SMALL') {
            estValide = false;
        }
        if (mockElDetailElsP[1].lastChild.textContent != oEtats.France.population) {
            estValide = false;
        }
        if (mockElDetailElsP[2].firstElementChild.nodeName != 'SMALL') {
            estValide = false;
        }
        if (mockElDetailElsP[2].firstElementChild.nextSibling.textContent != `${oEtats.France.superficie} km`) {
            estValide = false;
        }
        if (mockElDetailElsP[3].firstElementChild.nodeName != 'SMALL') {
            estValide = false;
        }
        if (mockElDetailElsP[3].lastChild.textContent != oEtats.France.langue) {
            estValide = false;
        }
        if (mockElDetailElsP[4].firstElementChild.nodeName != 'SMALL') {
            estValide = false;
        }
        if (mockElDetailElsP[4].lastChild.textContent != oEtats.France.monnaie) {
            estValide = false;
        }

        affirme(estValide, 'Le détail injecté n\'est pas valide.');
    });
}


export function valideCacheDetail() {
    test('Valide la mécanique pour cacher le détail', function() {
        let mockElEtat = document.createElement('article');
        mockElEtat.setAttribute('class', 'etat');
        mockElEtat.setAttribute('data-js-etat', 'France');
        mockElEtat.innerHTML = `<img src="./assets/img/france.jpeg" alt="France" class="etat__img"></img>
                                <div class="etat__detail">
                                    <h2>France</h2>
                                    <p style="--delais: 1;"><small>capitale : </small>Paris</p>
                                    <p style="--delais: 2;"><small>population : </small>67 076 000</p>
                                    <p style="--delais: 3;"><small>superficie : </small>551 695 km<sup>2</sup></p>
                                    <p style="--delais: 4;"><small>langue : </small>Français</p>
                                    <p style="--delais: 5;"><small>monnaie : </small>Euro</p>
                                </div>`;


        let etat = new Etat(mockElEtat);
        etat.cacheDetail();
        
        let mockElDetail = mockElEtat.querySelector('.etat__detail--cache'),
            estValide = true;

        //console.log(mockElDetail);
        
        if (!mockElDetail) {
            estValide = false;
        }

        affirme(estValide, 'Le détail injecté n\'est pas caché.');
    });
}


export function valideSupprimeDetail() {
    test('Valide la mécanique pour supprimer le détail', function() {
        let mockElEtat = document.createElement('article');
        mockElEtat.setAttribute('class', 'etat');
        mockElEtat.setAttribute('data-js-etat', 'France');
        mockElEtat.innerHTML = `<img src="./assets/img/france.jpeg" alt="France" class="etat__img"></img>
                                <div class="etat__detail etat__detail--cache">
                                    <h2>France</h2>
                                    <p style="--delais: 1;"><small>capitale : </small>Paris</p>
                                    <p style="--delais: 2;"><small>population : </small>67 076 000</p>
                                    <p style="--delais: 3;"><small>superficie : </small>551 695 km<sup>2</sup></p>
                                    <p style="--delais: 4;"><small>langue : </small>Français</p>
                                    <p style="--delais: 5;"><small>monnaie : </small>Euro</p>
                                </div>`;


        let etat = new Etat(mockElEtat),
            event = new Event('transitionend');
        event.propertyName = 'opacity';

        etat.supprimeDetail(event);

        let mockElDetail = mockElEtat.querySelector('.etat__detail'),
            estValide = true;

        //console.log(mockElDetail);
        
        if (mockElDetail) {
            estValide = false;
        }

        affirme(estValide, 'Le détail injecté n\'est pas supprimé.');
    });
}