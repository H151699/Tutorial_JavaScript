//////////////////////////////////////

// Bind Call and apply

var jianyou = {
  name: 'Jianyou',
  age:22,
  job:'brogrammer',
  presentation: function(style, timeOfDay){
    if(style === 'formal'){
      console.log(
        'Good '
      + timeOfDay
      + ', Ladyes and gentalemen! I\'m '+ this.name
      + ', I\'m a ' + this.job
      + ', and I\'m a ' + this.age + ' years old');

    }else if(style === 'friendly'){
      console.log(
        'Hey! What\'s popping?'
        + ', I\'m ' + this.name
        + ', I\'m a ' + this.job
        + ', and I\'m a ' + this.age + ' years old. Have a nice '
        + timeOfDay + '.');


    }
  }
}

var ali= {
  name: 'Ali',
  age: 21,
  job: 'designer'
};

jianyou.presentation('formal', 'morning');
// using call message, that allow us to set 'this variable' ehre in the first argument
jianyou.presentation.call(ali, 'friendly', 'afternoon');

 // jianyou.presentation.apply(ali, ['friendly', 'afternoon']);



 var jianyouFrindly = jianyou.presentation.bind(jianyou, 'friendly');
 jianyouFrindly('morning');
 jianyouFrindly('night');




var aliFormal = jianyou.presentation.bind(ali, 'friendly');
aliFormal('afternoon');


/********************************************************************************/
// using bind method



var years = [ 2000, 1997,1996, 1996, 1995, 2006];

// generic function
function arrayCacl(arr, fn){
  var arrRes = [];
  for(var i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));

  }
  return arrRes;
}


//
function calculateAge(el){
  return 2018 - el;
}

//
function isFullAge(limit, el){
  return el >= limit ;
}


var ages = arrayCacl(years, calculateAge);


// bind
var fullJapan = arrayCacl(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
