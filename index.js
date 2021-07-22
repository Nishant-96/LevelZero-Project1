var readlineSync= require("readline-sync");

var userName = readlineSync.question("What is your name ? \n");

var score = 0;

console.log("\nWelcome ", userName + "\n\nTo How well do you KNOW ME");
console.log("\n\nBefore starting you should know for each question,enter only the option number and press Enter..... Let's Get Started !!!\n")


//questions list 
var questions= [questionOne = {
  question: "\nWho is my favorite superhero ?\n\n"+"[1.] Spiderman \n[2.] Superman\n[3.] Krrish\n[4.] shaktimaan \n\n",
  answer: "3"
}, questionTwo = {
  question: "\nWhat is my favourite song ?\n\n"+"[1.] Pyres \n[2.] Do Din\n[3.] Numb\n[4.] Behind Blue Eyes \n\n",
  answer: "4"
}, questionThree ={
  question: "\nWhat do i like the most ?\n\n"+"[1.] Momo \n[2.] Chowmein\n[3.] Pav bhaji\n[4.] Pizza \n\n",
  answer: "1"
}, questionFour ={
  question: "\nwhat is my favourite sport ?\n\n"+"[1.] Cricket \n[2.] Basket Ball\n[3.] Table Tennis\n[4.] Squash \n\n",
  answer: "3"
}, questionFive ={
  question: "\nwhat is my nickname ?\n\n"+"[1.] Sunny \n[2.] Sonu\n[3.] Nik\n[4.] Monu \n\n",
  answer: "2"
}];
//function for quiz 

function play(question, answer){
  var yourAnswer = readlineSync.question(question);

  if(yourAnswer===answer){
    score++;
    console.log("You are right !");
  }else{
    console.log("Oops! So close !");
  }
  console.log("Your current score: ", score)
  console.log("---------------------------------")
  
}





//execution
for (i=0 ; i<questions.length ; i++ ){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
 }

//Scores

 console.log("Great", userName + " your Final Score is : ", score);
 
var highScores=[
  {
    playerName : "Nishant",
    score : 5
  }, 
  
  {
    playerName : "Kishor ",
    score : 3
  }];

 console.log("Check out the High Scores: \n");
 console.table(highScores);
 console.log("\n Send me a screenshot if you scored more.") 

