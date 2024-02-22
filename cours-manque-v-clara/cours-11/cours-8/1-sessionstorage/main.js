(function() {

    /**
     * Ajouter un sessionStorage
     */
    /*
    console.log(sessionStorage.maPremiereCle);
   
    if (sessionStorage.maPremiereCle == null){
        console.log('ola');
        sessionStorage.setItem('maPremiereCle', 'meu primeiro valor')
    }
    */

    //suite a un click sur un livre.

//if para entrar  click(e)
//e.stoppropagation
/*
    //livre
    let livre = {
        titre: '1984',//titre = 1984
        prix: '120.00' //prix = $120.00
    };

    let tableuDeLaSession;

    if(!sessionStorage.getItem('demoTableau')){
        tableuDeLaSession = [];
    } else {
        tableuDeLaSession = JSON.parse(sessionStorage.getItem('demoTableau'))
    }

    tableuDeLaSession.push(livre);

    sessionStorage.setItem('demoTableau', JSON.stringify(tableuDeLaSession));

*/


//servidor
if(!sessionStorage.getItem('demoTableau')){
    //string comme quoi y'a rien
}else{
    let data = JSON.parse(sessionStorage.getItem('demoTableau'));
    //boucler ici no dom
    //injecter dom
}

    /**
     * Supprimer des données d'un sessionStorage (remove)
     */





    /**
     * Supprimer toutes les données de sessionStorage (clear)
     */





})();