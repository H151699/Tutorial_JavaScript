

// "Closures are nothing but FUNCTIONS WITH PRESERVED DATA"

/*

// lexical scoping

var passed = 3

var addTo = function(){
  var inner =2;
  return passed +inner;

};

 console.dir(addTo);
// console.log(addTo());
*/


var addTo = function(passed){

  var add = function(inner){
    return passed + inner;

  };

  return add;


};


var addThree = new addTo(3);
var addFour = new addTo(4);

console.log(addThree(1)); // inner = 1 then  + 3 = 4
console.log(addFour(2)); // inner = 2 then  + 4 = 6
