import { useEffect, useState } from "react";
export default function Contact() {
  const inputStyle = "w-full border rounded-md border-[#D4AF37]  p-3 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
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
    <section className="min-h-screen flex  items-center justify-center p-6">
      {/* <h3 className="text-3xl font-bold text-center text-white mb-2">Get in touch</h3> */}

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md  shadow-xl rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col  gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={inputStyle}

          />
          {errors.name && <p  className="text-red-500 text-sm">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={inputStyle}
          />
          {errors.email && <p  className="text-red-500 text-sm">{errors.email}</p>}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={inputStyle}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          <button className=" text-[#D4AF37] rounded-md border p-2 hover:bg-[#D4AF37] hover:text-white cursor-pointer">Send</button>
        </form>
        {success ? (
          <div className=" w-1/2 mt-4 bg-white text-black px-4 py-2 rounded shadow-lg animate-bounce text-end">
            Message sent successfully 🎉
          </div>
        ) : ""}
        {hasSavedData && (
          <p className="text-yellow-300 mb-4">
            You have unsent message data saved!
          </p>
        )}
        <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10 text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            👀 Live Preview <span className="animate-bounce">⚡</span>
          </h3>

          <p className="mb-2">
            👤 <span className="font-semibold">
              {formData.name || "No name yet"}
            </span>
          </p>

          <p className="mb-2">
            📧 <span >
              {formData.email || "No email yet"}
            </span>
          </p>

          <p>
            💬 <span>
              {formData.message || "Start typing your message..."}
            </span>
          </p>
        </div>
      </div>

    </section>
  )
}
