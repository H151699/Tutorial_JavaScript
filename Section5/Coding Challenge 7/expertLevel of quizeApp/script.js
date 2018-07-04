

/* After display the result,
display the next random question, so that the game never ends
(hint: write a funciton for this and call it right after displaying the result)*/

/*
  user writes'exit' instead of the anser to quite the quize
*/


/*
  track the user's score to make the game more fun !
  sp each time an anser is correct, and 1 point ot the score
  hint: use the power of Closure for this,
*/

/*
  Display the score in the console. use yet another method for this.
*/


(function(){ // avoid other code to override it








function Question(question, answers, correct){

  this.question = question;
  this.answers = answers;
  this.correct = correct;

}

Question.prototype.displayQuestion = function() {

  console.log(this.question); // display questions

  for(var i = 0; i < this.answers.length; i++ ){ // display answers
    console.log(i + ':' + this.answers[i]);

  }// forLoop

}//prototype


// check user's input answer.
Question.prototype.checkAnswer = function(ans, callback){
  var sc;
  if(ans === this.correct){
    console.log('Correct Answer hurra!');

    sc = callback(true);

  }else{

    console.log('Wrong answer, try again!');
    sc = callback(false);
  }

  this.displayScore(sc);
}

Question.prototype.displayScore = function(score){
    console.log('Your current score is:' + score);
    console.log('-----------------------------------------');
}


// 2. create a couple of questions using the constructor

var q1 = new Question('Is JavaScript the collest programming language in the world',
                      ['YES', 'NO'],
                      0
                      );

var q2 = new Question('What is the name of this course\'s teacher?',
                      ['John', 'Micheal', 'Jianyou'],
                      2
                      );

var q3 = new Question('What does best decribe coding',
                      ['Boring', 'Hard', 'Fun', 'Tediuos'],
                      2
                      );



var questionsArr = [q1, q2, q3]; // 3. store them all inside an array

// add score Function
function score() {
  var sc = 0;
  return function(correct){ // if the answer is correct, then return it
    if(correct){
      sc++;
    }
    return sc;
  }
}

// call score Function
var keepScore = score();






function nextQuestion(){

var n = Math.floor(Math.random()*questionsArr.length);

questionsArr[n].displayQuestion();

var answer = prompt('Please select the correct answer.');


if(answer !== 'exit'){

  questionsArr[n].checkAnswer(parseInt(answer), keepScore); // pass keepScore
  nextQuestion();

}

}// nextQuestion

nextQuestion();


})();
