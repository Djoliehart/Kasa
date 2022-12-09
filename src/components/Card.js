import '../styles/card.css';

function Card(props) {
    return (
        <a href={'/logement/' + props.logement.id} className="card rounded-md">
            <img className="card-img" src={props.logement.cover} alt={props.logement.title} />
            <div className="card-caption">
                <h2 className="card-title h4">{props.logement.title}</h2>
            </div>
        </a>
    )
}
 
export default Card
