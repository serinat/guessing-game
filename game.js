var numCorrect = 0;

var ans1 = document.getElementById('a1');
var ans2 = document.getElementById('a2');
var ans3 = document.getElementById('a3');
var ans4 = document.getElementById('bonus');
var correctCount = document.getElementById('elCorrect');
var img1 = document.getElementById('im1');
var img2 = document.getElementById('im2');
var img3 = document.getElementById('im3');
var img4 = document.getElementById('im4');
var el1 = document.getElementById('a1');
var el2 = document.getElementById('a2');
var el3 = document.getElementById('a3');
var el4 = document.getElementById('bonus');
el1.className = 'correct';
el2.className = 'correct';
el3.className = 'correct';
el4.className = 'correct';

var questions = ["Did I grow up in Seattle?", "Do I have arachnaphobia?", "Do I have two cats?", "How young am I?"];
var answers = ["yes", "yes", "no", "37"];
var els = [ans1, ans2, ans3, bonus]
var imgs = [img1, img2, img3, img4]

alert("Welcome to my guessing game!  My name is Serina, and I'm going to ask you a few questions to see how well you know me. ");

function game(questions, answers, index, images) {
  var ques = prompt(questions).toLowerCase();

  if (ques === answers || ques === parseInt(answers)) {
    console.log(ques + ' correct');
    els[index].textContent = ques + ' is correct';
    imgs[images].innerHTML = '<img src = "rsz_happy_hello_kitty.png">';
    numCorrect++

  } else {
    console.log(ques + ' is incorrect');
    els[index].textContent = ques + ' is incorrect';
    imgs[images].innerHTML = '<img src = "rsz_sad_hello_kitty.jpg">';
    }
  }

  for (var i = 0; i < questions.length; i++) {
    game(questions[i], answers [i], i, i);
}

elCorrect.textContent = "You got " + numCorrect + " out of 4 questions!"
