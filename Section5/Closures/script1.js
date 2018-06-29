//////////////////////////////////////

// Closures
/*
  An inner function has always access to
  the variables and prameters of it's outer function,
  even after the outer function has returned.
*/
/*

function retirement(retirementAge){
  var a ='  years left until retirement.';

  return function(yearofBirth){
    var age = 2018 - yearofBirth;

    console.log((retirementAge - age) + a);
  }


}


var retirementUS =retirement(66);
// retirementUS(1990);

// retirement(66)(1990);


var retirementGermany = retirement(65);

var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);
retirementUS(1990);
*/



/*  Orignal way


function interviewQuestion(job){
  if(job==='designer'){

    return function(name){ // annoynesmou function without name
      console.log(name + ', can you please explain what UX design is?');

    }
  }else if(job ==='teacher'){

    return function(name){
      console.log('What subject do you teach, ' +  name  + '?');
    }
  }else{
    return function(name){
      console.log('Hello' + name + ', what do you do?');
    }
  }
}

*/

// Closures  way
function interviewQuestion(job){

  return function(name) {
    if(job === 'designer'){
      console.log(name + ', can you please explain what UX design is?');

    }else if (job === 'teacher') {
      console.log('What subject do you teach, ' +  name  + '?');

    }else {
      console.log('Hello' + name + ', what do you do?');

    }
  }
}
interviewQuestion('teacher')('John');
