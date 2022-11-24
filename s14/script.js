console.log("connected");

//If statement
// conditional branching statement
// condition is true, a group of statement is executed 
// condition is false, the statement is skipped.

/*
      SYNTAX:
            if (condition){
                  statement 1
                  statement 2
            }
*/
/*
if (20 <= 30){
      console.log ("You are not allowed to enter");
};
let age = prompt ("Enter your age");

function getAge (age){
      if (age<=30) {
            console.log ("Your are not allowed to enter");
      }
      return (age); 
}
getAge (age);

//if-else statement
//2 way decision statement 
//it is used to make decisions and execute the command conditionally.

/*
      Syntax:
            if (condition){
                  statement1
            }

            else if (condition){
                  statement2
            }

            else{

            }
*/

/*
let myAge = 30;
if (myAge == 30)
{
      alert("hello from the code block");
}
else {
      console.log("haller from my block");
}


/*Activity: If-else Statement
let height = prompt("My Height is in cm");

function myHeight(height){
      if (height >= 150){
      
            alert ("Pass the minimum height requirement");
      }
      
      else{
            alert ("Did not p145ass the minimum height requirement");
      }

}
myHeight(height);

*/

//Else if statement
// 2 or more possible outcomes
/*
let price = prompt("Price:");

if (price < 50) {
      console.log("affordable");
}

else if (price <= 75){
      console.log ("pricey");
}
else if (price <= 90){
      console.log ("benta ko muna isang atay ko");
}
else {
      console.log("out of budget, puritang tunay");
}
*/

/*Activity : Else if Statement

let windspeed = prompt("Provide windspeed:");

function currentWindspeed (windspeed){
      if (windspeed <= 30){
            console.log("It is not a typhoon");
      }
      else if (windspeed <= 61){
            console.log("Tropical depression is detected");
      }
      else if (windspeed <= 88){
            console.log("Tropical storm is detected");
      }
      else if (windspeed <= 117){
            console.log("Severe Tropical storm is detected");
      }
      else{
            console.log("Typhoon detected");
      }
}

currentWindspeed (windspeed);
*/

//SWITCH STATEMENT
// it performs different action on different conditions
// compares the same expression to several different values. 

/*
      YOU CAN USE THIS STATEMENT WHEN YOU ARE COMPARING A LIST OF A VALUE AGAINST A SINGLE VARIABLE
*/

/*
      SYNTAX:
            switch (expression){
                  case condition 1:
                        statements 
                        break;
                              -breaks out the switch block-
                              -stops the execution inside the switch block.

                  case condition 2:
                        statements 
                        break;
                  default:
                        -SPECIFIES THE CODE TO RUN IF THERE IS NO MATCH STATEMENT-
                        statement
            }
 */
/*
let day = prompt("Enter a number between 1 to 7");

switch (day){
      case (day = "1"):
      console.log ("Monday");
      break;

      case (day = "2"):
      console.log ("Tuesday");
      break;

      case (day = "3"):
      console.log ("Wednesday");
      break;

      case (day = "4"):
      console.log ("Thursday");
      break;

      case (day = "5"):
      console.log ("Friday");
      break;

      case (day = "6"):
      console.log ("Saturday");
      break;

      case (day = "7"):
      console.log ("Sunday");
      break;

      default:
            console.log("Invalid Number for the week")     
}
*/
/*
let color = prompt ("Provide color:");

function favColor (color){
      switch (color){
            case (color ="BLACK"):
            console.log ("black");
            break;

            case (color ="VIOLET"):
            console.log ("violet");
            break;

            case (color ="PINK"):
            console.log ("pink");
            break;

            default:
            console.log("Color not found");
      }
}
favColor (color);
*/

let name = "Jelly Lumactud";
console.log(name length); // 14
//counts the number of characters and spaces.


//ARRAYS AND OBJECTS

let numbers =[1,54,58,60,75,90,99];
console.log(numbers.length);
//displays the number of elements inside the array.

//OBJECTS INSIDE THE ARRAY

let grades = [
      {first:90},
      {second:92},
      {third: 75},
      {fourth:74}
];

console.log(grades.lenght);
//It counts the properties inside the object
//Properties are also known as "key value pair"

if (numbers.length == 7 && grades.length >= 4){
      console.log("From our Codeblock")
}
else{
      console.log("hindi siya belong. outcast siya");
}
//BONUS: TERNARY OPERATOR

/*
TERNARY OPERATOR 

? - if
: - else
      condition ? <statement>
      :statement
*/

let legalAge = 17;
(legalAge >= 18)? console.log ("legal"): console.log("minor")





/*ACTIVITY

let inputNumber = prompt ("Please input number:");

function givenNumber (inputNumber){//3
      typeOfData = inputNumber%2;   //typeof inputNumber;
      console.log(typeOfData);
       // 3/2 = 1.1
      //3%2 = 1 

      if (typeOfData == ){
            result = inputNumber % 2;
            if (result === 0){
            
                  alert ("This is even");
            }
            else{
                  alert("This is odd");
            }
      }
      else {
            alert("Unexpected Input");
      }    
}
givenNumber (inputNumber);

*/

