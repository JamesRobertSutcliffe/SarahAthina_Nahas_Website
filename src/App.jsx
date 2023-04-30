import "./style.css"
import { useState } from "react"
import { Form } from "./Form";
import { List } from "./List";

function App() {

  const [toDos, setToDos] = useState([]);

  // 1 - type input function sets newItem state on change of typed keys
  // 2 - handle submit function returns array of todos and adds new item to array
  // 3 - map (loop through) through to do's array parsing into a list component for each to do entry
  // 4 - Create components for each section - seperate to do section into components and ensure all code work
  // 4 - make data persistent

  // toggle todo function maps through todo list and matches targets id to id in wthin todo list, when match is found state of that object.completed 
  // is assigned value of checkbox (true or false) --- the checked of the checkbox is then updated in real time as state changes

  function toggleTodo(id, completed) {
    setToDos(currentTodos => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          // returning an entired new todo object and just changing the completed keys value
          return { ...todo, completed }
        }
        return todo;
      })
    })
  }


  // add todo function created and passed to form element as destructed prop as  todo state is present in app
  function addTodo(title) {
    setToDos(currentTodos => {
      // Research why react objects needs ID//
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }]
    })
  }


  // delete todo function maps through the current todos and filters out the results not equal to selected ID and then keep them within the todo array and rednered to page
  function deleteTodo(id) {
    setToDos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  console.log(toDos)

  return (

    <>
      <Form onSubmit={addTodo} />
      <h1 className="header">To Do List</h1>
      <List toDos={toDos} />
    </>
  )
}

export default App

// create key event listener that changes the state of variable
// save this variable to to component with parsed state holding list entry
