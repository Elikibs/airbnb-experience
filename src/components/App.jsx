import Card from "./Card"
import Hero from "./Hero"
import Navbar from "./Navbar"
import katieZaferesImage from "../images/katiezaferes.png"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        img= {katieZaferesImage}
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
