import React, { useState } from "react";
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

  return (
    <div className="py-10 mt-5" id="contact">
      <div className="container mx-auto px-5 md:px-16 lg:px-24 space-x-5 mt-10 py-12">
        <h2 className="text-4xl font-bold text-center mb-12">Contact me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership
              opportunities
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a
                href="mailto:segunolowoyeye@gmail.com"
                className="hover:underline"
              >
                segunolowoyeye@gmail.com
              </a>
            </div>

            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
              <span>+2347031160996</span>
            </div>
            <div className="mb-4 ">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
              <span>Ketu,Lagos, Nigeria</span>
            </div>
          </div>
          <div className="flex-1 w-full space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} target="_blank">
              <div>
                <label htmlFor="name" className="block my-2 ">
                  Your Name
                </label>
                <input
                  {...register("name", {
                    required: "kindly enter your name",
                  })}
                  type="text"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
                {errors.name && (
                  <div className="text-red-600">{errors.name.message}</div>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block my-2 ">
                  Email Address
                </label>
                <input
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  type="email"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400 text-white"
                  placeholder="Enter Your Email Address"
                />
                {errors.email && (
                  <div className="text-red-600">{errors.email.message}</div>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block my-2 ">
                  Message
                </label>
                <textarea
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Write me a message"
                  {...register("message", {
                    required: "Enter message",
                  })}
                ></textarea>
                {errors.message && (
                  <div className="text-red-600">{errors.message.message}</div>
                )}
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full my-2"
              >
                {submitButton}
              </button>
              {message && (
                <span className="text-green-400 ml-2">
                  Form submitted successfully!
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
