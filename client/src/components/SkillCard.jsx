/* eslint-disable react/prop-types */


const SkillCard = (props) => {
  return (
    <div className="w-[250px] h-[300px] bg-transparent text-black rounded-tl-[50px] rounded-br-[50px] hover:scale-110 transition-all duration-500 
    flex flex-col justify-center items-center p-5 border border-white border-solid">
      
      <img src={props.image} alt="" className="w-[100px] h-[100px]" />

      <h1 className="text-xl font-bold my-3 text-white">{props.name}</h1>
    </div>
  )
}

export default SkillCard
