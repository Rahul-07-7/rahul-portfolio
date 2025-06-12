import React, { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const res = await fetch("https://rahul-portfolio-ld1r.onrender.com//contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        console.log("Email sent:", result);
      } else {
        alert("Failed to send. Try again later.");
      }
    } catch (err) {
      console.error("Error:", err);
    }

    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="pb-3 ms-0 xl:ms-[280px] px-4">
      <div className="mb-6">
        <h1 className="relative text-[30px] font-semibold mb-4 inline-block after:block after:w-16 after:h-[3px] after:bg-blue-500 after:mt-1">
          Contact
        </h1>
        <p className="text-gray-500 mt-1">Get in touch with me</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 bg-white border border-gray-200 p-6 rounded-xl shadow-xl">
        {/* Left Side Info */}
        <div className="space-y-6 text-gray-700">
          <div className="flex items-start gap-4">
            <i className="fa-solid fa-location-dot text-blue-600 text-2xl mt-1"></i>
            <div>
              <h3 className="text-lg font-semibold">Location:</h3>
              <p>D-306, Mukhyamantri Aavas, Chitra, Bhavnagar, Gujarat</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="fa-solid fa-envelope text-blue-600 text-2xl mt-1"></i>
            <div>
              <h3 className="text-lg font-semibold">Email:</h3>
              <a
                href="mailto:jogadiyarahul@gmail.com"
                className="hover:underline"
              >
                jogadiyarahul@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <i className="fa-solid fa-phone text-blue-600 text-2xl mt-1"></i>
            <div>
              <h3 className="text-lg font-semibold">Call:</h3>
              <a href="tel:+917984289055" className="hover:underline">
                +91 7984289055
              </a>
            </div>
          </div>

          <iframe
            title="location"
            className="w-full h-64 border rounded"
            src="https://www.google.com/maps?q=chitra%20bhavnagar&output=embed"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 relative">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded focus:outline-blue-400"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-blue-400"
            required
          />
          <textarea
            rows="6"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded focus:outline-blue-400"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-rose-500 text-white px-6 py-2 rounded hover:bg-rose-700 transition"
          >
            Send Message
          </button>

          {submitted && (
            <div className="bg-green-100 border border-green-300 text-green-800 text-center mt-4 p-2 rounded shadow">
              Form has been submitted!
            </div>
          )}
        </form>
      </div>

      <div className="mt-10 text-center">
        <p>
          © Copyright <span className="font-bold">Rahul</span> All Rights
          Reserved
        </p>
        <p>
          Designed by <span className="font-bold">Rahul</span>
        </p>
      </div>
    </section>
  );
}

export default Contact;
