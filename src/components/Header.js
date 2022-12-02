import '../styles/header.css';

function Header() {
    return (
        <header className="header container">
            <div className="header-logo">
                <img src="../assets/img/logo-red.svg" alt="Kasa" />
            </div>
            <nav className="header-nav">
                <a href="index.html" className="nav-item active">Accueil</a>
                <a href="about.html" className="nav-item">A Propos</a>
            </nav>
        </header>
    )
}
 
export default Header
