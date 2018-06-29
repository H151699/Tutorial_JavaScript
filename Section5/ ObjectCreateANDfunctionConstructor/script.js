// Function constructor
/*

var Person = function(name, yearOfBirth, job){
  this.name=name;
  this.yearOfBirth=yearOfBirth;
  this.job=job;
//this.caculateAge=function(){console.log(2018-this.yearOfBirth);}
}


/*****************************************************************/

/*
// create a prototype Constructor
Person.prototype.caculateAge =
  function(){
    console.log(2018-this.yearOfBirth);
  };

//Person.prototype.lastName='Smith';

var john = new Person('John', 1985, 'brogrammer');
var jane = new Person('Jane', 2008, 'designer');
var alex = new Person('Alex', 2000, 'designer');

john.caculateAge();
jane.caculateAge();
alex.caculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(alex.lastName);
*/



// Object.create
// 1. write prototype as a simple object

var personProto = {
  caculateAge:function(){
    console.log(2018-this.yearOfBirth);
  }
};

var john = Object.create(personProto);

john.name='John';
john.yearOfBirth = 1998;
john.job='teacher';

var jane = Object.create(personProto,
  {
    name:{value:'Jane'},
    yearOfBirth:{value:1888},
    job:{value:'designer'}

});
