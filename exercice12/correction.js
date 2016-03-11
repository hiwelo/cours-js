/**
 * Exercice 12 :
 *
 * Supprimer l'élément rouge en jQuery
 */

var $rect = $('.rect2'),
    $btn = $('.btn1');

$btn.on('click', function () {
  $rect.remove();
});
