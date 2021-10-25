import Button from "./Button";

const Header = ( { showAddToDo } ) => {
    return (
        <div>
            <header className="header">
                <h1>To Do List App</h1>
                <Button text="Add To-Do" color='green' onClick={showAddToDo} />
            </header>
        </div>
    )
}

export default Header;