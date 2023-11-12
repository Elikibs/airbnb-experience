import airbnblogo from "../images/airbnb-logo.png"

function Navbar (){
    return (
        <>
            <nav>
                <img src={airbnblogo} alt="airbnb logo" className="nav--logo" />
            </nav>
        </>
    )
}

export default Navbar;