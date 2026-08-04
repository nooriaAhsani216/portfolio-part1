import { UserContext } from "./ThemeContext"
import profileImg from "../assets/images/coding.jfif";
export default function UserProvider({ children }) {
  const user = {
    name: "Hi, I'm Nooria",
    title: "Frontend Developer",
    bio: "Loves React and clean UI",
    photo: profileImg,
    message: "Welcome"
  }
  return (
    <UserContext.Provider value={user} >
      {children}
    </UserContext.Provider>
  )
}
