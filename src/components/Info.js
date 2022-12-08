import '../styles/info.css';
import Rating from './Rating';
import Tag from './Tag';

function Info(props) {
    return (
        <div className="info mt-30">
            <div className="info-left">
                <h1 className="info-title h2 m-0">{props.title}</h1>
                <p className="info-desc h3 mt-5">{props.description}</p>
                <div className="info-tag">
                    <Tag tags={props.tags} />
                </div>
            </div>
            <div className="info-right">
                <div className="info-user">
                    <span className="info-user-name h4">{props.userName}</span>
                    <img src={props.userAvatar} alt="" className="info-use-avatar" />
                </div>
                <div className="info-star">
                    <Rating star="3" />
                </div>
            </div>
        </div>
    )
}
 
export default Info
