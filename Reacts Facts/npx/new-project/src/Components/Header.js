import logo from '../logo.svg';

function Header(){
    return(
        <header className='header-container'>
        <nav className='nav-container'>
            <img src={logo} className="nav-logo" alt='logo'></img>
            <NavMenu />
        </nav>
        </header>
    )
}

function NavMenu(){
    return (
      <div className='nav-menu-container'>
        <ul className='nav-menu'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    );
}

export default Header;