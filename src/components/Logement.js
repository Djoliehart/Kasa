import '../styles/logement.css';
import Collapse from './Collapse';
import Slideshow from './Slideshow';
import Info from './Info';

function Logement() {
    return (
        <main className="main container">
            <Slideshow
                pictures={[
                    './assets/img/home-living-room.jpg',
                    './assets/img/snow-mountain.jpg',
                    './assets/img/rocks-sea.jpg'
                ]}
            />
            <Info
                title="Cozy loft on the Canal Saint-Martin"
                description="Paris, Île-de-France"
                tags={[
                    'Cozy',
                    'Canal',
                    'Paris 10'
                ]}
                userName="Alexandre <br />Dumas"
                userAvatar="../assets/img/avatar.png"
            />
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
