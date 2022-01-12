// using function play quiz
var readlinesync=require('readline-sync');
var score=0;
function play (question,answer){
   var useranswer=readlinesync.question(question)
  if(useranswer===answer){
    console.log("you are right")
    score=score+1
  }else{
    console.log("you are wrong")
    score=score-1
  }
  console.log("your score is:",score)
  console.log("right answer is:",answer)
}
play("what is your hobby?","learning" )
play("when you graduate?","2020")
play("what is your age?","23")
play("how many hours you work","18")
play ("which is your main target","naman")
play("what is your favourate dish","pavbhaji")
play ("which is your fav song","vagyo re dhol")