

// Primitives vs Objects


//Primitives
var a =23;
var b = a;

a = 46;

console.log(a);
console.log(b);


// bojects
var obj1 =
{ name: 'John',
  age:22
};

var obj2 = obj1;
obj1.age =30;

console.log(obj1.age);
console.log(obj2.age);

// Functions
var age=25;
var obj={
  name:'ccc',
  city:'Lisbon'

};


function change(a, b){
  a =30;
  b.city ='NY'
}

change(age, obj);

console.log(age);
console.log(obj.city);
