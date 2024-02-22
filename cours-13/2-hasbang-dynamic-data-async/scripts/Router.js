import { accueil } from "./Accueil.js";
import { getJoueursParEquipe } from "./EquipeService.js";
import { erreur404 } from "./Erreur404.js";

export default class Router {
    #_el;
    #_routes;
    #_elSelectEquipe;

    constructor(_el) {
        this.#_el = _el;
       this.#_elSelectEquipe = document.querySelector('[data-js-equipes]');
        this.#_routes = [
            ['', accueil],
            ['/equipes/:id', getJoueursParEquipe]
        ]
        console.log(this.#_elSelectEquipe);

        this.#init();
    }


    #init() {

        let id = this.gereHashbang();

        if(id) this.#_el.querySelector(`[data-js-equipes] option[value="${id}"]`).selected = true;

        this.#_elSelectEquipe.addEventListener('change', function(e){
            let id = e.target.value;
            if (id != 0) location = `#!/equipes/${id}`;
        })







        /**
         * Au chargement de la page
         */

        window.addEventListener('hashchange', function(){
            this.gereHashbang();

        }.bind(this));
    }

    /**
 * Étapes 3
 * Gestion du fragment d'URL suite au #! afin
 * appeler le comportement de la route correspondante
 */
gereHashbang() {
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
    for (let i = 0; i < this.#_routes.length; i++) {
        let route = this.#_routes[i][0],
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
                        this.#_routes[i][1](id);
                        isRoute = true;
                        return id;

                    }
                } else {
                    if (hash == this.#_routes[i][0]) {
                        this.#_routes[i][1]();
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