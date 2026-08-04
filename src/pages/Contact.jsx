import { useEffect, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa"
export default function Contact() {
  
  const inputStyle = "w-full px-4 py-3 border-b text-white border-primary rounded-xl  focus:outline-none transition-all "
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [hasSavedData, setHasSavedData] = useState(false);
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setHasSavedData(true);
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log("Saved:", formData);
  }, [formData])

  useEffect(() => {
    if (!formData.email) {
      setErrors(prev => ({ ...prev, email: "" }));
      return;
    }

    const timer = setTimeout(() => {
      if (!formData.email.includes("@")) {
        setErrors(prev => ({
          ...prev,
          email: "Email must contain @"
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          email: ""
        }));
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [formData.email]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value

    }))
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  }
  const validate = () => {
    let newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = "Please enter name";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please write a message";
    }
    return newErrors;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {

      setSuccess(true);
      localStorage.removeItem("formData");
      setHasSavedData(false)
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setTimeout(() => {
        setSuccess(false);
      }, 2000)
    }

  }
  return (
    <section className="max-w-6xl mx-auto py-10 px-6">
      <h3 className="text-2xl text-center text-foreground mb-5">Get in <span className="text-primary italic"> touch</span></h3>
      <div className="grid lg:grid-cols-2 gap-5">
        <div
          className="w-full max-w-3xl bg-card  shadow-xl rounded-3xl border border-primary/30 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your name..."
              value={formData.name}
              onChange={handleChange}
              className={inputStyle}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="Your@email.com"
              value={formData.email}
              onChange={handleChange}
              className={inputStyle}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <textarea
              name="message"
              placeholder="Your message..."
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className="w-full  px-4 py-3 text-white border-b border-primary rounded-xl  focus:outline-none transition-all resize-none"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            <button 
            type="submit"
            className="w-full bg-primary px-4 py-2 rounded-full text-white flex items-center justify-center gap-2 hover:bg-primary/30 transition-all duration-500 ease-in-out cursor-pointer">
              <FaPaperPlane />
              Send Message
            </button>
          </form>
          {success && (
            <div
              className="mt-5 flex items-center gap-3 text-success animate-pulse" >

              <div className="text-xl">
                <FiCheckCircle />
              </div>

              <p className="text-sm font-medium">
                Message sent successfully
              </p>

            </div>
          )}
          {hasSavedData && (
            <p className="text-muted mb-4">
              You have unsent message data saved!
            </p>
          )}

        </div>
        <div className="mt-6 p-6 rounded-2xl bg-card text-white shadow-xl">
          <h3 className="text-base font-bold mb-4 flex items-center gap-2">
            👀 Live Preview <span className="animate-bounce">⚡</span>
          </h3>

          <p className="mb-5 p-2 border-b border-primary rounded-xl">
            👤 <span className="">
              {formData.name || "No name yet"}
            </span>
          </p>
          <p className="mb-5 p-2 border-b border-primary rounded-xl">
            📧 <span >
              {formData.email || "No email yet"}
            </span>
          </p>

          <p className="p-2 border-b border-primary rounded-xl">
            💬 <span>
              {formData.message || "Start typing your message..."}
            </span>
          </p>
        </div>
      </div>

    </section>
  )
}
