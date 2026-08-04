import { useEffect, useState } from "react";
import FeedbackCard from "../components/FeedbackCard";
export default function Feedback() {
  const Input = "w-full px-4 py-5 text-white placeholder-gray-300 focus:outline-none border-b border-primary"
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
    <section className="container  max-w-3xl mx-auto p-8 ">
    <div className="space-y-8">
          <div className="bg-card shadow-2xl rounded-2xl p-6 text-white" >
        <h2 className="text-2xl text-center mb-6">
          We Love hear from you
        </h2>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={Input}
            />
            <div className="flex gap-1 text-3xl ">
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
              rows="3"
              value={formData.comment}
              onChange={handleChange}
              className={Input}
            />
            <button className="w-full bg-primary text-black font-semibold py-3 rounded-lg  transition-all duration-200 active:scale-95">
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
      <div className="space-y-4 ">

        {feedback.map((item) => (
          <FeedbackCard
            key={item.id}
            name={item.name}
            rating={item.rating}
            comment={item.comment} />
        ))}

      </div>
    </div>
    </section>
  )
}