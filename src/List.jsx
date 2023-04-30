export function List({ toDos }) {
    //Todos added and parsed as this is the state that is needed for this component to function (see MAP)
    return (
        <ul>
            {/* Short ciruiting checks renders text if condition array is equal to 0 is met, if not text is not renderd */}
            {toDos.length === 0 && "Nothing To Do..."}
            {/* Map through todos array and returns a list entry with the new todo entries name (todo.name) from the added object */}

            {toDos.map((item) => {
                return <li key={item.id}>
                    <label>
                        {/* input triggers toggle todo function onclick -- parsing the mapped items ID (for comparison) and the checked value */}
                        <input type="checkbox" checked={item.completed}
                        // onClick={e => toggleTodo(item.id, e.target.checked)} 
                        />
                        {item.title}
                    </label>
                    {/* delete button triggers delete todo function which parses in the id of mapped array for comparison to determine filter */}
                    <button className="btn-delete"
                    // onClick={() => deleteTodo(item.id)}
                    >Delete</button>
                </li>
            })}
        </ul>
    )
}