import starimage from "/images/star.png"

function Card (props){
    let badgeText
    if (props.openSpots === 0){
        badgeText="SOLD OUT"
    } else if(props.location === "Online"){
        badgeText="ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`/images/${props.coverImg}`} alt="card-image"  className="card--image"/>
            <div className="card--stats">
                <img src={starimage} alt="star-image" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

export default Card;
