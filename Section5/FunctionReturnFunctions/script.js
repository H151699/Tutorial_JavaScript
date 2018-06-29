


/////////////////////
// Functions returning funcitons

function interviewQuestion(job){
  if(job==='designer'){

    return function(name){ // annoynesmou function without name
      console.log(name + ', can you please explain what UX design is?');

    }
  }else if(job ==='teacher'){

    return function(name){
      console.log('What subject do you teach, ' +  name  + '?');
    }
  }else{
    return function(name){
      console.log('Hello' + name + ', what do you do?');
    }
  }
}





var teacherQuestions = interviewQuestion('teacher');
teacherQuestions('Jianyou');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Siri')


// NICE
interviewQuestion('teacher')('Mark');
