//////////////////////////////////////

// Closures
/*
  An inner function has always access to
  the variables and prameters of it's outer function,
  even after the outer function has returned.
*/

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
