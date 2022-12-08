import '../styles/rating.css';

function Rating(props) {
    return (
        <div className="star">
            { [1, 2, 3, 4, 5].map(star => {
                if (props.star >= star) {
                    return <img key={star} src="../assets/img/star_rate-red.svg" alt="" className="star-item star-red" />
                } else {
                    return <img key={star} src="../assets/img/star_rate-light.svg" alt="" className="star-item star-light" />
                }
            }) }
        </div>
    )
}
 
export default Rating
