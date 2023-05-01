export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>
            <label>
                {/* input triggers toggle todo function onclick -- parsing the mapped items ID (for comparison) and the checked value */}
                <input type="checkbox" checked={completed} onClick={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            {/* delete button triggers delete todo function which parses in the id of mapped array for comparison to determine filter */}
            <button className="btn-delete" onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
}