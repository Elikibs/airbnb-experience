import katieimage from "../images/katie-zaferes.png"
import starimage from "../images/star.png"

function Card (props){
    return (
        <div className="card">
            <img src={katieimage} alt="card-image"  className="card--image"/>
            <div className="card--stats">
                <img src={starimage} alt="star-image" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">USA</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

export default Card;