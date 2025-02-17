/* eslint-disable react/prop-types */
import { useState } from "react";
import "../index.css";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";


const ProjectCard = (props) => {

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="scene" 
        onMouseEnter={() => setIsFlipped(true)} 
        onMouseLeave={() => setIsFlipped(false)}
        >

      <div className={`${isFlipped ? "card is-flipped" : "card"}`}>
        <div className="card_face front border border-white text-white border-solid mx-3 rounded-tl-[60px] rounded-br-[60px] projectCard group z-10 hover:scale-110 
      bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 flex flex-row">
          
          <h1 className="text-2xl font-bold mb-10">{props.title}</h1>
          <p className="px-5">{props.description}</p>

        </div>

        <div className="card_face back border border-white text-white border-solid mx-3 rounded-tl-[60px] rounded-br-[60px] projectCard group z-10 hover:scale-110 
          bg-black bg-opacity-20 bg-clip-padding backdrop-filter backdrop-blur-lg">
            
            <img src={props.image} alt="" className="border border-white border-solid w-[200px] h-[150px] my-5" />

            <p className="my-5">{props.techStack}</p>

            <div className="w-full flex justify-around items-center px-5">
              <Link to={props.projectLink} target="_blank" className="border border-white border-solid bg-white text-black px-10 py-2 rounded-tl-lg rounded-br-lg">Visit</Link>
              <Link to={props.githubLink} target="_blank"><FaGithub size={20} className="cursor-pointer"/></Link>
            </div>
        </div>


      </div>
    </div>
  )
}



export default ProjectCard
