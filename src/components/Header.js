import { NavLink } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    return (
        <header className="header container">
            <div className="header-logo">
                <img src="../assets/img/logo-red.svg" alt="Kasa" />
            </div>
            <nav className="header-nav">
                <NavLink
                    className="nav-item"
                    activeclassname="active"
                    to="/"
                >
                    Accueil
                </NavLink>
                <NavLink
                    className="nav-item"
                    activeclassname="active"
                    to="/a-propos"
                >
                    À Propos
                </NavLink>
            </nav>
        </header>
    )
}
 
export default Header
