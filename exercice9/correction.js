/**
 * Exercice 9 :
 *
 * Passer le texte de l'un des rectangles à l'autre, et vice-cersa
 */

var $rect1 = $('.rect1'),
    $rect2 = $('.rect2'),
    $text = $('.text'),
    $btn = $('.btn1');

$btn.on('click', function () {
  var $parent = $text.parent();

  if ($parent.hasClass('rect1')) {
    $text.detach().appendTo($rect2);
  } else {
    $text.detach().appendTo($rect1);
  }
});
