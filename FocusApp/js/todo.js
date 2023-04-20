const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("ul#todo-list"); //


// local storage key
const TODOS_KEY = "todos";


// local storage
let toDos = [];


//ToDo 
function saveToDos(){ 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // Array -> 
    // string
}


//todo
function deleteToDos(event){
    const writtenLi = event.target.parentElement;

    writtenLi.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(writtenLi.id)); 
    //object Compare the ID (number) with the ID value of the list made in number form, and leave the other
    saveToDos();
    // Save the leftovers back to localStorage
}

//todo
function paintToDo(newTodo){
    const li =  document.createElement('li');
    li.id = newTodo.id;
    const button = document.createElement('button');
    button.innerText = "📌";
    const span = document.createElement('span');
    span.innerText = newTodo.text;  // Change the input to be span tag characters
 
    button.addEventListener("click", deleteToDos)
    li.appendChild(button);
    li.appendChild(span); // 
    toDoList.appendChild(li); //Attach newToDo(li>span) to the ul tag - If you attach only li, will span follow?
    
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    // Store the value of todo in newToDo
    toDoInput.value ="";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    // When you press enter, the text written in todo disappears.
    paintToDo(newToDoObj);
    // Added todo list with ul>li
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY); //Import saved ToDos items
console.log(savedToDos);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
}


