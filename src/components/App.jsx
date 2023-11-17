import Card from "./Card"
import Hero from "./Hero"
import Navbar from "./Navbar"
import dataFile from "../../data"

function App() {
  const cardData = dataFile.map(function(data){
    return <Card img={data.coverImg}
                rating={data.stats.rating} 
                reviewCount={data.stats.reviewCount}
                location={data.location}
                title={data.title}
                price={data.price}
          />
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards--list">
        {cardData}
      </section>
    </>
  )
}

export default App
