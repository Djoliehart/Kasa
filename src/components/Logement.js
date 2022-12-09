import '../styles/logement.css';
import Collapse from './Collapse';
import Slideshow from './Slideshow';
import Info from './Info';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';

function Logement() {
    const { id } = useParams()
    const logement = logements.find(logement => logement.id === id)

    return (
        <main className="main container">
            <Slideshow pictures={logement.pictures} />
            <Info
                title={logement.title}
                description={logement.location}
                tags={logement.tags}
                hostName={logement.host.name}
                hostAvatar={logement.host.picture}
            />
            <div className="collapse-column mt-15 mb-30">
                <Collapse
                    title="Description"
                    description={logement.description}
                />
                <Collapse
                    title="Équipements"
                    description=<ul className="collapse-list m-0 p-0">
                        { logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        )) }
                    </ul>
                />
            </div>
        </main>
    )
}
 
export default Logement
