import "./style.css"

export function Form() {

    // const [newItem, setNewItem] = useState("");

    // // typeInput functions sets netItem state using onchange event listener

    // function typeInput(e) {
    //     setNewItem(e.target.value)
    // }


    // // handle submit function sets to do's using a nested function that has the parses current todos then returns these using spread operator and adds a new entry as an object / 
    // // this object contains an ID, title(actual input info) and completed Boolean

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     // setToDos(currentTodos => {

    //     // Research why react objects needs ID//
    //     return [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false }]
    // })

    // setNewItem("");

    // }

    return (
        <>
            <form>
                <div className="form-row">
                    <label className="form-label" htmlFor="item"> New Item </label>
                    <input value={newItem} className="form-input" type="text" id="item" />
                    <button className="btn">Add</button>
                </div>
            </form>


        </>
    )
}