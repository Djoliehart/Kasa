import '../styles/banner.css';

function Banner(props) {
    return (
        <div className="banner rounded-xl">
            <img src={props.bgImg} alt={props.bgAlt} className="banner-img" />
            { props.title &&
                <div className="banner-caption">
                    <h1 className="banner-title">{props.title}</h1>
                </div>
            }
        </div>
    )
}

export default Banner
