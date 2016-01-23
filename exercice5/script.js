/**
 * Fichier d'explication des bonnes pratiques JavaScript
 * -----------------------------------------------------
 * L'idée ici, ce n'est pas forcément de faire un JavaScript dans une syntaxe
 * optimale, de développeur.
 * L'idéal étant plutôt d'avoir des fichiers de travail propres et de s'en sortir
 * facilement pour éviter les erreurs.
 */

/*
 * 1. Pour éviter l'exécution sauvage de script, avec jQuery on vérifie que
 * tout est lancé une fois la page chargée
 */

$(document).ready(function () {
  /*
   * Dans l'idéal, on travaillerait sous forme de plugins uniquement,
   * mais on verra ça bien à la fin ;)
   * Beaucoup des choses présentées ici seront expliquées plus tard.
   */

  /**
   * Déjà, pour des questions de performance, on travaille à base de variables
   */

  // On évite ça :
  $('.carre1').css({
    backgroundColor: 'darkred'
  });
  $('.carre1').click(function () {
    if ($('.carre1').css('backgroundColor') === 'rgb(255, 204, 0)') {
      $('.carre1').css('backgroundColor', 'darkred');
    } else {
      $('.carre1').css('backgroundColor', '#fc0');
    }
  });

  // On travaille à base de variables pour éviter de recourir trop souvent au DOM
  // var $carre1 = $('.carre1');
  // // $carre1 plutôt carre1 pour bien montrer que c'est un objet jQuery
  // $carre1.addClass('initOk');
  // $carre1.on('click.hwlo', function () {
  //   $(this).toggleClass('clicked');
  // });


  /*
   * En JavaScript, il y a plusieurs manières d'instancier des objects ou de
   * déclarer des tableaux.
   * Allons au plus simple, préférons les versions raccourcies
   */
  /*jshint -W010 */
  var badObject = new Object(); // pas bien
  /*jshint +W010 */
  var goodObject = {}; // bien

  /*jshint -W009 */
  var badArray = new Array();
  /*jshint +W009 */
  var goodArray = [];

  /*
   * En plus de cela, pour les objects, il existe des mots réservés qu'il vaut mieux
   * éviter d'utiliser.
   */
  var badSuperman = {
    default: { clark: 'kent' },
    private: true,
  };

  var goodSuperman = {
    defaults: { clark: 'kent' },
    hidden: true,
  };

  /*
   * Comme vous le voyez, vu que je versionne mes projets je rajoute une virgule
   * après la dernière ligne d'un objet ou d'un tableau.
   * Cela évite d'avoir des lignes considérées inutilement comme modifiées par Git
   * quand je rajouterais du contenu.
   * Bonne pratique à éviter dans des fichiers de données JSON
   */

  /*
   * Préférez l'usage des '' (single quote) plutôt que des guillemets ("") et
   * tâchez d'éviter les lignes trop longues (85 caractères c'est une bonne limite)
   *
   * Et puis, une variable, ça se déclare comme tel même si le langage est permissif
   */
  var text = 'Contenu de ma variable';
  var lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ' +
    'a tincidunt diam. Pellentesque vehicula ante a ultricies bibendum. Curabitur ' +
    'risus arcu, egestas eget vulputate ac, condimentum vel ex. Cras magna lectus, ' +
    'sodales sagittis libero eu, sagittis luctus odio. Phasellus vel quam auctor, ' +
    'sagittis neque nec, iaculis urna. Proin ut porttitor orci, sed dictum eros. ' +
    'Pellentesque neque justo, elementum in mattis sed, sollicitudin ac purus. ' +
    'Nulla vel libero nec nibh semper euismod eu ac nisl. Integer luctus tellus ' +
    'diam, eget tincidunt tellus posuere in. ';

  maNouvelleVariable = 'mais qu\'elle horreur';

  /*
   * En JS, beaucoup de monde a pris l'habitude de déclarer ses fonctions comme
   * des fonctions anonymes à travers des variables.
   * Pourquoi réinventer la roue quand le langage prévoit déjà une manière de
   * nommer ses fonctions ?
   */

  var badFunction = function () {
    console.log('c\'est mal !');
  };

  function good() {
    console.log('Alors que ça c\'est tellement plus propre');
  }

  /*
   * On s'oriente vers la fin mais, quand vous ferez des conditions
   * préférez === à == et !== à !=
   * En plus de checker la valeur, vous vérifirez le type.
   * Et pensez à utiliser les raccourcis
   */
  if (name !== '') {
    console.log('is sooooo bad');
  }

  if (name) {
    console.log ('is sooooo good');
  }

  if (name.length > 0) {
    console.log('mwé... vous avez compris pourquoi c\'est mal ?');
  }

  if (name.length) {
    console.log('c\'est tellement mieux');
  }

  /*
   * Pour finir, la documentation ça fait toujours du bien.
   * Parce que la première règle en programmation c'est que :
   * "vous dans six mois est un autre."
   * Donc quand vous avez des fonctions, bah ça se documente...
   */

  /**
   * Permet de savoir comment une garde à vue va se dérouler
   *
   * @param  {integer} goodCop niveau de gentilesse du gentil flic
   * @param  {integer} badCop  niveau de sadisme du méchant flic
   *
   * @return {void}
   */
  function gardeAVue(goodCop, badCop) {
    if (goodCop > badCop) {
      console.log('Great, tout ira bien.');
    } else {
      console.log('Gardez le silence sur les conseils de votre avocat.');
    }
  }
});

/*
 * Bon, la c'est vraiment la fin, mais toujours pareil, pour Git notamment
 * on laisse toujours une ligne vide à la fin d'un document.
 * Comme ici  vvv    (la ligne 168)
 */
