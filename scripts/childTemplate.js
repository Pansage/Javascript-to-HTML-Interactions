console.log ("You made it to the childTemplate.js! A double Huzzah for you!") //Debugging line to console, ensuring javascript line.

function main () {

  let firstNumber, secondNumber; //Variables particular to JavaScript Assignment, makes it work

  // Get the value of the Height Input Field, id="textfield1"
  firstNumber = document.getElementById("textfield1").value;

  //Validate by ALERT or HTML Text in p-tag
  document.getElementById("validityTest1").innerHTML = alert( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  // Get the value of the Height Input Field, id="textfield2"
  secondNumber = document.getElementById("textfield2").value;

  //Validate by ALERT or HTML Text in p-tag
  document.getElementById("validityTest2").innerHTML = alert( testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true) {
    document.getElementById("answer").innerHTML = "Restart because I said so." //Change to more appropriate message
  }
  else {
    //Difference between calling functions with arguements and sending to parameter's, local variables
    console.log("What did you say?", geometry (firstNumber, secondNumber)); // Change to more appropriate message
    document.getElementById("answer").innerHTML = "What did you say? " + geometry (firstNumber, secondNumber);
  }
}
