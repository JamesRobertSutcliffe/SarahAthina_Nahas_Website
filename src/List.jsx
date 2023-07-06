import { TodoItem } from "./TodoItem";

export function List({ toDos, toggleTodo, deleteTodo }) {
    //Todos added and parsed as this is the state that is needed for this component to function (see MAP)
    return (
        <ul>
            {/* Short ciruiting checks renders text if condition array is equal to 0 is met, if not text is not renderd */}
            {toDos.length === 0 && "Nothing To Do..."}
            {/* Map through todos array and returns a list entry with the new todo entries name (todo.name) from the added object */}

            {toDos.map((item) => {
                return (<TodoItem
                    {...item}
                    key={item.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />)
            })}
        </ul>
    )
}