// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import { Slide, Flip } from "react-reveal";
import Post from "./PostCard";
import Team from './TeamCard';
import ContactUs from './ContactUs';
import faculty from '../Constant/Teacher';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
import Faculty from './FacultyCard';
import TeamData from '../Constant/TeamData';
import EventData from '../Constant/Event';


export default function Main() {

  const [members, setMembers] = useState([]);
  const [posts, setPosts] = useState([]);

  const getMembers = async () => {
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }
    let reqOptions = {
      url: "http://localhost:8080/CoreMembers//all",
      method: "GET",
      headers: headersList,
    }

    let response = await axios.request(reqOptions);
    console.log(response.data);
    setMembers(response.data);
  }


  const getPost = async () => {
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }
    let reqOptions = {
      url: "http://localhost:8080/post/all",
      method: "GET",
      headers: headersList,
    }

    let response = await axios.request(reqOptions);
    console.log(response.data);
    setPosts(response.data);
  }



  useEffect(() => {
    getMembers();
    getPost();
  }, []);


  return (
    <section className="text-black body-font lg:pt-2">
      <div className="bg-home ">
        <div className="container  mx-auto min-h-[95vh]  lg:py-4">
          <Flip duration={1300} top cascade >
            <div className="flex flex-col w-full pt-32 mb-2 text-center md:text-center ">
              <h1 className="mb-2 text-4xl lg:text-8xl font-extrabold tracking-tight  text-white  md:text-7xl heading ">
                Turing
                <br />
                Artificial Intelligence
                <br />
                Student Committee

              </h1>
              <br></br>
              <p className="mx-auto text-xl lg:text-3xl font-normal leading-relaxed text-gray-200 dark:text-gray-300 lg:w-2/3">

                D

                <AutoTyping
                  active // <boolean>
                  textRef='epartment of Artificial Intelligence and Machine Learning ' // <string>
                  writespeed={1000} // <number>
                  deletespeed={700} // <number>
                  delaytowrite={10} // <number>
                  delaytodelete={1800} // <number>
                />{" "}
                <BlinkCursor
                  active // <boolean>
                  blinkspeed={300} // <number>
                />
              </p>
            </div>
          </Flip>
        </div>
      </div>

      {/* about us section */}

      <section className="text-gray-200 body-font bg-features" >
        <div className="text-center pt-20 ">
          <Slide top cascade>
            <h2
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-1"
              className="text-5xl sm:text-6xl font-medium title-font text-white mb-4">
              About Us
            </h2>
            <p
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="1"
              className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Our mission, vision, and values
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
          </Slide>
        </div>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <Slide duration={1300} left cascade>
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
              <img
                alt="feature"
                className="object-cover object-center h-full w-full"
                src="images/bghome.jpg"
              ></img>
            </div>
          </Slide>
          <Slide duration={1300} right cascade>
            <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center backdrop-blur-md">
              <div className="flex flex-col mb-10 lg:items-start items-center ">
                <div className="flex-grow">
                  <h2

                    data-scroll
                    data-scroll-speed="1"
                    className="text-white text-2xl title-font font-medium mb-3">
                    Mission
                  </h2>
                  <p className="leading-relaxed text-lg">
                    Our mission is to educate and engage members about the latest developments and applications of artificial intelligence, and to foster collaboration and discussion within the AI community.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-medium mb-3">
                    Vision
                  </h2>
                  <p className="leading-relaxed text-lg">
                    Our vision is to become a leading hub for AI research and development, and to help drive innovation and progress in the field.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-medium mb-3">
                    Values
                  </h2>
                  <p className="leading-relaxed text-lg">
                    Our values include creativity, collaboration, inclusivity, ethics, and excellence in everything we do.
                  </p>
                </div>
              </div>
              <div className="flex flex-col mb-10 lg:items-start items-center">
                <div className="flex-grow">
                  <h2 className="text-white text-2xl title-font font-medium mb-3">
                    Belief
                  </h2>
                  <p className="leading-relaxed text-lg">
                    We believe in the potential of AI to improve our world, and we strive to use it responsibly and ethically.
                  </p>
                </div>
              </div>

            </div>
          </Slide>
        </div>

      </section>


      {/* Faculty Section */}
      <div className=' bg-teacher' id='faculty' >
        <section className="text-gray-200 body-font pt-10 min-h-[80vh]">
          <div className="container px-5 mx-auto">
            <div className="text-center">
              <Slide top cascade>
                <h2
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-1"
                  className=" text-5xl sm:text-6xl font-medium title-font text-white mb-4">
                  Our Faculty
                </h2>
                <p
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="1"
                  className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ">
                  Meet the leaders who make things happen <br></br> on campus
                </p>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
                </div>
              </Slide>
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4 gap-x-14 gap-y-7 ">
                  {faculty.map((member, key) => {
                    return (
                      <Faculty key={key} member={member} />
                    )
                  })}
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Team Section */}
      <div className=' bg-team ' >
        <section className="text-gray-200 body-font pt-10 min-h-[80vh]">
          <div className="container px-5 mx-auto">
            <div className="text-center">
              <Slide top cascade>
                <h2
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-1"
                  className=" text-5xl sm:text-6xl font-medium title-font text-white mb-4">
                  Our Team
                </h2>
                <p
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="1"
                  className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                  The faces behind the student committee, <br /> who we are and what we do
                </p>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
                </div>
              </Slide>
              <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-wrap -m-4 gap-4 ">
                  {TeamData.map((member, key) => {
                    return (
                      <Team key={key} member={member} />
                    )
                  })}
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Post Section */}
      <div className="bg-post">
        <section className="text-gray-200 body-font  py-10 min-h-[80vh]">
          <div className="container px-5 mx-auto">
            <div className="text-center ">
              <Slide top cascade >
                <h2
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-1"
                  className="text-5xl sm:text-6xl font-medium title-font text-white mb-4">
                  Events
                </h2>
                <p
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="1"
                  className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                  Connect with like-minded individuals at our AI event
                </p>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
                </div>
              </Slide>
              <div className="container px-5 pt-16 mx-auto">
                <div className="flex flex-wrap justify-center -m-4 gap-6">

                  {EventData.map((post, key) => {
                    return (
                      <Post key={key} post={post} />
                    )
                  })}

                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      {/* contact us */}
      <div className="bg-contactus">
        <section className="text-gray-200 body-font  py-10 min-h-[80vh]">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-20">
              <Slide top cascade >
                <h2
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="-1"
                  className="text-5xl sm:text-6xl font-medium title-font text-white mb-4">
                  Contact us
                </h2>
                <p
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="1"
                  className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                  Get in touch with us to learn <br /> more about AI and our club
                </p>
                <div className="flex mt-6 justify-center">
                  <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
                </div>
              </Slide>
              <div className="container px-5 pt-16 mx-auto">
                <div className="flex flex-wrap justify-center -m-4 gap-6">
                  <ContactUs />
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

    </section >
  );
}
