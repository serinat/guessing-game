window.onload = function() {

var userName = prompt("Hello. May I ask your name?");
document.getElementById('greeting').innerHTML = "Hello, " + userName + ", thanks for finding me! Now let\'s see how well you know me.";
console.log("This is the userName variable: " + userName);
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
var questions = [
    "Did I grow up in Seattle?",
    "Do I have arachnaphobia?",
    "Do I have two cats?",
    "How young am I?"];
var answers = ["yes", "yes", "no", "37"];
var els = [ans1, ans2, ans3, bonus]
var imgs = [img1, img2, img3, img4]

function game(questions, answers, index, images) {
var ques = prompt(questions).toLowerCase();
  if (ques === answers || ques === parseInt(answers)) {
  console.log(ques + ' correct');
    els[index].textContent = ques + ' is correct';
    imgs[images].innerHTML = '<img src = "rsz_happy_hello_kitty.png">';
    els[index].className = 'correct';
    numCorrect++
  } else {
  console.log(ques + ' is incorrect');
    els[index].textContent = ques + ' is incorrect';
    imgs[images].innerHTML = '<img src = "rsz_sad_hello_kitty.jpg">';
    els[index].className = 'incorrect';
    }
  }

  for (var i = 0; i < questions.length; i++) {
    game(questions[i], answers [i], i, i);
}

elCorrect.textContent = "Thanks for playing, " + userName + "! You got " + numCorrect + " out of 4 questions!"

};
