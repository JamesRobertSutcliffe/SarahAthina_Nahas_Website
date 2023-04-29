import "./style.css"
import { useState } from "react"

function App() {

  const [newItem, setNewItem] = useState("");
  const [toDos, setToDos] = useState([]);

  // 1 - type input function sets newItem state on change of typed keys
  // 2 - handle submit function returns array of todos and adds new item to array
  // 3 - map (loop through) through to do's array parsing into a list component for each to do entry
  // 4 - Create components for eact section
  // 4 - make data persistent

  // typeInput functions sets netItem state using onchange event listener

  function typeInput(e) {
    setNewItem(e.target.value)
  }


  // handle submit function sets to do's using a nested function that has the parses current todos then returns these using spread operator and adds a new entry as an object / 
  // this object contains an ID, title(actual input info) and completed Boolean

  function handleSubmit(e) {
    e.preventDefault();
    setToDos(currentTodos => {

      // Research why react objects needs ID//
      return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }]
    })

    setNewItem("");

  }


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


  // delete todo function maps through the current todos and filters out the results not equal to selected ID and then keep them within the todo array and rednered to page
  function deleteTodo(id) {
    setToDos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  console.log(toDos)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="item"> New Item </label>
          <input value={newItem} onChange={typeInput} className="form-input" type="text" id="item" />
          <button className="btn">Add</button>
        </div>
      </form>
      <h1 className="header">To Do List</h1>

      <ul>
        {/* Short ciruiting checks renders text if condition array is equal to 0 is met, if not text is not renderd */}
        {toDos.length === 0 && "Nothing To Do..."}
        {/* Map through todos array and returns a list entry with the new todo entries name (todo.name) from the added object */}

        {toDos.map((item) => {
          return <li key={item.id}>
            <label>
              {/* input triggers toggle todo function onclick -- parsing the mapped items ID (for comparison) and the checked value */}
              <input type="checkbox" checked={item.completed} onClick={e => toggleTodo(item.id, e.target.checked)} />
              {item.title}
            </label>
            {/* delete button triggers delete todo function which parses in the id of mapped array for comparison to determine filter */}
            <button className="btn-delete" onClick={() => deleteTodo(item.id)}>Delete</button>
          </li>
        })}
      </ul>
    </>
  )
}

export default App

// create key event listener that changes the state of variable
// save this variable to to component with parsed state holding list entry
