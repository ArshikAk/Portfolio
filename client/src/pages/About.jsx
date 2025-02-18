import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Footer from "../components/Footer";
import LeftSideBar from "../components/LeftSideBar";
import Navbar from "../components/Navbar";
import RightSideBar from "../components/RightSideBar";
import profilePicture from "/ak-coat-image.jpg";

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles Initialized");
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "#ffffff" },
    fpsLimit: 60,
    particles: {
      number: { value: 120, density: { enable: true, value_area: 800 } },
      color: { value: ["#5E60CE", "#48BFE3", "#4EA8DE"] },
      shape: { type: "triangle" },
      opacity: { value: 0.7, random: true },
      size: { value: 5, random: true },
      move: { enable: true, speed: 2, direction: "none", outModes: "out" },
      links: {
        enable: true,
        distance: 150,
        color: "#888888",
        opacity: 0.5,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 4 },
      },
    },
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
     
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full"
      />

      <div className="relative z-10">
        <Navbar />
        <div className="flex flex-col md:flex-row justify-between items-start w-full h-[80vh] my-[3vh]">
          <LeftSideBar />

          
          <div className="w-[90%] md:w-[75%] lg:w-[60%] mx-auto bg-transparent bg-opacity-95 p-8 rounded-lg shadow-xl">
            <h1 className="text-3xl underline underline-offset-8 decoration-violet-800 my-5 italic">
              About
            </h1>
            <p className="text-lg my-3 leading-relaxed">
              A dedicated and detail-oriented individual seeking a challenging
              position in a reputable organization to enhance and explore my
              technical knowledge and contribute to the organization&apos;s growth.
            </p>

            <div className="flex flex-col md:flex-row items-center my-10">
             
              <img
                src={profilePicture}
                alt="Profile"
                className="w-[250px] h-[250px] border border-gray-500 rounded-lg shadow-md object-cover"
              />

             
              <div className="md:ml-10 mt-5 md:mt-0">
                <h1 className="text-2xl italic font-semibold">
                  Full Stack Developer
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5 text-gray-700">
                  <p className="flex items-center">
                    <span className="text-lg font-semibold mx-2">Website:</span>
                    <a
                      href="https://www.ak.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      www.ak.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="text-lg font-semibold mx-2">Phone:</span>
                    <a href="tel:1234567890" className="text-blue-600 hover:underline">
                      8248436235
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="text-lg font-semibold mx-2">Email:</span>
                    <a href="mailto:rohini@gmail.com" className="text-blue-600 hover:underline">
                      arshik0404@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center">
                    <span className="text-lg font-semibold mx-2">Degree:</span>
                    B.E CSE
                  </p>
                  <p className="flex items-center">
                    <span className="text-lg font-semibold mx-2">City:</span>
                    Erode
                  </p>
                </div>
              </div>
            </div>

          
            <div className="my-5">
              <h1 className="text-2xl italic font-semibold">What I Do</h1>
              <p className="flex items-center my-2">
                <span className="text-lg font-semibold mx-2">Frontend Development:</span>
                Develop responsive, fast and interactive web application using React and Tailwind CSS.
              </p>
              <p className="flex items-center my-2">
                <span className="text-lg font-semibold mx-2">Web Development:</span>
                Develop robust, secure and smooth backend systems using Node.js, Express.js and MongoDB/MySQL.
              </p>
              <p className="flex items-center my-2">
                <span className="text-lg font-semibold mx-2">Full-Stack Development:</span>
                From idea to deployment, I built complete MERN stack applications with optimized performance, database management, and an engaging user interface.
              </p>
            </div>
          </div>

          <RightSideBar />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
