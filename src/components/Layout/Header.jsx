import { NavLink } from "react-router-dom";
import Logo from "../../assets/kasa_logo.svg";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={Logo} className="header__logo" alt="Kasa Logo" />
      </NavLink>
      <nav className="header__links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "header__link--active" : "header__link")}>
          Accueil
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? "header__link--active" : "header__link")}>
          A propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
