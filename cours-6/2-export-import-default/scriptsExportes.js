export default 'Ma valeur exportée avec l\'instruction default.';

export const maValeurNommee = 'Ma valeur exportée nommée.';


/**
 * Retourne une chaîne annonçant si le nombre reçu en paramètre est premier ou non
 * @param {Number} nb 
 * @returns 
 */
//export default function(nb) {
export function maFonction(nb) {
    
    let estPremier = true;
    
    for (let i = 2, l = nb; i < l; i++) {
        if (nb % i === 0) estPremier = false;
    }
    
    let msg = `Le chiffre ${nb} ${estPremier ? 'est' : 'n\'est pas'} premier.`;
    
    return msg;
} 