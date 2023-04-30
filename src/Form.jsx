import { useState } from "react";
import "./style.css"

export function Form({ onSubmit }) {

    const [newItem, setNewItem] = useState("");

    // typeInput functions sets netItem state using onchange event listener

    function typeInput(e) {
        setNewItem(e.target.value)
    }

    // handle submit function sets to do's using a nested function that has the parses current todos then returns these using spread operator and adds a new entry as an object / 
    // this object contains an ID, title(actual input info) and completed Boolean

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return;

        onSubmit(newItem)
        setNewItem("");

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <label className="form-label" htmlFor="item"> New Item </label>
                <input value={newItem} onChange={typeInput} className="form-input" type="text" id="item" />
                <button className="btn">Add</button>
            </div>
        </form>
    )
}