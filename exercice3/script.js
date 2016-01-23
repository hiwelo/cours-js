var test1 = document.querySelector('.test1'),
    test2 = document.querySelector('.test2');

// On peut récupérer la valeur d'un attribut
var element = test1.ownerDocument.defaultView,
    color = element.getComputedStyle(test1, null).backgroundColor;
console.log(color);

/*
 * On peut aussi changer la valeur d'un style directement depuis JS.
 * Mais franchement, ce n'est pas plus simple en CSS pur ?
 */
test2.style.backgroundColor = '#CC0000';
