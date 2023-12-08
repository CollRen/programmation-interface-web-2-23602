let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;';


/**
 * Module pattern sans prototype
 */

console.log('%cModule pattern sans prototype', css);


console.log(moduleSansPrototype.get());
moduleSansPrototype.set('Billy Bob');
console.log(moduleSansPrototype.get());

let resultat1 = moduleSansPrototype.aPlusB();
console.log(resultat1);                                 // => 0 

let resultat2 = moduleSansPrototype.aPlusB(5, 4);
console.log(resultat2);                                 // => 9

let resultat3 = moduleSansPrototype.aPlusB(5);
console.log(resultat3);                                 // => 9

let resultat4 = moduleSansPrototype.aPlusB(10, 10); 
console.log(resultat4);                                 // => 20

console.log(moduleSansPrototype.estPositif(10));        // => true
console.log(moduleSansPrototype.estPositif(-10));       // => false
console.log(moduleSansPrototype.estPositif('10'));      // => true (convertion de type)
console.log(moduleSansPrototype.estPositif('dix'));     // => false