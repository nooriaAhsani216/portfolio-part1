import Header from "../components/Header"
import Profile from "../components/Profile"
import FeedBack from "../components/FeedBack"
import profileImg from '../assets/images/coding.jfif'



export default function Home() {
  return (
    <div>
      <Header name="I am Nooria"  />
            <Profile/>
            <FeedBack />
    </div>
  )
}
