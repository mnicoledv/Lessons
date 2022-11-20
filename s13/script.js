console.log("Connected");

//JS Operators
//symbols used to manipulate values/operands

//used to perform specific mathematical and logical computation in operands.

//1. Assignment Operators
// represents the equal symbol (=)

let a = 14;
a = 18;

let b = a;
console.log (b);

//in this sample, using let can reassign the values of a variable.

//2. Arithmetic Operators - mathematical operations on a numerical values/operands and returns a single numerical value.

console.log(20+30); //Primitve Data Type

console.log("20+30"); //String Concatenation or plain concatenation//

//concatenation links or combines 2 string together

console.log (20-10); //Subtraction/difference (-)

console.log ("50"-"10"); //Type Coercion - automatic or implicit conversion of values from one data type to another

let val1 = 50;
let val2 ='30';
let diff = val1-val2;

console.log(diff); //type coercion

console.log("twenty" - "ten");
//NaN - Not a Number

//Division (/)
console.log(50/5); //Number under primitive data type

console.log("50"/"5");

console.log ("fifty"/"five");

//Modulus Division (modulo - %)

console.log(100%3); //1 - remainder


//Increment (++) and Decrement (--)

let c = 30;
console.log(c-- , "ten"); //31

//(++) adds 1

console.log(c); //31 - the existing value has been added previously so that is why the new value displayed the same.



/*
  If the operand comes first before the operator, it displays the value of the operand before performing arithmetic operation.
 */

console.log(--c); //30

//(--) resets the new value

console.log(c); //30

console.log(c++); //30
console.log(c);

console.log(c--);
console.log(c);

//Excercise

//1.
let d=22

console.log(c+d);

//2.
console.log(30+22);

//3.
console.log(5*(c-d))


//Compound Assignment Operator
// - shortcut for arithmetic and assinment operation.
// - performs mathematical operation than assigning the result back to the variable.

//Addition Assignment Operator (+=);

let i = 15;
console.log(i += 3); //adds number in the initial value

console.log(i); //18

//Subtraction Assignment Operaators (-=)

console.log(i -= 10) //8

//Multiplication Assignment Operator (*=)

console.log(i *= 15); //120

//i = 8
// 8*15 = 120

//Division Assignment Operator (/=)

console.log(i /= 2); //60

//i = 120
// 120/2 = 60

//Modulus Assignment Operator (%=)

console.log(i %= 8); //remainder is 4

//Companion Operators

//compares two operands and returns a logical value (true or false)

/*

        < = less than
        > = greater than

*/

// Equality Operator (==) aka. "Loose equality"
// compares the same value regardless of data type because of coercion

console.log("Jan" == "Jan"); //true
console.log("Jan" == "Jen"); //false

console.log(true==true); //true
console.log(false==true); //false
console.log(true==false); //false
console.log(false==false); //true
console.log(null==undefined); //true

console.log("20"==20);//true because of coercion

/*

Binary Numbers
    1 = true
    0 = false

*/ 

console.log(true==1); //true
console.log(true==2); //true
console.log(false==0); //true
console.log(false==1); //false

console.log(4.00==4) //true

//Type coercion - implicit convertion of values from one data type to another