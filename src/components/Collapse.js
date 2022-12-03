import { useState } from 'react';
import '../styles/collapse.css';

function Collapse(props) {
    const [visible, setVisible] = useState(true)

    return (
        <div className={visible ? 'collapse rounded-md' : 'collapse rounded-md close'}>
            <div className="collapse-header">
                <h2 className="collapse-title h4 m-0">{props.title}</h2>
                <button className="collapse-btn" type="button" onClick={(event) => setVisible(!visible)}>
                    <img src={visible ? '../assets/img/arrow_up.svg' : '../assets/img/arrow_down.svg'} alt="Voir moins" className="collapse-icon" />
                </button>
            </div>
            <div className="collapse-content">
                <p className="collapse-text m-0">{props.description}</p> 
            </div>
        </div>
    )
}
 
export default Collapse
