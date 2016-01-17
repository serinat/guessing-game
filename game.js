var questions = ["Did I grow up in Seattle?", "Do I have arachnaphobia?", "Do I have two cats?"];
var answers = ["yes", "yes", "no"];
var counter = 0;

alert("Welcome to my guessing game. I'm going to ask you a couple of yes or no questions so you can get to know me.");

function updatePage(elId, text) {
  document.getElementById(elId).textContent = text;
}


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
