var userName = prompt('What\'s your name?')
  alert("Hello" + " " + userName + " " + "very nice to meet you");

var question1 = prompt("Did I grow up in Seattle?")
  console.log("This is my first question variable" + " " + question1);

if (question1 ==="yes" || question1 ==="y" || question1 ==="YES" || question1 ==="Y") {
  console.log(question1 + " " + "is correct!");
  alert(question1 + " " + "is correct!");


} else if (question1 === "no" || question1 === "n" || question1 === "NO" || question1 === "N") {
  console.log(question1 + " " + "is incorrect");
  alert(question1 + " " + "is incorrect");
}

var question2 = prompt("Do I have arachnaphobia?")
  console.log("This is my second question variable" + " " + question2);

if (question2 === "yes" || question2 === "y" || question2 === "YES" || question2 === "Y") {
  console.log(question2 + " " + "is correct!");
  alert(question2 + " " + "is correct!");

} else if (question2 === "no" || question2 === "n" || question2 ==="NO" || question2 ==="N") {
  console.log(question2 + " " + "is incorrect");
  alert(question2 + " " + "is incorrect");
}

var question3 = prompt("Do I have two cats?")
  console.log("This is my third question variable" + " " + question3);

if (question3 === "yes" || question3 === "y" || question3 === "YES" || question3 === "Y") {
  console.log(question3 + " " + "is incorrect");
  alert(question3 + " " + "is incorrect");
} else if (question3 === "no" || question3 === "n" || question3 === "NO" || question3 === "N") {
  console.log(question3 + " " + "is correct. I have two dogs");
  alert(question3 + " " + "is correct. I have two dogs");
}

var question4 = prompt("How young am I?")
  console.log("This is my fourth question variable" + " " + question4);

if (question4 < "37") {
  console.log("You are too low");
  alert("You are too low");
} else if (question4 > "37") {
  console.log("You are too high");
  alert("You are too high");
}
