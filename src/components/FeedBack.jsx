import { useEffect, useState } from "react";
import FeedbackCard from "./FeedbackCard";
export default function FeedBack() {
  const Input = "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-yellow-400"
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    comment: ""
  })
  const stars = [1, 2, 3, 4, 5];
  const [feedback, setFeedBack] = useState(() => {
    const savedFeedBacks = localStorage.getItem("feedback");
    return savedFeedBacks ? JSON.parse(savedFeedBacks) :
      [{
        id: 1,
        name: "Ahmad",
        rating: 5,
        comment: "Amazing experience!"
      },
      {
        id: 2,
        name: "Sara",
        rating: 4,
        comment: "Very good, I liked it."
      }]
  }
  );
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback))
  }, [feedback])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

  }
  const handleClick = (star) => {
    setFormData(prev => ({
      ...prev,
      rating: star
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedBack(prev => [
      ...prev,
      {
        ...formData,
        id: Date.now()
      }
    ])
    setFormData({
      name: "",
      rating: 0,
      comment: ""
    });

  }
  return (
    <section className="container mx-auto p-8 w-full max-w-3xl">
      <div className=" bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6 text-white" >
        <h2 className="text-2xl font-bold text-center mb-6">
          We Love hear from you
        </h2>

        <div className="flex flex-col gap-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={Input}
            />
            <div className="flex gap-1 text-3xl">
              {stars.map((star) => {
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleClick(star)}
                  >  {star <= formData.rating ? (
                    <span className="text-yellow-500">☆</span>
                  ) : (<span className="text-gray-400">☆</span>)}</button>
                )
              })}
            </div>
            <textarea
              name="comment"
              placeholder="Share your feedback..."
              rows="5"
              value={formData.comment}
              onChange={handleChange}
              className={Input}
            />
            <button className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg  transition-all duration-200 active:scale-95">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
      <div className="space-y-4 mt-6">

        {feedback.map((item) => (
          <FeedbackCard
            key={item.id}
            name={item.name}
            rating={item.rating}
            comment={item.comment} />
        ))}

      </div>
    </section>
  )
}