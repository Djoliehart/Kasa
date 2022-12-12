
import { useState } from 'react';
import '../styles/slideshow.css';

function Slideshow(props) {
    const [current, setCurrent] = useState(1)

    // Click sur le bouton précédent
    function prev() {
        if (current === 1) {
            setCurrent(props.pictures.length)
        } else {
            setCurrent(current - 1)
        }
    }

    // Click sur le bouton suivant
    function next() {
        if (current === props.pictures.length) {
            setCurrent(1)
        } else {
            setCurrent(current + 1)
        }
    }

    return (
        <div className="carrousel rounded-xl">
            { props.pictures.map((picture, key) => {
                const slide = (key + 1)
                return (
                    <img
                        key={slide} src={picture} alt=""
                        className={slide === current ? 'carrousel-img rounded-xl active' : 'carrousel-img rounded-xl'}
                    />
                )
            }) }
            { props.pictures.length > 1 && (
                <div>
                    <button className="carrousel-prev" type="button" onClick={(event) => prev()}>
                        <img src="../assets/img/arrow_left.svg" alt="Précédent" />
                    </button>
                    <button className="carrousel-next" type="button" onClick={(event) => next()}>
                        <img src="../assets/img/arrow_right.svg" alt="Suivant" />
                    </button>
                    <span className="carrousel-step">{current}/{props.pictures.length}</span>
                </div>
                )
            }
        </div>
    )
}

export default Slideshow
