import { useContext } from "react";
import { UserContext } from "../context/ThemeContext";

export default function Profile() {
  const user = useContext(UserContext);

  return (
    <section className="hidden lg:block">
        <img
          src={user.photo}
          alt="Profile"
          className="mx-auto h-70 w-70 rounded-full  object-cover shadow-lg"
        />
        <p className="mt-3 leading-7 text-center text-slate-700 font-semibold italic">
          {user.bio}
        </p>
    </section>
  );
}