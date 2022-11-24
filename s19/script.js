
console.log("connected");
//ES6 Updates (2015)
//Exponent Operator
//before Es6, Math.pow() is being used for exponent operator.

const firstNum = Math.pow(8,2);
console.log(firstNum);

//ES6 version, you can use **;
const secondNum = 8 ** 2;
console.log(secondNum);

//Template Literals
//Allows to write strings without using the concatenation operator (+)
//greatly helps with code readability
//pre-template literal string
    //using single quotes ('') or double quotes ("")

const name = 'John';
let message = "Hello" + "" + name + "! Welcome to JavaScript Programming";

//Strings using Template Literals
    //uses backticks (``) and ${}
message = `Hello ${name}! Welcome to my house`;

console.log(`Message with template literals: ${message}`);

//Template Literals can use multi line as well
const anotherMessage =
`
    ${name} attended a math competition.
    He won it by solving the problem
    8 ** 2 with the solution of 
    ${firstNum}.

`

console.log(anotherMessage);

//Template Literals allow us to write strings with embedded JavaScript expressions
//Expressions - these are any valid unit of code that resolved to a value
//${} - used to include JS expressions in "strings" using template literals.

const interestRate = 0.5;
const principal = 1050;

console.log(`The interest on your saving's account is ${principal * interestRate}`);

//Array Destructuring
//allows to unpack elements in an arrays into distinct variables.
//allows to name array elements with variables instead of using numbers.
//helps us with code readability

/*
Syntax:
let/const [variableName, variableName] = array;
*/

const fullName = ["Juan", "Dela", "Cruz"];
const pet = ["geeko", "tarantula", "centipede"];

//pre-array destructing
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);

console.log(pet[0]);
console.log(pet[1]);
console.log(pet[2]);

//convert the message using values coming from array elements.
console.log(`Hello firstname, middlename, lastname! It's nice to meet you`);

//solution:
console.log(`Hello ${fullName[0]}, ${fullName[1]}, ${fullName[2]}! It was nice to meet you!`);

//using Array Destructuring using ES6
const [firstName, middleName, lastName] = fullName;

const [pet1, pet2 , pet3] = pet;

//converted each elements into distinct variables
console.log(firstName);
console.log(middleName);
console.log(lastName);

console.log(`Hello ${firstName}, ${middleName}, ${lastName}. It's nice to meet you!`);

//using array destructuring in a function
function introduce() {
    console.log(`Hi! My name is ${firstName} ${middleName} ${lastName}`);

    console.log(`I have three pets! I have ${pet1}, ${pet2}, ${pet3}`);
}

introduce();

//using array destructuring in a function using parameters and arguments
function introduce_2(fn, mn, ln) {
    console.log(`Hi! My name is ${fn} ${mn} ${ln}`);

    console.log(`I have three pets! I have ${pet1}, ${pet2}, ${pet3}`);
}

introduce_2(firstName, middleName, lastName);


//EXCERCISE

let students = ["John", "Jane", "Judy"];

let result = students.forEach(students => console.log(students));


//ANSWER TO THE ACTIVITY 

class Weight {
    constructor (name, kg){
        this.name = name;
        this.kilograms = kg;
        this.pounds = kg * 2.2;
        this.convertedWeight = function (){
            console.log(`${this.name}'s weight in lbs is ${this.pounds}`);
        }
    }
}

let poundsWeight = new Weight ("Jelly, 60");
pounds.Weight.convertedWeight();

