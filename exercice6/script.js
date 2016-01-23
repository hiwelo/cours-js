/**
 * L'idée c'est de cibler les différents éléments de la page
 * et d'afficher leurs contenu dans la console.
 *
 * On va le cibler de différentes manières :
 *   - par leur classe, par exemple "test1"
 *   - par leur identifiant, s'il existe, par exemple "carre"
 *   - par leur position, par exemple le premier div pour "test1"
 *   - par leurs frères, par exemple pour test1 le fait qu'il suit h1
 *
 * L'objectif c'est de vous montrer que vous pouvez vraiment
 * utiliser les sélecteurs CSS dont vous avez l'habitude
 */

// via le sélecteur de classe
var carre = $('.test1'),
    maison = $('.test2'),
    grandeMaison = $('.maison--grande');
console.log(carre);
console.log(maison);
console.log(grandeMaison);

// via le sélecteur d'identifiant
var carre = $('#carre'),
    maison = $('#petiteFerme'),
    grandeMaison = $('#maisonMaire');
console.log(carre);
console.log(maison);
console.log(grandeMaison);

// via leur position
var carre = $('div:first-of-type'),
    maison = $('div:nth-of-type(2)'),
    grandeMaison = $('div:nth-of-type(3)');
console.log(carre);
console.log(maison);
console.log(grandeMaison);

// via leurs frères
var carre = $('h1 + div'),
    maison = $('div + div'),
    grandeMaison = $('.maison + .maison');
console.log(carre);
console.log(maison);
console.log(grandeMaison);
