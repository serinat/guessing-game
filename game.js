var userName = prompt('What\'s your name?')
  alert("Hello" + " " + userName + " " + "very nice to meet you");

var question1 = prompt("Did I grow up in Seattle?")
  console.log("This is my first question variable" + " " + question1);

if (question1 === "yes") {
  console.log("Yes is correct!");
  alert("Yes is correct!");
} else if (question1 === "no") {
  console.log("No is incorrect");
  alert("No is incorrect");
};

var question2 = prompt("Do I have arachnaphobia?")
  console.log("This is my second question variable" + " " + question2);

if (question2 === "yes") {
  console.log("Yes is correct!");
  alert("Yes is correct!");
} else if (question2 === "no") {
  console.log("No is incorrect");
  alert("No is incorrect");
};

var question3 = prompt("Do I have two cats?")
  console.log("This is my third question variable" + " " + question3);

if (question3 === "yes") {
  console.log("Yes is incorrect");
  alert("Yes is incorrect");
} else if (question3 === "no") {
  console.log("No is correct. I have two dogs");
  alert("No is correct. I have two dogs");
};

var question4 = prompt("How young am I?")
  console.log("This is my fourth question variable" + " " + question4);

if (question4 < "37") {
  console.log("You are too low");
  alert("You are too low");
} else if (question4 > "37") {
  console.log("You are too high");
  alert("You are too high");
};
