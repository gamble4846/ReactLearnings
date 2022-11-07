function List(){
    return (
        <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    );
}

function Title(){
    return(
        <h1>Fun Facts about React</h1>
    )
}

function MainContent(){
    return (
        <div className='mainContent'>
            <Title />
            <List />
        </div>
    )
}

export default MainContent;