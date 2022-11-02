

function NavBar(){
    return (
        <nav>
            <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>Menu 4</li>
                <li>Menu 5</li>
            </ul>
        </nav>
    )
}

ReactDOM.render((
    <div>
        <NavBar />
    </div>
), document.getElementById("root"));