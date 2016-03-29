var form = document.querySelector('.login__box'),
    btn = document.querySelector('.login__btn'),
    infobox = document.querySelector('.infobox');

form.addEventListener('submit', function (event) {
  var login = document.getElementById('login'),
      pass = document.getElementById('password');

  if (login.value == 'user' && pass.value == 'pass') {
    infobox.classList.remove('is-error');
    infobox.classList.add('is-valid');
    infobox.textContent = 'Parfait !';
  } else {
    infobox.classList.remove('is-valid');
    infobox.classList.add('is-error');
    infobox.textContent = 'Halte là !';
  }

  // on annule le click sur le bouton
  event.preventDefault();
});
