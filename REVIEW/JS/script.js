// let kg;
// var lbs;


// function calculateToKg(kg, lbs) {
//     lbs = 12;
//     inputName = prompt("Enter your Name");
// 	kg = prompt("Provide your weight in kg");
// 	weight = kg*2.2;
// 	alert(inputName + " weight in "+lbs+ " is " + weight);

// }

// function calculateToLbs(lbs, inputName1) {
//     //inputName = prompt("Enter your Name");
// 	lbs = prompt("Provide your weight in kg");
// 	weight = lbs*2.2;
// 	alert(inputName1 + " weight in "+lbs+ " lbs is " + weight);

// }
// calculateToKg(kg, lbs);
// const inputName1 = "mich";
// calculateToLbs(lbs, inputName1);


//==============

/*
variable = storage
concatenate = combines variables 
prompt = request user input
alert = display results
function = calculate varaiable

*/

// let grades= [98,99,97];


// function calculateAverage(grades){

// 	average = (grades[0] + grades [1]+ grades[2]) /3;
//     console.log(average);
// }

// calculateAverage(grades);


let meter;

function calculateKm(meter) {
    meter= prompt("Please insert speed in km");
    km = meter /1000;
    return(km);
}
alert(calculateKm(meter));


//nested if else statement 

let grades= prompt("Grade");

function myGrade (grades){
      if(grades >100 || grades <0){
            alert ("Please input correct grade")
      }
      else{
            if (grades >= 90){
                  alert("Outstanding");
            }
            else if (grades >=80){
                  alert("Good");
            }
            else if (grades >= 75){
                  alert("Needs improvement");
            }
            else{

                  alert ("Keep Studying")
            }        
      }
}
myGrade (grades)