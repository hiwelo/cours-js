var $form = $('.login__box'),
    $btn = $('.login__btn'),
    $infobox = $('.infobox');

$form.on('submit', function (event) {
  var $element = $(this),
      $login = $element.find('#login'),
      $pass = $element.find('#password');

  if ($login.val() == 'user' && $pass.val() == 'pass') {
    $infobox.removeClass('is-error');
    $infobox.addClass('is-valid');
    $infobox.text('Parfait');
  } else {
    $infobox.removeClass('is-valid');
    $infobox.addClass('is-error');
    $infobox.text('Halte là!');
  }

  // on annule le click sur le bouton
  event.preventDefault();
});
