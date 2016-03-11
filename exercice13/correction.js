/**
 * Exercice 13 :
 *
 * Supprimer l'élément rouge en JavaScript
 */

var rect = document.querySelector('.rect2'),
    btn = document.querySelector('.btn1');

// fonction à exécuter si clic sur le bouton
function onClick() {
  rect.parentNode.removeChild(rect);
}

btn.addEventListener('click', onClick);
