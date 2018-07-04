

// 9.6: JavaScript Closure - p5.js Tutorial

// Closure is a function  being enclosed in another function
var x = 0;
var timer1;
var timer2;

function setup(){

  createCanvas(200, 200);
  timer1 = createP('timer 1');
  timer2 = createP('timer 2');

  makeTimer(timer1, 500);
  makeTimer(timer2, 300);

}


// eachtime call 'maketimer(),
// create a counter
// set interval
// and function makes use of that paticular counter

function makeTimer(elt, wait){ // eachtime make the timer, get a new counter
  var counter = 0;
  setInterval(timeIt, wait);

      function timeIt(){
        elt.html(counter);   // elt: is to take the Dom element that
                            // passed inn then use update that ones'paticular
      //  timer1.html(counter);
        counter++;
      }

}




function draw(){
  background(50);
  stroke(255);
  line(x, 0, x, height);

  x = x+3;
    if(x > width){
      x = 0;
    }
}
