import { useState } from 'react';
import Button from './Button'

const Form = ( {submitTask} ) => {

    const [text, setText] = useState('')
    const [textDueDate, setTextDueDate] = useState('')

    return (
        <div className="form-div">
            <form>
                <label>To Do:</label>
                <input type="text" 
                       className="form-input" 
                       placeholder="task here..."
                       value={text} 
                       onChange={(e) => setText(e.target.value)} />
                <label>Task Due Date:</label>
                <input type="text" 
                       className="form-input"
                       placeholder="due date here..."
                       value={textDueDate} 
                       onChange={(e) => setTextDueDate(e.target.value)} />
                <Button text="Submit To-Do" onClick={submitTask}/>
            </form>
        </div>
    )
}

export default Form;