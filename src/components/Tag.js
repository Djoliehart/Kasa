import '../styles/tag.css';

function Tag(props) {
    return (
        <ul className="tag">
            { props.tags.map((tag, key) => {
                return <li key={key} className="tag-item rounded-md">{tag}</li>
            }) }
        </ul>
    )
}
 
export default Tag
