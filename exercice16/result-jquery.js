var $title = $('.accordeon__title');

$title.on('click', function () {
  var $el = $(this);
  $title.removeClass('is-active');
  $el.addClass('is-active');
});
