import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import segun2 from "../assets/SEGUN.png";

function Footer() {
  return (
    <>
      <footer className="pt-20 py-3">
        <div className="container mx-auto px-8 md:px-13 lg:px-24">
          <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4 ">
            <div className="flex-1 mb-5 md:mb-0">
              <img src={segun2} alt="" width={85} height={85} />
              <p className="text-gray-400">
                Frontend Developer based in Lagos, Nigeria.
              </p>
            </div>
            <div className="flex-1 w-full">
              <form
                action="https://formspree.io/f/mjvnkeqy"
                method="POST"
                enctype="multipart/form-data"
                className="flex items-center justify-center"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full rounded-lg p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                />
                <button
                  type="submit"
                  className=" bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between mx-auto items-center">
            <p className="text-gray-400">
              &copy;{new Date().getFullYear()}. All right rserved
            </p>
            <div className="flex space-x-5 my-4 md:my-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub />
              </a>
            </div>
            <div>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Services
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
