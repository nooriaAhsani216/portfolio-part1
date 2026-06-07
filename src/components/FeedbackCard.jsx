
export default function FeedbackCard({name,comment,rating}) {
  return (
    <div  className="bg-white/10 border border-white/20 p-4 rounded-xl">
      <h3 className="font-bold">{name}</h3>
            <div className="text-yellow-400">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>
      <p className="text-gray-300">{comment}</p>
    </div>
  )
}
