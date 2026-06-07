import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Layout() {
  return (
    <div  className="min-h-screen bg-[#e1d9b3] text-white dark:bg-[#0F172A] dark:text-white">
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}
