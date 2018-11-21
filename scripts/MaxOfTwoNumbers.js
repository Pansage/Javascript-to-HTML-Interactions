console.log("Yay, you made it to Maximum Numbers!")

let stop = false;

function testNaN (number) {
  console.log(stop);
  if ( isNaN (number) ){
    stop = TRUE
    return "Type a ACTUAL number. Please. I'm begging you."
  }else{
  return "We are chill!"}
  }


function geometry (one, two){
  if (one > two) return one;
  else if (one < two) return two;
  else console.log ('The numbers are the same!')
  }

function main () {

    //Get the value of the Width Input Field
    firstNumber = document.getElementById("textfield1").value;

    //Validate if User typed a Number, as validated by TRUE
  document.getElementById("validatityTest1").innerHTML = alert(testNaN (firstNumber) );
  document.getElementById("validatityTest1").innerHTML = testNaN (firstNumber);
  //Get the value of the Height Input Field, id=textfield2
  secondNumber = document.getElementById("textfield2").value;

  document.getElementById("validatityTest2").innerHTML = alert(testNaN (secondNumber) );
  document.getElementById("validatityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true){
  document.getElementById("large").innerHTML = "Restart, please and thank you!"
  }

  else {
  console.log("The Biggest Number is", geometry(firstNumber,secondNumber));
  document.getElementById("large").innerHTML = "Um...I don't get this. Can you please make it easier?";
}
}
