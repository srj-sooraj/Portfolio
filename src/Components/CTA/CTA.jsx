import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function CTA() {

  const [showPopup,setShowPopup] = useState(false)
  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const sendEmail = (e)=>{
    e.preventDefault()

    emailjs.send(
      "service_0mw10mc",   
      "template_oe7i2qc",  
      {
        from_name:form.name,
        from_email:form.email,
        message:form.message
      },
      "IjiHaUU0JlDH47uwt" 
    )
    .then(()=>{
      alert("Message sent successfully")
      setShowPopup(false)
      setForm({name:"",email:"",message:""})
    })
    .catch(()=>{
      alert("Failed to send message")
    })
  }

  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20 left-1/2 -translate-x-1/2 top-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto"
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let's build something
          <span className="block bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            extraordinary together
          </span>
        </h2>

        <p className="text-gray-400 mb-10">
          Whether you have an idea, a project, or just want to collaborate.
        </p>

        <button
          onClick={()=>setShowPopup(true)}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition shadow-xl"
        >
          Start a Conversation
        </button>

      </motion.div>


      {/* POPUP FORM */}

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-gray-900 p-8 rounded-xl w-[400px]">

            <h3 className="text-2xl font-bold mb-4 text-white">
              Send Message
            </h3>

            <form onSubmit={sendEmail} className="flex flex-col gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="p-3 rounded bg-gray-800 text-white"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-3 rounded bg-gray-800 text-white"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                required
                className="p-3 rounded bg-gray-800 text-white"
              />

              <button
                type="submit"
                className="bg-purple-600 py-3 rounded"
              >
                Send Message
              </button>

              <button
                type="button"
                onClick={()=>setShowPopup(false)}
                className="text-gray-400 text-sm"
              >
                Cancel
              </button>

            </form>

          </div>

        </div>
      )}

    </section>
  );
}

export default CTA;