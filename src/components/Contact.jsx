import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="py-10" id="contact">
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
          <div className="flex-1 w-full">
            <form
              action="https://formspree.io/f/mjvnkeqy"
              method="POST"
              enctype="multipart/form-data"
            >
              <div>
                <label htmlFor="name" className="block my-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block my-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400 text-white"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block my-2">
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Write me a message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full my-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
