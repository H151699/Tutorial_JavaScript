
/// Arrow function
const years = [1990, 1965, 1982, 1973];

// ES5
var ages5 = years.map(function(el){
    return 2018 - el;
});

console.log(ages5);



// ES6
 let ages6 = years.map(el => 2018 - el);

 console.log(ages6);



ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);


ages6 = years.map((el, index)=>
  {
    const now = new Date().getFullYear();
    const aget = now - el;
    return `Age element ${index + 1}: ${2018 - el}.`
  });

  console.log(ages6);
