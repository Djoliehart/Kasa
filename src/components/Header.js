import '../styles/header.css';

function Header() {
    return (
        <header class="header container">
            <div class="header-logo">
                <img src="../assets/img/logo-red.svg" alt="Kasa" />
            </div>
            <nav class="header-nav">
                <a href="index.html" class="nav-item active">Accueil</a>
                <a href="about.html" class="nav-item">A Propos</a>
            </nav>
        </header>
    )
}
 
export default Header
