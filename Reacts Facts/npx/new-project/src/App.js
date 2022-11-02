import logo from './logo.svg';
import './App.css';

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

function Header(){
  return(
    <nav>
      <img src={logo} className="nav-logo" alt='logo'></img>
    </nav>
  )
}

function Title(){
  return(
    <h1>Fun Facts about React</h1>
  )
}

function Footer(){
  return(
    <p>© 2022 Patel development. All rights reserved</p>
  )
}

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Title />
      <List />
      <Footer />
    </div>
  );
}

export default App;
