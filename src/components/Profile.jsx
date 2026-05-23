
export default function Profile({ photo, title, bio }) {
    
    return ( 
        <div className="bg-[#0a1f44] p-10">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-6 hover:scale-[1.02] transition-all duration-300">
             <img src={photo} alt="profile"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover  shadow-md"/>
            <div className="text-center md:text-left text-white">
          <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
           <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed">{bio}</p>
           </div>
        </div>
        </div>
    )
}
