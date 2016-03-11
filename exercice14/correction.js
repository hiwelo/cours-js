/**
 * Exercice 8 :
 *
 * Faire fonctionner les boutons.
 * Pour le bouton "grandir", on augmente de 25px à chaque clic jusqu'à 200px où
 * on revient à la taille normale
 */

var $rectangle = $('.rectangle'),
    originalSize = $rectangle.height(),
    pixelsBySteps = 25,
    maxSize = 200;

$('.btn1').on('click', function () {
  var $rect = $('.rectangle'),
      actualSize = $rect.height(),
      newSize = actualSize + 10;

  if (newSize >= maxSize) {
    newSize = originalSize;
  }

  $rect.height(newSize);
});

$('.btn2').on('click', function () {
  $rectangle.addClass('is-green');
});

$('.btn3').on('click', function () {
  $rectangle.removeClass('is-green');
});

$('.btn4').on('click', function () {
  $rectangle.addClass('is-hidden');
});

$('.btn5').on('click', function () {
  $rectangle.removeClass('is-hidden');
});
