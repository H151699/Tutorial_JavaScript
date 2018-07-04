


// 1 Build a funciton constructor called Question to describe a question.
// A question should include:
// a) question itself
// b) the answers from which the player can choose the correct one
//    (choose an adequate data structure here, array, object, etc.)
// c) correct answers(f.ek using number)




(function(){      // avoid other code to override it
                  // create a new scope  which we define all the below







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
Question.prototype.checkAnswer = function(ans){
  if(ans === this.correct){
    console.log('Correct Answer hurra!');
  }else{
    console.log('Wrong answer, try again!');
  }
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


// 3. store them all inside an array
//
var questionsArr = [q1, q2, q3];

var n = Math.floor(Math.random()*questionsArr.length);

questionsArr[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer.'));
questionsArr[n].checkAnswer(answer);


})();
