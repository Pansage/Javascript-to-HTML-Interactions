console.log ("You made it to Modulus.js! A double Huzzah for you!")

let number = [4, 7]; //Boundary Numbers
let skipCount = 4; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[1] - number[2]; //Difference, mandatory expectation
let startingNumber = number[1]; //Hint: used in the FOR Loop
for (let i=1; i<=20; i++){
  even = (startingNumber += skipCount) % 2;
  odd = (startingNumber += skipCount) % 2;
  //if (!=0), odd;
  console.log(number);
  console.log("This number is", even, "; This iteration is number", i+skipCount); //Example of Concatenating
}

let big;
let hour = 24;
//if (>=6, <=11 || <12) console.log('Mmgh, is it morning already?');
//else if (<=18 || >=12) console.log('Lunch time! Lets see what we have...');
//else if (<=24) console.console.log('Night night!');
//else console.console.log('Noooo, thats wrooong!');

if (1 > 2) big = 1;
else if (1 > 2) big = 2;
else console.log ('The numbers are the same!')

console.log("The Biggest Number is", big);

// always a comparison of > to <

function isLandscape (width, height) {
  if (width == height) return 'Square'; //must be first, return will not allow rest of code to run
  return (width > height) ? 'Landscape' : 'Portrait'; //ternary operator example
}

let width = 800;
let height = 800;
console.log("This display geometry is", isLandscape (width, height)); //Difference between calling functions with arguements and sending to parameter's, local variables

isLandscape(500, 300)

const testNumber = 30;
console.log(fizzBuzz(testNumber)); //Calling Function

function fizzBuzz (input) { //These match order of logic
  if ((input % 3 === 0 ) && (input % 5 === 0)) return 'FizzBuzz';
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return 'Buzz';
  if (typeof input !=='number') return 'NaN'; //Change to NaN
  return "This test number does nothing important. The input was " + input + ".";
}

//Variable is an array for security
const marks = [80, 25, 74, 70, 68, 41]; //add grades as an array

//Use the calculatedGrade function as an output to the console
//Note: example of using functions more than once (calculateAverage is used in console.log and calculatedGrade)
console.log ("My letter grade is", calculatedGrade (marks), "because my numerical average is", calculateAverage (marks));

//This function uses another function, call Single Concern Function (able to use either function for various purposes)
function calculatedGrade (marks) {
  const average = calculateAverage (marks);
  if (average > 89) return 'A - You are awesome!'; //Add appropriate grade or feedback
  if (average > 79) return 'B - eh, could do better.'; //Add approriate conditional
  if (average > 69) return 'C - Maybe...';
  if (average > 59) return 'D - STUDY MAN!';
  return F; //This is the last grade left, using the funnel image (metaphor)
}
function calculteAverage (marks) {
  let sum = 0;
  for (let mark of marks) sum += mark; //Example of reading an array and one line to add up the sum of all the grades
  return sum / marks.length; //"Divide the total marks by the number of grades"
}
