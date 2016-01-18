<<<<<<< HEAD
var numCorrect = 0;

var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var ans4 = document.getElementById('bonus');
var correctCount = document.getElementById('elCorrect');

var questions = ["Did I grow up in Seattle?", "Do I have arachnaphobia?", "Do I have two cats?", "How young am I?"];
var answers = ["yes", "yes", "no", "37"];
var els = [ans1, ans2, ans3, bonus]

alert("Welcome to my guessing game. I'm going to ask you a few questions to see how well you know me. ");

function game(questions, answers, index) {
  var ques = prompt(questions).toLowerCase();

  if (ques === answers || ques === parseInt(answers)) {
    console.log(ques + ' correct');
    els[index].textContent = ques + ' is correct';
    numCorrect++
=======
var questions = ["Did I grow up in Seattle?", "Do I have arachnaphobia?", "Do I have two cats?"];
var answers = ["yes", "yes", "no"];
var counter = 0;

alert("Welcome to my guessing game. I'm going to ask you a couple of yes or no questions so you can get to know me.");

function updatePage(elId, text) {
  document.getElementById(elId).textContent = text;
}
>>>>>>> 873a78e696c424e385ef63cacab2f1cfae3c41db

  } else {
    console.log(ques + ' is incorrect');
    els[index].textContent = ques + ' is incorrect';
    }
  }

<<<<<<< HEAD
  for (var i = 0; i < questions.length; i++) {
    game(questions[i], answers [i], i);
}

elCorrect.textContent = "You got " + numCorrect + " out of 4 questions!"
=======
function userScore() {
  updatePage("userScore", "You got " + counter + " out of " + questions.length + " correct!");
}


function game(question, answer) {
  var ques = prompt(question)
  console.log("answers to question " + ques);
  console.log(answer + ": answer");
  console.log(answer == ques);

  updatePage("question", question);
  updatePage("answer", answer);

  if(answer == ques) {
    counter +=1
    console.log(counter);
  updatePage("isCorrect", "Congrats! You are correct!  You've guessed " + counter + " out of 3 correct.");
  } else {
  updatePage("isCorrect", "Sorry, you are incorrect.");
  }
};

  for (var i = 0; i < questions.length; i++) {
    game(questions[i], answers [i]);
}
>>>>>>> 873a78e696c424e385ef63cacab2f1cfae3c41db
