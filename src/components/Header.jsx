import { NavLink } from "react-router-dom";
import logo from '../img/LOGO.png'


function Header() {

  let activeStyle = {
    textDecoration: "underline",
  };

  
  return (

    <header>
    <div className="header-container">
      <div className="logo-container">
        <NavLink to='/'>
          <img src={logo} alt="" srcSet="" />
        </NavLink>
      </div>

      <div className="nav-container">
        <nav>
        <ul>
          <li>
            <NavLink to='/' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>Accueil</NavLink>
          </li>
          <li>
            <NavLink to='/about' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>A Propos</NavLink>
          </li>
        </ul>
        </nav>
      </div>
    </div>
  </header>
  );
}

export default Header