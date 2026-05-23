export default function Header({ name, message }) {
    const quotes = [
        "Believe in yourself",
        "Never give up",
        "Believe you can and you're halfway there.",
        "Choose to be optimistic,it feels better"
    ]
    const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)]
    return (
        <header className="bg-[#0a1f44] text-white text-center p-10 md:p-20">
            <h1 className="text-3xl md:text-4xl font-bold">{message}</h1>
            <p className="mt-4 text-gray-300 text-sm md:text-2xl">{name}</p>
            <div className="mt-8 bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-xl inline-block transition hover:scale-105">
                <p className="text-[#D4AF37] italic text-sm md:text-base">
                    💡 {randomQuotes}
                </p>
            </div>
        </header>
    )
}