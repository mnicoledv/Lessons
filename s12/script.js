/*

    Javascript - creates dynamically updating content
                - control multimedia, animate images
    
    
    Dynamic Code

        Server side - ability to update display of the webpage/app
                    - to show different things and generate new content as required

        Client side - generates new content inside the client's browser

console.log ("hello world");

document.getElementById ("sample") .innerHTML = ("Welcome to Javascript");

//the most common way to display data in HTML

//2. document.write() - testing purposes

document.write("Hello method");

//3. alert () - display a window in the web browser.

alert ("I am an alert!");

//4. console.log() - for debugging purposes 
console.log ("This is a console log");

// single line comment
/* multi-line comment */

const pi = 3.1416;
//const variables cannot be reassigned
console.log (pi);

/*
pi = 1.20
console.log(pi);
*/

let name ="Jem";
//let us re-assignable
console.log (name);
name="Dahl";

console.log (name);

/*
let name ="Joey";
//we cannot re-decalre the variable itself
console.log (name)
*/
                                                                                                                                            
//Primitive Data Types
let name1 = "Bryan";
//String
console.log (name1);
console.log(typeof name1);

//typeof - enables us to know what data type is it

let age= 15;
console.log (typeof age);

let grade = 90.5;
console.log (typeof grade)

let isPresent = true;
//boolean - answer true or false
//isPresent - proper namin convention for assigning a boolean value;


console.log (isPresent);
console.log (typeof isPresent);


let myCopy;
console.log(myCopy);

//output is undefined beacuse there is no value assigned into it.

let option1 =null;
console.log(option1);

/*
console.log (*isPresent);
console.log (typeof *isPresent);
*/

//we can use a special characeter before word when naming a variable
//some special characters do not work for assigning a variable

let $_year = 2022;
console.log($_year);

let state = 'Washington';
console.log (state);

//back sticks are working for Strings only

//object
let person ={
    //property: value 
    //key value pair

    name: "Jose Rizal", //string
    age: 30, //int/number
    address: "Calamba, Laguna", //string
    isDoctor: true,
    spouse: null,
    siblings: [
        "Paciano",
        "Saturnina",
        "Lucia",
        "Trinidad",
        "Narcisa",
        "Olympia",
        "Concepcion",
        "Maria",
        "Josefa",
    ] //array
};

console.log(person);
console.log(person.name);
console.log(person.siblings);
console.log(person.siblings[3]);

//Array

let fruits = ["mango", "apple", "watermelon", "kiwi", "rambutan",];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);

// Function
    //Function Declaration
    //Function Keyword
    //Function name and parenthesis (holds the parameters)
    //curly braces'{}' - determines its block of codes, statements are written inside this code block.

function greeting (firstName, lastName) 

//greeting - user defined function name
//(variables inside the parenthesis) - user defined parameters
//parameters are also known as arguments, properties or attributes.
//parameters are named variables passed into a function.
//Imports arguments in the function

{
    console.log('My name is $(firstName), $(lastName), it was nice to meet you!');
}

greeting("Gerard", "Way"); //Invoke function calls
greeting("Chester", "Bennington");


//Using a return statement

function product (a,b) {
    console.log("Product");
    return (a*b);
    //stops the execution of a function and returns a value.

}


//1.
function average [a,b,c] {
    console.log("average");
    return (a + b + c /3);
}

console.log (average(99,100,97));
//correct ans for 1

function averageNum (num1, num2, num3) {
    return (num1+num2+num3)/3;
}

console.log(averageNum(1,2,3));

//2.
function kilometers (a,b) {
    console.log("kilometers");
    return (a/b);
}
console.log (kilometers(100,1000));

//correct ans for 2

function convertNumbers (meters) {
    const m= 1000;
    console.log("Result in kilometers:");
    return (meters/m);
}
console.log(convertNumbers(20));