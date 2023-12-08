let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;';


/**
 * Module pattern avec prototype
 */

console.log('%cModule pattern avec prototype', css);


let livre1 = new Livre();
    livre2 = new Livre(400, 1, 'Tricia', 'Takanawa');
    livre3 = new Livre();

console.log(livre1.decrire());
console.log(livre2.decrire());
console.log(livre3.decrire());

livre1.avancePage();
console.log(livre1.decrire());
console.log(livre3.decrire());
livre3.avancePage();
livre3.avancePage();
livre3.avancePage();
livre3.avancePage();
livre3.reculePage();
livre3.avancePage();
livre3.avancePage();
console.log(livre1.decrire());
console.log(livre3.decrire());