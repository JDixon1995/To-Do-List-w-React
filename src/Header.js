import Button from "./Button";

const Header = ( { onAdd } ) => {
    return (
        <div>
            <header className="header">
                <h1>To Do List App</h1>
                <Button text="Add To-Do" color='green' onClick={onAdd} />
            </header>
        </div>
    )
}

export default Header;