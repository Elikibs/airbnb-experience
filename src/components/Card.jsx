import starimage from "/images/star.png"

function Card (props){
    return (
        <div className="card">
            <img src={`/images/${props.img}`} alt="card-image"  className="card--image"/>
            <div className="card--stats">
                <img src={starimage} alt="star-image" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

export default Card;
