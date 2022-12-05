import '../styles/logement.css';
import Collapse from './Collapse';

function Logement() {
    return (
        <main className="main container">
            <div className="slider rounded-xl">
                <img src="../assets/img/home-living-room.jpg" alt="Cozy loft on the Canal Saint-Martin" className="slider-img rounded-xl active" />
                <img src="../assets/img/home-living-room.jpg" alt="Cozy loft on the Canal Saint-Martin" className="slider-img rounded-xl" />
                <button className="slider-prev">
                    <img src="../assets/img/arrow_left.svg" alt="Précédent" />
                </button>
                <button className="slider-next">
                    <img src="../assets/img/arrow_right.svg" alt="Suivant" />
                </button>
                <span className="slider-step">1/4</span>
            </div>
            <div className="info mt-30">
                <div className="info-left">
                    <h1 className="info-title h2 m-0">Cozy loft on the Canal Saint-Martin</h1>
                    <p className="info-desc h3 mt-5">Paris, Île-de-France</p>
                    <ul className="info-tag">
                        <li className="tag-item rounded-md">Cozy</li>
                        <li className="tag-item rounded-md">Canal</li>
                        <li className="tag-item rounded-md">Paris 10</li>
                    </ul>
                </div>
                <div className="info-right">
                    <div className="info-user">
                        <span className="info-user-name h4">Alexandre <br />Dumas</span>
                        <img src="../assets/img/avatar.png" alt="" className="info-use-avatar" />
                    </div>
                    <div className="info-star">
                        <img src="../assets/img/star_rate-red.svg" alt="" class="star-item star-red" />
                        <img src="../assets/img/star_rate-red.svg" alt="" class="star-item star-red" />
                        <img src="../assets/img/star_rate-red.svg" alt="" class="star-item star-red" />
                        <img src="../assets/img/star_rate-light.svg" alt="" class="star-item star-light" />
                        <img src="../assets/img/star_rate-light.svg" alt="" class="star-item star-light" />
                    </div>
                </div>
            </div>
            <div className="collapse-column mt-15 mb-30">
                <Collapse
                    title="Description"
                    description="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."
                />
                <Collapse
                    title="Équipements"
                    description="
                        Climatisation \n
                        Wi-Fi \n
                        Cuisine \n
                        Espace de travail \n
                        Fer à repasser \n
                        Sèche-cheveux \n
                        Cintres"
                />
            </div>
        </main>
    )
}
 
export default Logement