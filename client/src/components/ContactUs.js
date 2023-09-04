import axios from "axios";
import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_czhl2vi",
        "template_0so9z4d",
        e.target,
        "mUtKiQZA5YboqdkeA"
      );
      alert("Sent Successfully 😁😁 !")
    } catch (error) {
        console.log(error);
        alert("Failed 🥲")
    }
    //form reset
    e.target.reset();
    setName("");
    setEmail("");
    setMessage("");
    setLoading(false);
  };

  return (
    <>
      <div className="flex sm:w-11/12 lg:w-6/12  max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg backdrop-blur-md border-t-2 border-b-2  lg:max-w-4xl ">
        {/* <div className='sm:hidden lg:block  w-1/2' >
                    <img src="/images/contact.jpg" alt="" />
                </div> */}

        <div className="w-full px-6 py-8 md:px-8 ">
          <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
            Contact Us
          </h2>

          <p className="text-xl text-center text-gray-200 dark:text-gray-200">
            We are here to help you !!!
          </p>
          <form onSubmit={handleSubmit} method="POST" action="#">
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
              </div>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="user_email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
                  htmlFor="LoggingEmailAddress"
                >
                  Name
                </label>
              </div>
              <input
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-200 dark:text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Message
                </label>
              </div>

              <input
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="user_message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="mt-6">
              <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                {!loading ? "Send" : "Sending..."}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
