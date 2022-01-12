
var readlinesync=require('readline-sync');
var score=0;
var questionone="your age is greater than 25?";
var answerone ="yes"
var userAge =readlinesync.question(questionone);
if (userAge==="yes"){
console.log(answerone)
score=score+1
console.log("your score is:"+score)}

//otherwise
else{
console.log("you are wrong");
score=score-1
console.log("your score is:"+score)}
//Question two
var questiontwo="you are from Gujrat?";
var answertwo ="yes"
var userAge =readlinesync.question(questiontwo);
if (userAge==="yes"){
console.log(answertwo)
score=score+1
console.log("your score is:"+score)}

//otherwise
else{
console.log("you are wrong");
score=score-1
console.log("your score is:"+score)}
// question three
var questionthree="are you learning Engeneering in It?";
var answerthree ="no";
var userAge =readlinesync.question(questionthree);
if (userAge==="yes"){
console.log(answerthree)
score=score+1
console.log("your score is:"+score)}

//otherwise
else{
console.log("you are wrong");
score=score-1
console.log("your score is:"+score)}
// quesion four
var questionfour="Are you introvert?";
var answerfour ="yes"
var userAge =readlinesync.question(questionfour);
if (userAge==="yes"){
console.log(answerfour)
score=score+1
console.log("your score is:"+score)}

//otherwise
else{
console.log("you are wrong");
score=score-1
console.log("your score is:"+score)}
// Quession five
var questionfive="Are you tired learnig new things?";
var answerfive ="no";
var userAge =readlinesync.question(questionfive);
if (userAge==="yes"){
console.log(answerfive)
score=score+1
console.log("your score is:"+score)}

//otherwise
else{
console.log("you are wrong");
score=score-1
console.log("your score is:"+score)}