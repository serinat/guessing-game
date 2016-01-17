

    var userName = prompt('Serina')
    alert("Hello" + " " + userName + " " + "very nice to meet you");
      console.log('This is the userName variable: ' + userName);
    if (userName === 'Serina') {
      console.log('Serina is correct');
    } else {
      console.log('You didn\'t guess the correct name.');
      console.log('Hello World');
    }



    {
      var answer = "  "
      var statement="Answer yes or no"
      var answer=prompt("Did I grow up in Seattle?")
      if (answer == "yes")
        {statement="You are correct!"}
        console.log('Yes is correct');
      if (answer == "no")
        {statement="You are incorrect"}
        console.log('No is incorrect');
      alert(statement)
    }

    {
      var answer = "  "
      var statement="Answer yes or no"
      var answer=prompt("Do I have arachnophobia?")
      if (answer == "yes")
        {statement="You are correct!"}
        console.log('Yes is correct');
      if (answer == "no")
        {statement="You are incorrect"}
        console.log('No is incorrect');
      alert(statement)
    }

    {
      var answer = "  "
      var statement="Answer yes or no"
      var answer=prompt("Do I have two cats?")
      if (answer == "yes")
        {statement="You are incorrect"}
        console.log('Yes is incorrect');
      if (answer == "no")
        {statement="You are correct. I have two dogs."}
        console.log('No is correct');
      alert(statement)
    }

    {
      var age = "  "
      var msg="You got it!"
      var age=prompt("How young am I?")
      if (age < 37)
        msg = "Too low";
        console.log('Too low');

      if (age > 37)
        msg = "Too high";
        console.log('Too high');
      alert(msg)
    }
