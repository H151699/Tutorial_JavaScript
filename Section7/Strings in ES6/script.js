

///

let firstName = 'John';
let lastName = 'Smith';

const yearOfBirth = 1985;

function calcAge(year){
  return 2018 - year;
}




// ES5
console.log('This is '  + firstName + ' ' + lastName + '. He was borin in '
            + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth));




// ES6
// using backticks to tell javascript that we wanna use a template literal
console.log(`This is ${firstName} ${lastName}.
              He was born in ${yearOfBirth}.
              Today, he is ${calcAge(yearOfBirth)}` );


const n =`${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(firstName.repeat(2));
console.log(`${firstName} `.repeat(5));
