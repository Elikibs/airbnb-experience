import katieimage from "../images/katie-zaferes.png"
import starimage from "../images/star.png"

function Card (){
    return (
        <div className="card">
            <img src={katieimage} alt="card-image"  className="card--image"/>
            <div className="card--stats">
                <img src={starimage} alt="star-image" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) . </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><strong>From $136</strong> / person</p>
        </div>
    )
}

export default Card;