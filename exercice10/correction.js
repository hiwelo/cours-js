/**
 * Exercice 10 :
 *
 * Changer la couleur du deuxième rectangle, uniquement en jQuery
 */

var $rectangle = $('.rectangle'),
    $btn = $('.btn1');

$btn.on('click', function () {
  $rectangle.eq(1).addClass('is-red');
});
