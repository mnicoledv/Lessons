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

//parseInt () = converted into whole numbers
//parseFloat = used for decimal numbers

let x = 75.68;
console.log(parseInt("75.68"));
//to.fixed(2) - displays two decimal places

//Strict Equality Operator (===)
//doesn't pratice coercion
//compares "sameness of value and data type"

console.log(1===1); // this is true - number value the same
console.log(5==="5"); // this is false - 5 is a number and "5" is considered as string 
console.log(true===1); //false
console.log(null === undefined); //this is false - both data types are different, null is intentional absence and undefined means it hasn't been assigned
console.log("James" === "Daniel"); // this is false - both data types but different value
console.log(true ===true); //this is true - same data type and value
console.log(false===false); // this is true - same data type and value

//Inequality Operator (!=)
// aka Loose Inequality Operator
//compares difference of values regardless of data type
//coercion will takes place

console.log(false != true); //true
console.log (3 != 3.00); //false - because 3 and 3.00 is the same value
console.log (null != undefined); //true - because data types are different
console.log(true != 1); //true

//Strict Inequality Operator (!==)
//data type and difference of values

console.log(false !== true);
console.log (4 !== 4.00); // this is false 
console.log (null !== undefined); //true - because data types are different
console.log(true !== 1); //true

//Greater than (>)
console.log (100>75); //true
console.log (70>180); //false

//Less than
console.log (45<50); //true
console.log(67<45); //false

//Greater than or Equal to

console.log (45>=45); //true
console.log (44>=45); //false

//Less than or Equal to 
console.log (100 <= 100); //true
console.log (1 <= 0.5); //false

//Logical Operators
//  AND (&&) Operator - if there is 'false' in the statement it will automatically sets as false

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && true); //false

console.log (("max == max") && (undefined == null)); 

// max == max - (true) because they have same value
//undefined == null - (true) same value

let kei = true; // true = 1
console.log(kei > 2 && kei < 2); //false


let isOnline = true;
let isBoss = false;
let chatisBoss =isOnline && isBoss;
console.log(chatisBoss); //false -  because there is a false in the statement

//best practice to declare a boolean use the word "is" before the given word

//OR operator (||)
// evaluates to true of either of the operand is true
// if both operands are false the results is false 

console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //false
console.log(false || false); //false

//NOT Operator - kabaligtaran

console.log(!true) //false
console.log(!false) // true

let isAdmin = true;
let isInstructor = "1";
let isAnswer = !isAdmin === isInstructor;

console.log (isAnswer); //false

let faveNum = 333;
let chooseNum = 245;
let isHigher = !(chooseNum > faveNum || faveNum >= chooseNum);

console.log (isHigher); //false


// Solution:
//  chooseNum > faveNum - false
//  faveNum >= chooseNum - true
//  false || true - true
//  !true - false

//EXCERCISE

let isTrue = true;
let isFalse = false;

let isTralse =!(!isFalse != !isFalse && isFalse !== isTrue || (!isTrue != !isFalse && isFalse != !isTrue));


console.log(isTralse); //false

//Solution: 
    // true != true - false
    // false !== true - true
    //false && true = false
  

    // false != true  - true
    // false != true  - true
    //true && false = false

    //false || false = false
    //!false = true

//ACTIVITY

//1. difference between comparison operator and an assignment operator?
      //- comparison operators checks if the values are equal or not while assignment operator assigns the results from the right side of the operator to the left side variable. 
//2. what is Boolean? What does it represent?
      //- data types that answers the question true or false
//3. How is the += operator different than +operator
      // += adds initial variable value, while + adds 2 values. 

//CODE

let num1 = 20;
let num2 = 50;

let Answer1 = (num1 *= num2);
let Answer2 = (Answer1 /= 5);

let isResults = ((Answer1 >= Answer2) && (num1 !== num2)) ;
console.log (Answer1);
console.log (isResults);
  
