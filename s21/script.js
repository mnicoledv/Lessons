console.log("connected");

function getChecked(others){
    //select all checkboxes of group languages using querySelectorAll
}

let checkboxes = document.querySelectorAll ('input[name="language"]');

let values = [];

//looping through checkboxes

//if checked property is true then push

for(let i = 0; i < checkboxes.length; i++)
{
    if (checkboxes[i].checked=true){
        values.push(checkboxes[i].value);

    }
}

alert (`${values} has been added to the learning list`);

class Queue {
    constructor(){
        this.items = [];
    }

    //add elements to the queue
    enqueue(element){
        return this.items.push(element);

    }

//remove elements from the queue
    dequeue(){
        if(this.items.length > 0){
            return this.items.shift();
        }
    }

    peek(){
        return this.items[this.items.length -1];
    }

    isEmpty(){
        return this.items.length == 0;
    }

    //the size of the queue
    size(){
        return this.items.length;
    }

    //empty the queue
    clear(){
        return this.items = [];
    }

}

let queue = mew Queue();
queue.enqueue[1];
queue.enqueue[2];
queue.enqueue[4];
queue.enqueue[8];
console.log(queue.items); // all items are added in the array

queue.dequeue();
console.log(queue.items); // using shift method, we delete the first element inside the array

console.log(queue.peek()); //it displays the last element
console.log(queue.isEmpty());// false - returns a boolean
console.log(queue.size()); // it displays how many elements are there in an array.

console.log(queue.clear()); // it displays how many elements are there in an array

console.log(queue.items); //it returns an empty array due to the methods that we declared in the class.

//Data Structure - linked list
class linkedList {
    constructor(){
        this.head = null;
        this.size = 0; 
    }

    //add element at the end of the list

    add(element){
        //create a new node

        let node = new Node(element);

        //to store the current node
        let current;

        //if the list is empty add the element and make it as a head

        if(this.head = null){
            this.head = node;
        }
        else{
            current = this.head;
            
            //iterate to the end of the list

            while(current.next){
                current = current.next; 
            }

            //add node
            current.next = node;
        }
        this.size++;
    }
    
}

//insert an element at the position index of the list

insertAt(element,index){
    if(index < 0 || index > this.size){
        return console.log("Please enter a vaild index");
    };
    else {
        //create a new node 
        let node = new Node (element);
        let curr,prev;

        curr = this.head;

        //add elements to the first index

        if(index == 0){
            node.next = this.head;
            this.head = node;

        }
        else{
            curr = this.head; let it = 0; // means iterate
            
            //iterate over the first to find the position insert.
            while(it < index){
                it++;
                prev =curr
                curr = curr.next;

                //adding an element
                node.next = curr;
                prev.next = node;
        
            }

            this.size++
        
        }


    }

    //remove an element from the specified location

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return console.log("Please enter a valid index");
        }
        else{
            let curr,prev, it = 0;

            curr = this.head;
            prev = curr;
            

            //deleting first element

            if (index === 0){
                this.head =curr.next;
            }
            else{
                //iterate over the list to the position to remove an element
                while (it < index){
                    it++;
                    prev = curr;
                    curr = curr;
                    next;
                }

                //remove the element
                prev.next = curr.next;
            }
            this.size--;
            //return the removed element

            return curr.element;
        }
    }
        
    removeElement(element){
        let current = this.head;
        let prev = null;

        //loop over the list

        while (current != null){
            //compare element with the current element
            //if the element is found then we need to remove and return as true

        if(current.element === element){
            if (prev === null){
                this.head = current.next;
            }
            else{
                prev.netx = current.next;
            }
        }
        this.size--;
        return current.element;
        }
        return -1;
    }

    indexOf(e){
        let count = 0;
        let current = this.head;

        //loop over the list

        while (current != null){
            //compare each element to the list within the given elements

            if(current.e === e){
                return count;
            }
            count++;
            current = current.next;
        }

        //if the index is not found
        return -1;
        
    }
    //checking if the list is empty
    isEmpty(){
        return this.size == 0;
    }

    //give the size ofthe list
    size of list(){
        console.log(this.size);
    }
    //printing the list of items
    printList(){
        let curr = this.head;
        let str = "";
        while (curr){
            str+= curr.element + "";
            curr = cuur.next;
        }
        console.log(str);
    }
}

