import Button from "./Button";

const Header = () => {
    return (
        <div>
            <header className="header">
                <h1>To Do List App</h1>
                <Button text="Add To-Do" color='green' />
            </header>
        </div>
    )
}

export default Header;