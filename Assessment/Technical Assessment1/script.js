let count = 2;
while (count >= 0){
  emailAdd= prompt("Enter username or email");
  //console.log("Email: "+  emailAdd );

  pass= prompt("Enter password");
  //console.log("password: "+ pass);

  if (emailAdd == "student@mail.com" && pass == "discovery") {
    alert ("Successfully Login");
    break; 
  }
  else {
    alert("Login Failed Now only "+ count +" login attempts");
    count--;
  }
}


//var name //declaration = creation of varaible
//let name = "mich" //initialization = nagseset ka ng starting value/default sa variable

/*
VARIABLES

firstname = prompt("enter first name: ");
lastname = prompt("enter last name: ");

fullname = firstname +" "+ lastname
//alert(fullname);
alert(firstname +" "+ lastname);

*/
/*PRINT 1-3
let count = 1
for (count; count <= 3; count++) {
  //console.log("1");
  console.log(count);
}
*/

/*PRINT 3-1
let count = 3
for (count; count >= 1; count--) {
  //console.log("1";
  console.log(count);
}
*/
