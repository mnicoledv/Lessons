console.log("connected");
//FOR LOOPS - repeats a block of code as long a certain condition is met.

//used to execute a block of code for a certain number of times. 
/*
      SYNTAX:

      for (initialization; condition; increment){
            //code
      }

      USAGES:
            1. Initialization - initialize the counter variables and EVALUATED ONCE uncoditionally before the first execution of the loop body. 

            2. Condition - it is evaluated at the beginning of each integration (loop)

                  - if true, the loop statements execute 
                  - if false, loop execution ends

            3. Increment - updates the loop counter with a new value each time the loop runs.       

*/

for (let i = 0; i<=5; i++){

      //    i= 0
      //    true
      //    i++ = 1

      console.log(`This is number ${i}`);
}

let herName = "Lady Ada Augusta Byron King";

console.log(herName.length);
console.log(herName[6]);
console.log(herName[13]);
 //index - position of the character in a string

//displaying the initial value outside the FOR loop statement
let letter = 0;
for(letter; letter<herName.length; letter++)
{
      console.log(herName[letter]);
      //it displays next line per character
}

//FOR loop in an array
let fruits = ["atis", "mango", "durian", "apple","mango"];

console.log(fruits[2]); //durian
console.log(fruits[0]); //atis
console.log(fruits.length); //5

let index= 0; 
for(index; index<fruits.length; index++)
{
      console.log(fruits[index]);
      //displays the element of an array
}

//FOR loop for objects

let cars =[
      {brand: "Toyota", type: "Sedan"},
      {brand: "Mazda", type: "Hatchback"},
      {brand: "BMW", type:"Sedan"}
];

let x=0;
for (x; x<cars.length; x++){
      console.log(cars[x]);
      //it displays object properties of an array
      console.log(cars[x].brand);
      //it displays the brand inside the object
      console.log(cars[x].type);
      //it displays the type inside the object
}

//WHILE LOOP

/*

      SYNTAX:
            while (condition){
                  statment
            }
*/
/*
let count = 5;
while (count > 0){
      console.log(count);
      count--;
}
*/
/* EXCERCISE (attempt)
let count = 20;
      prompt("ENTER VALUES FROM 0 TO 20");

      function counter (count){
            while (count > 0){
                  console.log(count)
                  count--;
            }      

            if (count )
      }
counter(count);
*/

//SOLUTION A:

let b= 20;
for (b; b >= 0; b--){
      if (b % 2 === 0) //to know if number is even (divsible by two)
            {
            console.log(`number: ${b}`);
            }     
      }

      let userInput = prompt ("Enter a number between 0 to 20");

      function counting (b) {
            for (b; b >= 0; b--){
                  if (b%2 === 0){
                        console.log(b);
                  }
            }
      }
counting (userInput)