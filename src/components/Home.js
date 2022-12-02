import Banner from './Banner';
import Card from './Card';
import logements from '../logements.json';

function Home() {
    return (
        <main className="main container">
            <Banner />
            <div className="card-container rounded-xl bg-light">
                { logements.map(logement => {
                    return (
                        <Card logement={logement} key={logement.id} />
                    )
                }) }
            </div>
        </main>
    )
}
 
export default Home
