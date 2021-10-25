import Button from "./Button";

const Header = ( { onAdd, showAdd } ) => {
    return (
        <div>
            <header className="header">
                <h1>To Do List App</h1>
                <Button text={showAdd ? 'Close' : "Add To-Do"}
                        color={showAdd ? 'red' : 'green'}
                        onClick={onAdd} />
            </header>
        </div>
    )
}

export default Header;