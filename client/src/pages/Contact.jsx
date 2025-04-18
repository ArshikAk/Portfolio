import { useState } from "react";
import Navbar from "../components/Navbar";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Footer from "../components/Footer";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const particlesInit = (engine) => {
    loadSlim(engine);
  };

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: "#000000",
    },
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      shape: {
        type: "triangle",
      },
      opacity: {
        value: 0.7,
        random: true,
        animation: { enable: true, speed: 1, minimumValue: 0.1 },
      },
      size: {
        value: 6,
        random: true,
        animation: { enable: true, speed: 4, minimumValue: 3 },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
        attract: { enable: true, rotateX: 600, rotateY: 600 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("https://your-backend-url/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message.");
    }
  };
  

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full"
      />

      <Navbar />

      <div className="h-[85vh] flex justify-between">
        <LeftSideBar />

        {/* Form Container */}
        <div className="flex justify-center items-center w-[80vw] overflow-auto mx-10 relative z-10">
          <form
            onSubmit={handleSubmit}
            className="bg-black bg-opacity-70 p-10 rounded-xl shadow-lg w-full max-w-lg"
          >
            <h1 className="text-3xl font-bold mb-6 text-center">Say Hello 👋</h1>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        <RightSideBar />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
