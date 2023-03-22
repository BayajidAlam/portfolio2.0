import React from 'react';


const Skills = () => {

 
const mySkills = [
  {name: "Html"},
  {name: "Css"},
  {name: "Scss"},
  {name: "Bootstrap"},
  {name: "Tailwind Css"},
  {name: "Javascript"},
  {name: "ES6"},
  {name: "React Js"},
  {name: "Node Js"},
  {name: "Express Js"},
  {name: "MongoDB"},
  {name: "JWt"},
  {name: "Git & Github"},
  {name: "REST API"},
  {name: "Firebase"}
]

  return (
    <div className='lg:py-28 py-6' id='skills'>
        <h1 className='text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500'>My Abilities And Proficiencies</h1>
    <div className='flex flex-wrap container mx-auto gap-6 lg:w-1/2 py-8 px-5'>
      {
        mySkills.map(skill=><p className='border border-white px-4 py-1 text-md rounded-full cursor-pointer hover:bg-blue-500'>{skill.name}</p>)
      }
    </div>
        
    </div>
  );
};

export default Skills;