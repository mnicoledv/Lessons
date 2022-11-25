console.log("connected");

let addbutton = document.querySelector("#addbutton");
let todoWrapper = document.querySelector(".todo-wrapper");
//<ul class="todo-wrapper"></ul>

addbutton.addEventListener("click", () => {
   
        let userInput = document.querySelector("#userInput").value;
        //let userInput = <input type="text" id="userInput">.value;
        //String.length
        //input = ['i','n','p','u','t']
        // 6 > 5
        if(userInput.length > 5)
        {
            let li = document.createElement("li");
            // <li></li>
            li.className="items";
            // <li class="items"></li>
            let checkbox = document.createElement("input");
            // <input>

            checkbox.type ="checkbox";
            // <input type="checkbox">
            checkbox.value =1;
            // <input type="checkbox" value=1>
            checkbox.id= "todo1";
            // <input type="checkbox" value=1 id="todo1">
            
            li.appendChild(checkbox);
            /* <li class="items">
                <input type="checkbox" value=1 id="todo1">
                </li>
            */
            checkbox.className = "todo";
            // <input type="checkbox" value=1 id="todo1" class="todo">
            let node = document.createTextNode(userInput);
            console.log("node: "+ node);
            li.appendChild(node);
            /* <li class="items">
                <input type="checkbox" value=1 id="todo1" class="todo">
                userInput
                </li>
            */
            todoWrapper.appendChild(li);
            /*<ul class="todo-wrapper mt-5" style="list-style-type:none;">
                <li class="items">
                    <input type="checkbox" value=1 id="todo1" class="todo">
                    userInput
                </li>    
            </ul>
            */
            document.querySelector("#userInput").value = "";
            // empties out the userInput object 
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
        //let items = document.getElementsByClassName("todo");
        let items = document.getElementsByClassName("todo");
        // items = [<input class="todo">,<input class="todo">,<input class="todo">]
        let item = document.getElementsByClassName("items");
        // item = [<li class="items"></li>,<li class="items"></li>,<li class="items"></li>]
        for(i = 0; i < items.length; i++){
            /* 
            items[0]
            items[1]
            items[2]
            */
            //console.log(items[i].id);
            if(items[i].checked == true)
            {
                //console.log(items[i].id);
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