import Banner from './Banner';
import Collapse from './Collapse';

function About() {
    return (
        <main className="main container">
            <Banner
                bgImg="../assets/img/snow-mountain.jpg"
                bgAlt="Montagnes enneigées"
            />
            <div className="collapse-container mt-30 mb-30">
                <Collapse
                    title="Fiabilité"
                    description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    "
                />
                <Collapse
                    title="Respect"
                    description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collapse
                    title="Service"
                    description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    "
                />
                <Collapse
                    title="Responsabilité"
                    description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    "
                />
            </div>
        </main>
    )
}
 
export default About
