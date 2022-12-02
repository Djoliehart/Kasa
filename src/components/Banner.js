import '../styles/banner.css';

function Banner() {
    return (
        <div className="banner rounded-xl">
            <img src="../assets/img/rocks-sea.jpg" alt="Bord de mer" className="banner-img" />
            <div className="banner-caption">
                <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

export default Banner
