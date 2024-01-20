export default 'Ma valeur exportée avec l\'instruction default renommée à l\'import.';

const maValeur = 'Ma valeur exportée renommée à l\'import.';


/**
 * Retourne une chaîne annonçant si le nombre reçu en paramètre est premier ou non
 * @param {Number} nb 
 * @returns 
 */
function maFonction(nb) {
    
    let estPremier = true;
    
    for (let i = 2, l = nb; i < l; i++) {
        if (nb % i === 0) estPremier = false;
    }
    
    let msg = `Le chiffre ${nb} ${estPremier ? 'est' : 'n\'est pas'} premier.`;
    
    return msg;
}


export {
    maValeur,
    maFonction
}