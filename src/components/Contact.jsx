import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submitButton, setSubmitButton] = useState("Send Message");
  const [message, setMessage] = useState("");

  // Submit Form
  const onSubmit = async (data) => {
    setSubmitButton("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mjvnkeqy", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        reset();
      } else {
        setMessage("Error sending message. Please try again.");
      }
    } catch (error) {
      setMessage("Error sending message. Please try again.");
    } finally {
      setSubmitButton("Send Message");
    }
  };

  // Animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative py-20 overflow-hidden bg-black/5"
      id="contact"
    >
      {/* 🌌 Background Design */}

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Left Glow */}
      <div className="absolute top-10 left-[-100px] w-[300px] h-[300px] bg-green-500/20 blur-3xl rounded-full" />

      {/* Right Glow */}
      <div className="absolute bottom-10 right-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Center Glow */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-green-400/10 to-blue-500/10 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-5 md:px-16 lg:px-24 relative z-10">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Contact
          </span>{" "}
          Me
        </h2>

        {/* Main Layout */}
        <motion.div
          className="flex flex-col md:flex-row gap-10 items-stretch"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* LEFT SIDE */}
          <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
            
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-5">
              Let's Talk
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I'm open to discussing frontend development projects,
              internships, freelance opportunities, and partnerships that
              improve business operations and user experience.
            </p>

            {/* Contact Items */}
            <div className="mt-10 space-y-6">
              
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-white/5 border border-white/10">
                  <FaEnvelope className="text-green-400 text-lg" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>

                  <a
                    href="mailto:segunolowoyeye@gmail.com"
                    className="hover:text-green-400 transition duration-300"
                  >
                    segunolowoyeye@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-white/5 border border-white/10">
                  <FaPhone className="text-green-400 text-lg" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>

                  <span>+234 703 116 0996</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-white/5 border border-white/10">
                  <FaMapMarkedAlt className="text-green-400 text-lg" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>

                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Your Name
                </label>

                <input
                  {...register("name", {
                    required: "Please enter your name",
                  })}
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-green-400 transition duration-300"
                />

                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email Address
                </label>

                <input
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-green-400 transition duration-300"
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    Please enter a valid email
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write me a message..."
                  {...register("message", {
                    required: "Please enter your message",
                  })}
                  className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:border-green-400 transition duration-300 resize-none"
                ></textarea>

                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-green-500/20"
              >
                {submitButton}
              </button>

              {/* Success Message */}
              {message && (
                <p className="text-green-400 text-sm mt-2">{message}</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}