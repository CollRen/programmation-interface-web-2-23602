(function() {

    /**
     * Erreur fatal, le script est bloqué
     */

    //quotient = 2 / 0;
    try {
        let quotient = 2 / 0;
        console.log(quotient);      // Uncaught ReferenceError: quotient is not defined
    }catch(erreur){
        console.log(erreur.name);
        console.log(erreur.message);
        console.log(erreur.stack);
    }
    
    
    
    console.log('je fait suite à l\'erreur');



    /**
     * Même erreur, mais placée dans une structure try...catch :
     *  - le script du bloc try stoppe suite à l'erreur et transfert le contrôle au bloc catch, 
     *  - le script suivant la structure try...catch poursuit son exécution
     */





    /**
     * Gestion des erreurs et exceptions, 
     * les comportements de la structure try...catch demeurent les mêmes,
     * mais on ajoute le traitement des exceptions prévisibles à prévenir en cours de développement et maintenance
     */

    function division(nb1, nb2) {
        // On génère des exceptions prévisibles
        if (nb2 == 0) throw new Error('Impossible de diviser par 0');
        if (isNaN(nb1) || isNaN(nb2)) throw new Error('Les valeurs reçues en paramètre doivent être des nombres');

        quotient = 2 / 0;
    
        return nb1 / nb2;
    }

    try {
        division(2, 0);
    } catch (err) {
        console.log(err.stack);
        
    }
    try {
        division('deux', 'zero')
    } catch (error) {
        console.log(err.stack);
    }
    try {
        division(2, 1)
    } catch (error) {
        console.log(err.stack);
        
    }


})();