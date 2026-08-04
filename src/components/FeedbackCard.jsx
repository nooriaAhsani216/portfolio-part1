
export default function FeedbackCard({name,comment,rating}) {
  return (
    <div  className="bg-card p-4 rounded-xl ">
      <h3 className="font-bold text-muted">{name}</h3>
            <div className="text-yellow-400">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>
      <p className="text-gray-300 text-sm">{comment}</p>
    </div>
  )
}
