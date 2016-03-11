/**
 * Exercice 7 :
 *
 * Créer un script qui passe le texte de 16px à 50px
 */

var $text = $('.grandir'),
    originalSize = $text.css('font-size');

$text.on('click', function () {
  $(this).toggleClass('is-big');
});
