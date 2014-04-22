(function() {
  'use strict';

  $(document).ready(init);

  function init(){
    $('#controls').on('click', '#start', startGame);
  }

  var pac = {};

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
    var plt = {};

    pac.x = Math.floor((Math.random()*2));
    pac.y = Math.floor((Math.random()*2)+1);
    plt.x = Math.floor((Math.random()*2));
    plt.y = Math.floor((Math.random()*2)+1);

    console.log(pac.x);
    console.log(pac.y);
    console.log(plt.x);
    console.log(plt.y);

    $('td[data-x='+pac.x+'][data-y='+pac.y+']').addClass('pacman');
    $('td[data-x='+plt.x+'][data-y='+plt.y+']').addClass('pellet');
  }

  function move(event){
    if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
      event.preventDefault();
    }

    switch(event.keyCode){
      case 38:
        if (pac.y > 0) {
          pac.y--;
        }
        break;
      case 40:
        if (pac.y < 2) {
          pac.y++;
        }
        break;
      case 37:
        if (pac.x === 1){
          pac.x--;
        }
        break;
      case 39:
        if (pac.x === 0){
          pac.x++;
        }
        break;
    }

    $('.pacman').removeClass('pacman');
    $('td[data-x='+pac.x+'][data-y='+pac.y+']').addClass('pacman');

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
