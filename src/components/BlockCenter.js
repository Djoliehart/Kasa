import '../styles/block-center.css';

function BlockCenter(props) {
    return (
        <div className="block-center">
            <h1 className="block-title m-0">{props.title}</h1>
            <p className="block-text">{props.description}</p>
            <a href={props.link} className="block-link h4">{props.anchor}</a>
        </div>
    )
}
 
export default BlockCenter
