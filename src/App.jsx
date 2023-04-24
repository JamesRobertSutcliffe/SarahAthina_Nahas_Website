import "./style.css"
import { useState } from "react"

function App() {

  const [newItem, setNewItem] = useState("");
  const [toDos, setToDos] = useState([]);

  // 1 - type input function sets newItem state on change of typed keys
  // 2 - handle submit function returns array of todos and adds new item to array
  // 3 - map (loop through) through to do's array parsing into a list component for each to do entry
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

        {/* Map through todos array and returns a list entry with the new todo entries name (todo.name) from the added object */}

        {toDos.map((item) => {
          return <li>
            <label>
              <input type="checkbox" />
              {item.title}
            </label>
            <button className="btn-delete">Delete</button>
          </li>
        })}
      </ul>
    </>
  )
}

export default App

// create key event listener that changes the state of variable
// save this variable to to component with parsed state holding list entry
