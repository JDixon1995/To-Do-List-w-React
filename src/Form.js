import { useState } from 'react';

const Form = ({addToDo}) => {

    const [content, setText] = useState('')
    const [dueDate, setTextDueDate] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!content) {
            alert('Please add text.')
            return
        }

        addToDo({ content, dueDate })

        setText('')
        setTextDueDate('')
    }

    return (
        <div className="form-div">
            <form onSubmit={onSubmit}>
                <label>To Do:</label>
                <input type="text" 
                       className="form-input" 
                       placeholder="task here..."
                       value={content} 
                       onChange={(e) => setText(e.target.value)} />
                <label>Task Due Date:</label>
                <input type="text" 
                       className="form-input"
                       placeholder="due date here..."
                       value={dueDate} 
                       onChange={(e) => setTextDueDate(e.target.value)} />
                <input className='btn' type='submit' text='Submit Task' value='Save Task' />
            </form>
        </div>
    )
}

export default Form;