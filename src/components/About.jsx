import { useState } from "react"
export default function About() {
  const [showMore,setShowMore] = useState(false);

  const MY_HOBBIES = [
    "Coding",
    "Reading",
    "Photography",
    "Drinking coffee"
  ]
  const button ="mt-8 px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-bold text-sm md:text-lg transition-all hover:scale-105 hover:shadow-lg cursor-pointer";
  return (
    <section className=" bg-[#0a1f44] mx-auto w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center">
     <div className="w-full max-w-3xl text-center">
       <h2 className="text-4xl font-bold text-[#D4AF37] mb-5 ">About Me</h2>
      <p className="text-white  text-base sm:text-lg  md:text-xl leading-relaxed ">I am a passionate frontend developer who enjoys learning React, English, and German every day. I love building creative web projects and continuously improving my skills. My goal is to become a full-stack developer and create useful applications that help people</p>

  <div>
        <button onClick={()=>setShowMore(prev =>!prev)}  className={button}>{showMore ? "Show Less":"Show More"}</button>
      {
        showMore && (
         <div className="mt-6 w-full">
           <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white text-center"> My Hobbies</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MY_HOBBIES.map((item,i)=>{
            return(
              <li key={i}  className="w-full text-white text-xs bg-white/10 px-4 py-2 rounded-lg 
                     hover:bg-white/20 transition-all duration-300 
                     cursor-default ">{item}</li>
            )
           })}
            </ul>
         </div>
        )
      }
  </div>
       
     </div>
    </section>
  )
}
