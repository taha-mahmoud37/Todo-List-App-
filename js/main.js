

//selector
let todoInput = document.querySelector(".form-control");
let todoAdd = document.querySelector(".todo-add");
let todoList = document.querySelector(".todo-list");

//addEventListener

todoAdd.addEventListener("click" , addTodo);

//functions

function addTodo(e)
{
    // prevent fprm from submitting
    e.preventDefault();
   
    //create div 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-items")

    //create li 
    const todoLi = document.createElement("li");
    todoLi.innerText = todoInput.value;
    todoDiv.appendChild(todoLi);
   
    //create Check button
    const todoCheck = document.createElement("a");
    todoCheck.innerHTML = '<i class="fas fa-check-square p-2"></i>';
    todoCheck.classList.add("one")
    todoDiv.appendChild(todoCheck);

    //create Check button
    const todoDelete = document.createElement("a");
    todoDelete.innerHTML = '<i class="far fa-trash-alt p-2"></i>';
    todoDelete.classList.add("two")
    todoDiv.appendChild(todoDelete)

    // add to Todo list
    todoList.appendChild(todoDiv)

    todoInput.value ="";

    todoDelete.addEventListener("click" , function(e){
         
        let eleDelete = e.target.parentElement.parentElement;
        eleDelete.remove()
    })  

    todoCheck.addEventListener("click" , function(e){
         
        let eleCheck = e.target.parentElement.parentElement;
        let ele = e.target;
        ele.classList.add("full")
        eleCheck.classList.toggle("lineThrough")
    }) 
    

}




var typed = new Typed('.type', {
    strings: [
               "To Do List",
               "Vanilla JavaScript"
                ],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
  });