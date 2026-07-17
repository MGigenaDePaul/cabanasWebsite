import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cabins from './components/Cabins'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Cabins />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
