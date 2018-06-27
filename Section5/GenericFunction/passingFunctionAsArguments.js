


// passing function as arguments.

var years = [ 1998, 1997,1996, 1996, 1995, 2008];

// generic function
function arrayCacl(arr, fn){
  var arrRes = [];
  for(var i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));

  }
  return arrRes;
}


//
function maxHeartRate(el){
  if(el >= 18 &&el <= 81){

    return Math.round(206.9 - (0.67 * el));  // round ~ integer

  } else {

    return -1;
  }

}


//
function isFullAge(el){
  return el >= 18 ;
}

//
function calculateAge(el){
  return 2018 - el;
}



// 1 caculate age
var ages = arrayCacl(years, calculateAge);

// 2 check age over 18
var fullAges = arrayCacl(ages, isFullAge);

// 3 rates = arrayCacl(ages, max)

var rates = arrayCacl(ages, maxHeartRate);



console.log(ages);
console.log(fullAges);
console.log(rates);
