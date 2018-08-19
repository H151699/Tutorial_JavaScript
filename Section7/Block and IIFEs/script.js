
/////////////////////////////////
/// BLOCKS AND IFFEs

// repeat: var is function scoped
//         let is block scoped

 //ES6
{
  const a = 1;
  let b = 2;
  var c = 3;

}

// console.log(a+b);
console.log(c);

// ES5


// IFFE
(function(){
  var c = 3;

})();

//console.log(c);
