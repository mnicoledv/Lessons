console.log("connected");
/*
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
*/
/*
 let student;
function nameOfStudent (student) {
  const students = [];
  for (i=0;i<=5;i++){
    student = prompt ("Input student's name:");
    students[students.length] = student;
    console.log (student + " is added on the student's list");
  }
  students.forEach(displayStudents);
  console.log ("There are total number of "+ students.length +" students in the student's list.");
  
  chkStudent = prompt ("Check student's name:");
  for(i=0;i<=students.length;i++){
    
  } 
  //students.forEach(checkStudent);
}
  nameOfStudent (student);

function displayStudents(item){
  console.log(item);
}

function checkStudent(item){
  return item
}

//displayStudents();

*/

let students = [];
function addStudent(name){
  students.push(name);
  console.log(`${name} is added to the student's list.`);
}

addStudent("John");
addStudent("Jane");
addStudent("Joe");

function countStudents()
{
  return 'There are total number of' ${students.length}'
}

console.log(countStudents())
{
  students.sort();
  students.forEach(function (student){
    console.log(student);
  });
}

printStudents();

function findStudent(keyword){
  let match = students.filter(function (element){
    return element.toLowerCase().includes(keyword.toLowerCase())
  })
}

console.log(match);

if (match.length ==1){
  console.log(`${match} is an enrollee`);
};

else if (match.length > 1)
{
  console.log(`${match} are enrollees`;)
}
else{
  console.log(`No student found with name ${match}`);
}
  
findStudent("Joe");

let studentSection = [];
function addSection(section){
  studentSection = students.len
}
