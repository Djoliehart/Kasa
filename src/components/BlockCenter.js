import '../styles/block-center.css';

function BlockCenter(props) {
    return (
        <div class="block-center">
            <h1 class="block-title m-0">{props.title}</h1>
            <p class="block-text">{props.description}</p>
            <a href={props.link} class="block-link h4">{props.anchor}</a>
        </div>
    )
}
 
export default BlockCenter
