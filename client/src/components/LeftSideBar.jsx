import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const LeftSideBar = () => {

  const [isBackGroundBlack , setIsBackGroundBlack] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const darkPaths = ["/projects","/skills"]

    if(darkPaths.includes(location.pathname))
    {
      setIsBackGroundBlack(true)
    }

  },[])

  return (
    <div className="w-[5vw] h-full flex flex-col justify-around items-center">
      <a href={"/ARSHIK_RESUME_1.pdf"} target="_blank" className={`text-2xl -rotate-90 cursor-pointer hover:scale-125 transition-all duration-300 ease-in 
        ${isBackGroundBlack ? "invert" : ""}`}>Resume</a>
      <Link to={"/projects"} className={`text-2xl -rotate-90 cursor-pointer hover:scale-125 transition-all duration-300 ease-in 
        ${isBackGroundBlack ? "invert" : ""}`}>Projects</Link>

      <div className={isBackGroundBlack ? "invert" : ""}>
        <FaLinkedin size={25} className="my-3 cursor-pointer hover:scale-125 transition-all duration-300 ease-in"/>
        <FaGithub size={25} className="my-3 cursor-pointer hover:scale-125 transition-all duration-300 ease-in"/>
        <FaTwitter size={25} className="my-3 cursor-pointer hover:scale-125 transition-all duration-300 ease-in"/>
        <FaFacebook size={25} className="my-3 cursor-pointer hover:scale-125 transition-all duration-300 ease-in"/>
        <FaYoutube size={25} className="my-3 cursor-pointer hover:scale-125 transition-all duration-300 ease-in"/>
      </div>
    </div>
  )
}

export default LeftSideBar
