console.log("Yay, you made it to Modulus!")

let stop = false;

function testNaN (number) {
  console.log(stop);
  if ( isNaN (number) ){
    stop = TRUE
    return "Type a ACTUAL number. Please. I'm begging you."
  }else{
  return "We are chill!"}
  }


function SkipCounting (number, skipCount, startingNumber){
  let number = [4, 7]; //Boundary Numbers
  let skipCount = 4; //Number of skipCounting between each element of the sequence, used in FOR Loop
  let difference = number[1] - number[2]; //Difference, mandatory expectation
  let startingNumber = number[1]; //Hint: used in the FOR Loop
  for (let i=1; i<=20; i++){
    even = (startingNumber += skipCount) % 2;
    odd = (startingNumber += skipCount) % 2;
    //if (!=0), odd;
    console.log(number);
    console.log("This number is", even, "; This iteration is number", i+skipCount);
  }
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
  } else {
  console.log("The Biggest Number is", big);
  document.getElementById("large").innerHTML = "Um...I don't get this. Can you please make it easier?";
  }
}
