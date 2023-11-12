import photogrid from "../images/photo-grid.png"

function Hero (){
    return (
        <div className="hero--section">
            <div className="hero--photo">
                <img src={photogrid} alt="section photogrid" />
            </div>
            <div className="hero-contents">
                <h3 className="contents--title">Online Experiences</h3>
                <p className="contents--paragraph">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
            </div>
        </div>
    )
}

export default Hero;