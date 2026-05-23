import './App.css'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import profileImg from './assets/images/coding.jfif'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Header name="I am Nooria" message="Welcome to my portfolio" />
      <Profile photo={profileImg} title="Nooria Ahsani" bio="Frontend Developer who loves React and clean UI design." />
      <About />
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
