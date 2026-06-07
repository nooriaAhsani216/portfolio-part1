import { UserContext } from "./ThemeContext"
import profileImg from "../assets/images/coding.jfif";
export default function UserProvider({ children }) {
  const user = {
    name: "Nooria",
    title: "Frontend Developer",
    bio: "Loves React and clean UI",
    photo: profileImg,
    message: "Welcome to my portfolio"
  }
  return (
    <UserContext.Provider value={user} >
      {children}
    </UserContext.Provider>
  )
}
