import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";


export default function Login() {

  const [name, setName] = useState("");
  const [usn, setUsn] = useState("");
  const [desc, setDesc] = useState("");


  const handleSubmit = async (e) => {
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "name": name,
      "usn": usn,
      "desc": desc
    });

    let reqOptions = {
      url: "https://tasc-nmamit.onrender.com/CoreMembers/create",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    }
    let response = await axios.request(reqOptions);
    // console.log(response);
  }


  return (
    <div className="bg-black  text-white">

      <Header />
      <section className="text-gray-200 body-font relative">
        <div className="container px-5 pt-24 pb-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-2xl font-semibold title-font mb-4 text-white">
              Enter Your Details
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold">
              Contact us if you have any issues with the website or just want to
              ask a question!
            </p>
          </div>
          <div className="lg:w-3/12 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-md mb-5 text-white font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-md mb-5 text-white font-semibold"
                  >
                    Usn
                  </label>
                  <input
                    type="text"

                    onChange={(e) => setUsn(e.target.value)}
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-md mb-5 text-white font-semibold"
                  >
                    Role
                  </label>
                  <input
                    type="text"

                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    
                    className="leading-7 text-md mb-5 text-white font-semibold"
                  >
                    Profile Picture
                  </label>
                  <input
                    type="file"

                    onChange={(e) => setUsn(e.target.value)}
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              {/* <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-md mb-5 text-white font-semibold"
                  >
                    Description(optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={(e) => setDesc(e.target.value)}
                    className="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div> */}
              <div className="p-2 w-full">
                <button
                  onClick={handleSubmit}
                  className="flex mx-auto text-black bg-white border-0 py-2 px-8 rounded text-lg">
                  Update
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <Link className="text-indigo-500">contact@website.com</Link>
                <p className="leading-normal my-5">
                  Mountain View, CalihtmlFornia, United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <Footer />
    </div>
  );
}
