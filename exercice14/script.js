/**
 * Exercice 14 :
 *
 * Faire fonctionner les boutons.
 * Pour le bouton "grandir", on augmente de 25px à chaque clic jusqu'à 200px où
 * on revient à la taille normale
 *
 * En JavaScript cette fois-ci !
 */

// fonction pour récupérer la hauteur
function getHeight(element) {
  var styles = window.getComputedStyle(element),
      height = element.offsetHeight,
      borderTopWidth = parseFloat(styles.borderTopWidth),
      borderBottomWidth = parseFloat(styles.borderBottomWidth),
      paddingTop = parseFloat(styles.paddingTop),
      paddingBottom = parseFloat(styles.paddingBottom);

  return height - borderTopWidth - borderBottomWidth - paddingTop - paddingBottom;
}

var rectangle = document.querySelector('.rectangle'),
    btn1 = document.querySelector('.btn1'),
    btn2 = document.querySelector('.btn2'),
    btn3 = document.querySelector('.btn3'),
    btn4 = document.querySelector('.btn4'),
    btn5 = document.querySelector('.btn5'),
    originalSize = getHeight(rectangle),
    pixelsBySteps = 25,
    maxSize = 250;

// events
function event1() {
  var rect = document.querySelector('.rectangle'),
      actualSize = getHeight(rect),
      newSize = actualSize + pixelsBySteps;

  if (newSize >= maxSize) {
    newSize = originalSize;
  }

  rect.style.height = newSize + "px";
}

function event2() {
  rectangle.classList.add('is-green');
}

function event3() {
  rectangle.classList.remove('is-green');
}

function event4() {
  rectangle.classList.add('is-hidden');
}

function event5() {
  rectangle.classList.remove('is-hidden');
}

btn1.addEventListener('click', event1);
btn2.addEventListener('click', event2);
btn3.addEventListener('click', event3);
btn4.addEventListener('click', event4);
btn5.addEventListener('click', event5);
