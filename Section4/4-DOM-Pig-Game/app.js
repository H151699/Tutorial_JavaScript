/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;


/* dice */
/* Math.floor() : to delete the decimal */
dice = Math.floor(Math.random() * 6) + 1; // integer 1 + 5 + 1 = 6
//Test: console.log(dice);

// write "dice value" to the current-0 or current-1 section
document.querySelector('#current-' + activePlayer).textContent = dice; // .textContent can nonly set plain text, no HTML
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // <em> : make  it italic

var x = document.querySelector('#score-0').textContent; // read valueOf score-0 and store in  var x.
// console.log(x);

//change the display property and  set the dice to null
document.querySelector('.dice').style.display = 'none'; // make dice image none in the beginning
