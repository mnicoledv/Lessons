console.log("connected");

let addbutton = document.querySelector("#addbutton");
let todoWrapper = document.querySelector(".todo-wrapper");


addbutton.addEventListener("click", () => {
   
        let userInput = document.querySelector("#userInput").value;

        if(userInput.length > 5)
        {
           let li = document.createElement("li");
           li.className="items";
            
            let checkbox = document.createElement("input");
            checkbox.type ="checkbox";
            checkbox.value =1;
            checkbox.id= "todo1";
            li.appendChild(checkbox);
            checkbox.className = "todo";
            let node = document.createTextNode(userInput);
            li.appendChild(node);

            todoWrapper.appendChild(li);
            document.querySelector("#userInput").value="";
 
        }

        else
        {
            alert("You must enter more than 5 characters");
        }
});


delbutton.addEventListener("click", () => {
    
    /*for (let i=0; i < todo.length; i++){
        todo[i] = todo[i].selected;
     */
        let items = document.getElementsByClassName("todo");
        let item = document.getElementsByClassName("items");
        for(i=0; i< items.length;i++){
            //console.log(items[i].id);
            if(items[i].checked == true)
            { console.log(items[i].id);
            item[i].remove();
            i--;
            }
        }
/*
    let index = todo.length;
    while (index--){
        if (selected [index]) {
            todo.remove(index);
        }
    }
  */ 
});





/* solution
   
function deleteItems(){
    let i;

    let ul =document.getElementById("listings");
    let items= ul.getElementsByTagName("li");

    for(i=0; i <items.length; i++){
        if(items[i].firstChild.checked){
            ul.removeChild(items[i]);
            i = i-1;
        }
    }

}

 



});

//DELETE LIST

document.querySelector(".todo-wrapper").addEventListener ("click", (e) => {
    if(e.target.className === "todo"){
        let msg = confirm (`Are you sure that you want to delete \n ${e.target.innerText}`
        );

        if (msg == true) {
            document.querySelector(".todo-wrapper").removeChild(e.target);
        }
    }
})*/