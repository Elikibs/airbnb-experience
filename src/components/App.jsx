import Card from "./Card"
import Hero from "./Hero"
import Navbar from "./Navbar"
import dataFile from "../../data"

function App() {
  const cardData = dataFile.map(function(data){
    return <Card 
              key={data.id}
              {...data}
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
