import "./style.css"
import { useState } from "react"

function App() {

  const [newItem, setNewItem] = useState("");
  const [toDos, setToDos] = useState([]);

  // 1 - handle submit function should add value of input to to do array
  // 2 - map through to do's array parsing into a list component for each to do entry

  function typeInput(e) {
    setNewItem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

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
        <li>
          <label>
            <input type="checkbox" />
            Item uno
          </label>
          <button className="btn-delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item twono
          </label>
          <button className="btn-delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item threebebe
          </label>
          <button className="btn-delete">Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App

// create key event listener that changes the state of variable
// save this variable to to component with parsed state holding list entry
