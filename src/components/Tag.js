import '../styles/tag.css';

function Tag(props) {
    return (
        <ul className="tag mt-0">
            { props.tags.map((tag, key) => {
                return <li key={key} className="tag-item rounded-md">{tag}</li>
            }) }
        </ul>
    )
}
 
export default Tag
