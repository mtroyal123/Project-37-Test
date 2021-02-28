var canvas;
var gameState = 0;
var contestantCount, contestant, allContestants;
var database;
var quiz, question;


function setup(){
  canvas = createCanvas(850,400);
   database = firebase.database();
   
 quiz = new Quiz();
 quiz.update();
 quiz.getState();
 quiz.start();

 question = new Question();
}


function draw(){
  background("pink");
 
  question.display();
  
}
