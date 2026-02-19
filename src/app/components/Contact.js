"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "portfolio", // ✅ Your Service ID
        "template_9hqfn5e", // ✅ Your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "fmyWvPkcUvM5vpcDT" // 🔴 Replace this with your EmailJS Public Key
      );

      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-16 px-6 relative scroll-mt-28">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let’s Build Something Great Together
          </h2>
          <p className="text-[var(--gray-11)] mt-4 max-w-lg mx-auto text-sm">
            Open to freelance projects and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail size={20} />
              <p className="text-sm">keerthivasan903@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <Phone size={20} />
              <p className="text-sm">+91 8056455767</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin size={20} />
              <p className="text-sm">Thanjavur, Tamil Nadu</p>
            </div>

            <a
              href="https://www.linkedin.com/in/keerthvasan2282"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 text-white text-sm"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}