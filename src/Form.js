import Button from './Button'

const Form = ( {submitTask} ) => {
    return (
        <div className="form-div">
            <form>
                <label>To Do:</label>
                <input type="text" className="form-input" />
                <label>Task Due Date:</label>
                <input type="text" className="form-input" />
                <Button text="Submit To-Do" onClick={submitTask}/>
            </form>
        </div>
    )
}

export default Form;