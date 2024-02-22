import { accueil } from "./Accueil.js";
import {getJoueursParEquipe } from "./EquipeService.js"

export default class Router {
    #_el;
    #_routes;
    #_elSelectEquipes

    constructor (el) {

        this.#_el = el;
        this.#_elSelectEquipes = this.#_el.querySelector('[data-js-equipes]');

        this.#_routes = [
            ['', accueil],
            ['/equipes/:id', getJoueursParEquipe]
        ]

        this.#init();
    }

    #init(){

        let id = this.gereHashbang();
        if(id) this.#_el.querySelector(`[data-js-equipes] option[value="${id}"]`).selected=true;



        this.#_elSelectEquipes.addEventListener('change', function(e){
            let id = e.target.value;

            if(id != 0) location = `#!/equipes/${id}`;
        })


        window.addEventListener("hashchange", function(){
            this.gereHashbang();
        }.bind(this))
    }


    gereHashbang () {
        
        let hash = location.hash.slice(2); 
        let isRoute = false;

        if(hash.endsWith('/')) hash = hash.slice(0,-1);

        for(let i = 0 ; i < this.#_routes.length; i ++){

            let route = this.#_routes[i][0];
            let hashSansId;
            let isId = false;

            if(route.indexOf(":") > -1){
                route = route.slice(0, route.indexOf("/:"));
                hashSansId = hash.slice(0, hash.lastIndexOf("/"));
                isId = true;
            }

            if(route == hash || route == hashSansId)  {
                console.log("dans la function");

                let hashInArray = hash.split(route);

                if(hashInArray[1]){
                    if(isId) {
                        let id = hashInArray[1].slice(1);
                        this.#_routes[i][1](id);  //onde 1 é o método chamado (láááá em cima em this._routes, depois da vírgula)
                        isRoute = true;
                        return id;
                    } 
                } else {
                    if(hash == this.#_routes[i][0]){
                        this.#_routes[i][1]();
                        isRoute = true;
                    }
                }
                
            }
        }

    }
}