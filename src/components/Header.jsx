import { Link } from "react-router-dom";
import logo from '../img/LOGO.png'


function Header() {
  return (
    <header>
    <div className="header-container">
      <div className="logo-container">
        <Link to={'/'}>
          <img src={logo} alt="" srcSet="" />
        </Link>
      </div>

      <div className="nav-container">
        <nav>
        <ul>
          <li>
            <Link to={`/`}>Accueil</Link>
          </li>
          <li>
            <Link to={`/about`}>A Propos</Link>
          </li>
        </ul>
        </nav>
      </div>
    </div>
  </header>
  );
}

export default Header