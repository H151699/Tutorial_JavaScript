
// Closures
// An inner function has always accss to the variables and parameters of its outer funciton.
// even after the outer function has returned.

function retir(retirAge){
  var a = ' year left until retirement. ';
  return function(yearOfBirth){
    var age = 2018 - yearOfBirth;
    console.log((retirAge - age) + a) ;
  }
}



var retirementUS = retir(65);
retirementUS(2000);
retir(65)(2000);


//// :: using closures

function interviewQuestion(job){
  return function(name){
    if(job === 'designer'){
      console.log(name + ' , what type of designer of you?');
    }else if(job === 'teacher'){
        console.log(name + ' , wtf do you teach?');
    }else{
        console.log(name + ' , what can you do for us?');
    }
  }
}


interviewQuestion('teacher')('Atle');


// 1, when call function >>>>> : interviewQuestion('teacher')
//    which will return the inner function
// 2, then call the function with parameter 'name'
//    the execution text will close in over the variable object of the function that we had before(whcih  was the job avariable).
