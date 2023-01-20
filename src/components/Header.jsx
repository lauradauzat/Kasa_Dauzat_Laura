import { Link } from "react-router-dom";
import logo from '../img/LOGO.png'


function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="" srcSet="" />
        </div>

        <div className="nav-container">
          <nav>
            <li>
              <Link to="/">
                <ul>Accueil</ul>
              </Link>
              <Link to="/about">
                <ul>A propos</ul>
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header