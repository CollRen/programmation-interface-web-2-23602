(function() {

    /**
     * Ajouter un sessionStorage
     * window facultatif
     */
    //setItem prends en param cle valeur.
    // window.sessionStorage.setItem('maPremiereCle', 'ma premiere valeur');
    /*
    console.log(window.sessionStorage.getItem('maPremiereCle'));
    // console.log(window.sessionStorage.maPremiereCle);
    if(sessionStorage.getItem('maPremiereCle') == null){

        console.log('yap');
        sessionStorage.setItem('maPremiereCle', 'ma premiere valeur')

    } 
    */


   //suite a un click sur un livre //ajouter un gestionnaire de click dans la classe livre 
   //if(e.target.nodeName == 'BUTTON')
   //e.stopPropagation();
   //si on veux ajouter un livre au panier sans afficher la tuile

//    let infoAConserver =  {
//     cle1: 'ma Valeur 1',  //cle1 livre
//     cle2: 'ma Valeur 2'  //cle2 titre
//                         //cle3 Prix
//     };
//     let tableauDeLaSession;                  

//    if(!sessionStorage.getItem('demoTableau')){
//     tableauDeLaSession = [];



//    }else{
//     tableauDeLaSession = JSON.parse(sessionStorage.getItem('demoTableau'));

//    }
 // valider si le livre est deja present 
          //si oui 
//    tableauDeLaSession.push(infoAConserver);
//    sessionStorage.setItem('demoTableau', JSON.stringify(tableauDeLaSession));
    if(!sessionStorage.getItem('demoTableau')){
    // string comme quoi y'a rien 
    }else{
        let data = JSON.parse(sessionStorage.getItem('demoTableau'));
        //boucler dans ma structire data pour constriuire le DOM
        //injecter le DOM
    }



    /**
     * Supprimer des données d'un sessionStorage (remove)
     */





    /**
     * Supprimer toutes les données de sessionStorage (clear)
     */





})();