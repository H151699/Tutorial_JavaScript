


// ES5
var name5= 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);


// ES6
 const name6 = 'July Simth'; // const : not changable
 let age6 = 23;  // let: block scoped

 //  name6 = 'July Miller';  // error

 console.log(name6);




// ES5
function driversLicence5(passedTest){


  if(passedTest){
    var firstName = 'John';
    var yearOfBirth = 1999;

    console.log(firstName+ ', born in '
    + yearOfBirth + ', is now offcially allowed to drive a car.');

  }

}


driversLicence5(true);


// ES6  using let
function driversLicence6(passedTest){
  let firstName;
  const yearOfBirth = 1990;

  if(passedTest){
    firstName = 'John';


    console.log(firstName + ', born in '
    + yearOfBirth + ', is now offcially allowed to drive a car.');
  }
/**  here is out of block
  console.log(firstName + ', born in '
  + yearOfBirth + ', is nowoffcially allowed to drive a car.');
*/
}

driversLicence6(true);



let i = 23; // block scoped
for(let i = 0; i<5; i++){

  console.log(i);
}

console.log(i); // print 23  pga  // block scoped

// printout
/*
0,
1,
2,
3,
4,

23

*/
