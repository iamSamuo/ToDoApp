//selectors
const todoInput = document.querySelector('.todo-input'); 
const todoButton = document.querySelector('.todo-button'); 
const todoList = document.querySelector('.todo-list'); 
const filterOption = document.querySelector( '.filter-todo')
//Event listeners
todoButton.addEventListener( 'click',  addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

//Funtions
function addTodo(event) {
  //prevent form from submitting
  event.preventDefault()

  //To Do DIV
  const todoDiv = document.createElement("div")
  todoDiv.classList.add( 'todo' )
  //Create LI
  const newTodo = document.createElement( 'li' )
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item') 
  todoDiv.appendChild(newTodo)
  //add todo to local storage
  savelocalTodo( todoInput.value)
  //CHECK MARK BUTTON
  const completedButton = document.createElement ( 'button' )
  completedButton.innerHTML = '<i class= "fas fa-check"></i>' 
  completedButton.classList.add('complete-btn')
  todoDiv.appendChild (completedButton)
  //CHECK TRASH BUTTON
    const trashButton = document.createElement ( 'button' )
    trashButton.innerHTML = '<i class= "fas fa-trash"> </i>' 
    trashButton.classList.add ( 'trash-btn')
    todoDiv.appendChild (trashButton)
  //APPEND TO LIST
  todoList.appendChild(todoDiv)
  //clear todo input value
  todoInput.value = " "
} 
function deleteCheck(e) {
  const item = e.target
//DELETE TODO
  if (item.classList [0] === 'trash-btn')  {
    const todo = item.parentElement
    todo.classList.add( "fall" )
  }
  //CHECK MARK
  if ( item.classList [0] === 'complete-btn') {
    const todo = item.parentElement
   todo.classList.toggle('completed')
} 
}
  function filterTodo(e){
    const todo = todoList.childNodes
    todo.forEach( function( todo ){
      switch( e.terget.value) {
         case "all":
            todo.style.display = " flex "
            break;
          case "completed":
           if ( todo.classList.conatains( " completed")){
             todo.style.display = " flex "
            break
           } else{
             todo.style.display = "none" 
           }
           break
           case "uncompleted":
             if( !todo.classList.conatains("completed")){
               todo.style.display = "flex"
             }else{
               todo.style.display = "none"
             }
             break
          }
         } )
          }

          //savelocal todos
          function savelocalTodo(todo){
            //check do i already things in the loacal storage.
            
            if (localStorage.getItem("todos") === null ){
              todos = []
            } else{
              todos = JSON.parse( localStorage.getItem("todos"))
            }

            todo.push( todo )
            localStorage.setItem( "todos", JSON.stringify( todos))
          }
          function savelocalTodo(todo){
            //check do i already things in the loacal storage.
            
            if (localStorage.getItem("todos") === null ){
              todos = []
            } else{
              todos = JSON.parse( localStorage.getItem("todos"))
            }
           todos.forEach( function (todo) {

               //To Do DIV
  const todoDiv = document.createElement("div")
  todoDiv.classList.add( 'todo' )
  //Create LI
  const newTodo = document.createElement( 'li' )
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item') 
  todoDiv.appendChild(newTodo)
  //add todo to local storage
  savelocalTodo( todoInput.value)
  //CHECK MARK BUTTON
  const completedButton = document.createElement ( 'button' )
  completedButton.innerHTML = '<i class= "fas fa-check"></i>' 
  completedButton.classList.add('complete-btn')
  todoDiv.appendChild (completedButton)
  //CHECK TRASH BUTTON
    const trashButton = document.createElement ( 'button' )
    trashButton.innerHTML = '<i class= "fas fa-trash"> </i>' 
    trashButton.classList.add ( 'trash-btn')
    todoDiv.appendChild (trashButton)
  //APPEND TO LIST
  todoList.appendChild(todoDiv)
           }
        
           )}
        