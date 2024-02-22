import { accueil } from './Accueil.js';
import { afficheListeVins, afficheCepages } from './VinService.js';
import { erreur404 } from './Erreur404.js';


export default class Router {
constructor() {
    this._routes = [

        //accueil
        ['', accueil ],
        ['/vins', afficheListeVins ],
        ['/vins/:id', afficheCepages ]
    ]

    this.init();
}

init() {
    this.gereHashbanf();
    /**
     * Étape 2
     * Écouteur d'événement
     * Lorsque change ce qu'il y a APRÈS le hash(#)
     */
    window.addEventListener('hashchange', function(onHashChange) {
        // console.log(onHashChange.currentTarget.history);

        this.gereHashbanf();
    }.bind(this))
}

/**
 * Étapes 3
 * Gestion du fragment d'URL suite au #! afin
 * appeler le comportement de la route correspondante
 */
gereHashbanf() {
    // console.log('test');
    // console.log(location);

    /**
     * Enlever les caractères "#!"
     */
    let hash = location.hash.slice(2),
        isRoute = false;

        // console.log(location.hash);

    if(hash.endsWith('/')) hash = hash.slice(0, -1);

    /**
     * Pour chaque route, est-cer qu'il y a une correspondance avec le hash courant
     */
    for (let i = 0; i < this._routes.length; i++) {
        let route = this._routes[i][0],
                isId = false,
                hashSansId;

        // console.log(route);



        
        if(route.indexOf(':') > -1) {

            route = route.slice(0, route.indexOf('/:'));
            // console.log(route);  // vins
            hashSansId = hash.slice(0, hash.lastIndexOf('/'));

            //console.log(hashSansId); // vide
            isId = true;
        }

        if(route == hash || route == hashSansId){
            
            let hashInArray = hash.split(route);
            //console.log(hashInArray);
                
            console.log(hashInArray[1]);
            //console.log(isId);

                if(hashInArray[1]) {
                    if (isId) {
                        let id = hashInArray[1].slice(1);
                        console.log(id)
                        this._routes[i][1](id);
                        isRoute = true;
                        return id;

                    }
                } else {
                    if (hash == this._routes[i][0]) {
                        this._routes[i][1]();
                        isRoute = true;
                    }
                }
            }
            if(!isRoute) {
                erreur404();
            }
        }
    }    
}