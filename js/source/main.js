(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#controls').on('click', '#start', startGame);
  }

  function startGame() {
    clearBoard();
    $('body').keydown(move);
    loadPieces();
    isWin();
  }

  function clearBoard() {
    $('.pacman').removeClass('pacman');
    $('.pellet').removeClass('pellet');
  }

  function loadPieces (){
    setPellet();
    setPacman();
  }

  function setPacman() {
    var x = Math.floor((Math.random()*2));
    var y = Math.floor((Math.random()*2)+1);

    $('td[data-x='+x+'][data-y='+y+']').addClass('pacman');
  }

  function setPellet(){
    var plt = {};

    plt.x = Math.floor((Math.random()*2));
    plt.y = Math.floor((Math.random()*2)+1);

    $('td[data-x='+plt.x+'][data-y='+plt.y+']').addClass('pellet');
  }

  function move(event){
    if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
      event.preventDefault();
    }

    var pacX = $('.pacman').data('x');
    var pacY = $('.pacman').data('y');

    switch(event.keyCode){
      case 38:
        if (pacY === 1 || pacY === 2) {
          pacY--;
        }
        break;
      case 40:
        if (pacY === 0 || pacY === 1) {
          pacY++;
        }
        break;
      case 37:
        if (pacX === 1){
          pacX--;
        }
        break;
      case 39:
        if (pacX === 0){
          pacX++;
        }
        break;
    }

    $('.pacman').removeClass('pacman');
    $('td[data-x='+pacX+'][data-y='+pacY+']').addClass('pacman');

    isWin();

  }


  function isWin() {
    if ($('.pacman').hasClass('pellet')) {
      alert ('You win!');
    } else {
      return;
    }
  }

}) ();
