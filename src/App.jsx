import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ProjectDetails from './pages/ProjectDetails'
import Layout from './layout/Layout'
import UserProvider from './context/UserProvider'


function App() {
  return (
    <UserProvider>
    <Routes>
      <Route element={<Layout />}  >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
      <Route path='*' element={<NotFound />} />

    </Routes>
    </UserProvider>


  )
}

export default App
