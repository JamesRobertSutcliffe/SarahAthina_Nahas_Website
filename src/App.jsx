import "./style.css"

function App() {

  return (
    <>
      <form>
        <div className="form-row">
          <label className="form-label" htmlFor="item"> New Item </label>
          <input className="form-input" type="text" id="item" />
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

      </ul>
    </>
  )
}

export default App
