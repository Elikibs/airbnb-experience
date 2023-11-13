import Card from "./Card"
import Hero from "./Hero"
import Navbar from "./Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </>
  )
}

export default App
