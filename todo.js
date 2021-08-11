//selecting everything for DOM

const todoForm = document.querySelector("#tasks");
const todoInput = document.querySelector("#task");
const todoItemsList = document.querySelector("#mainList");

//creating array which stores the inputs and helps with the main tasks

let todos = [];

//when form is submitted

todoForm.addEventListener('submit', function(event){
    //stopping page from reloading when submitted
    event.preventDefault();
    addTodo(todoInput.value); /// storing the value that users input
});

function addTodo(item){
    //if items is not empty
    if(item !== ""){
        //make a todo object and give it an id, name and completed
        const todo = {
            id: Date.now(),
            name: item
        };
         //then add it to todos array

         todos.push(todo);
         addToLocalStorage(todos);
        
         todoItemsList.value = "";
        }
}

function renderTodos(todos){
    todoItemsList.innerHTML = "";

    //go through each items in the todos

    todos.forEach(function(item){
        //if item is completed,, just checking it here

        // const checked = completed ? 'checked': null;

        //creating an li element to display it on screen
        const li = document.createElement('li');
        li.setAttribute('class', 'list-items');
        li.setAttribute('data-key', item.id);

        // li.innerHTML = `${item.name}`;
        // li.innerHTML = `<li class="list-items"><input class="checkbox" type="checkbox">
        // ${item.name}</li>`;
        li.innerHTML = `<li class="list-items" onclick="deleteItem()"><input class="checkbox" type="checkbox">
        ${item.name}</li>`;
        // li.innerHTML = `<li class="list-items"><input class="checkbox" type="checkbox">
        // ${item.name}<button class="delete-button">X</button></li>`;

        todoItemsList.append(li);
    })
        
    };

    // function to add todos to local storage
function addToLocalStorage(todos) {
    // conver the array to string then store it.
    localStorage.setItem('todos', JSON.stringify(todos));
    // render them to screen
    renderTodos(todos);
  }



function getFromLocalStorage(){
    const reference =  localStorage.getItem('todos');
    //if reference exists
    
    if(reference){
        //converts back to array
        todos = JSON.parse(reference);
        renderTodos(todos);
    }
}  

getFromLocalStorage();

