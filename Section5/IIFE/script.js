
/*

/////////////////////
// Functions returning funcitons
// IFFE IMMEDIATELY INVOKE funcitons

function game(){
  var score = Math.random()*10;
  console.log(score>=5);
}
game();
*/


// iife



(function(){

  var score = Math.random()*10;
  console.log(score>=5);

})();

 console.log(score);


(function(goodluck){

  var score = Math.random()*10;
  console.log(score >= 5 - goodluck);

})(5);
