/**
 * Exercice 11 :
 *
 * Changer la couleur du deuxième rectangle, uniquement en JavaScript
 */

var rectangle = document.querySelectorAll('.rectangle'),
    btn = document.querySelectorAll('.btn1')[0];

// console.log(rectangle);
// console.log(btn);

// on prépare la fonction
function colorChange() {
  rectangle[1].classList.add('is-red');
}

// on ajoute l'écoute du click sur le bouton
btn.addEventListener('click', colorChange);
