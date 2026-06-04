import './App.css'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import profileImg from './assets/images/coding.jfif'
import Projects from './components/Projects'
import Footer from './components/Footer'
import FeedBack from './components/FeedBack'
import { useState } from 'react'
import { useEffect } from 'react'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
 const [theme, setTheme] = useState("dark");
 useEffect(() => {
  document.documentElement.classList.toggle(
    "dark",
    theme === "dark"
  );
}, [theme]);

const toggleTheme = () => {
  setTheme(prev =>
    prev === "dark" ? "light" : "dark"
  );
};

  return (
    <div className="min-h-screen bg-[#e1d9b3] text-white dark:bg-[#0F172A] dark:text-white">
      <Navbar 
        theme={theme}
        toggleTheme = {toggleTheme}/>
      <Header name="I am Nooria" message="Welcome to my portfolio" />
      <Profile photo={profileImg} title="Nooria Ahsani" bio="Frontend Developer who loves React and clean UI design." />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
     <FeedBack/>
      <Footer/>
    </div>
  )
}

export default App
