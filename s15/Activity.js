console.log("connected");
// EXCERCISE (attempt)

let userInput = prompt ("Enter a number between 0 to 20");
      if (userInput > 20) {
            alert(`Currently at number 20. Terminating the loop`);
      }
      else if (userInput % 2 !== 0){
            alert(`The number is divisible by 10. Skipping number`);
            
      }
      else if(userInput % 5 == 0){
            alert(`${userInput}`);
      }
      else{
            function input (userInput) {
                  for (userInput; userInput >= 0; userInput--){
                        if (userInput%2 === 0){
                              console.log(userInput);
                        }
                  }
            }
            input(userInput);
            
      }

