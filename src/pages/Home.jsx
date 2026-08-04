
import Header from "../components/Header"
import Profile from "../components/Profile"
import About from "./About"
import Projects from "./Projects"
import Feedback from "./Feedback"
import Contact from "./Contact"
import DeveloperStatus from "../components/DeveloperStatus"
export default function Home() {
  return (
     <section>
     <div className="max-w-7xl  mx-auto flex items-center justify-center gap-12 mt-12 lg:flex">
       <Header/>
       <Profile/>
     </div>
     <About/>
     <Projects/>
     <Contact/>
      <Feedback/>
     <DeveloperStatus/>
    </section>
  )
}
