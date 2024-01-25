import React from 'react'; 
//import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaGitAlt, FaGithub,FaJava,FaHtml5,FaCss3Alt} from "react-icons/fa";
import {} from "react-icons/di";
import { SiPostman,SiSpringboot,SiMysql,SiJson,SiJsonwebtokens,SiSwagger} from "react-icons/si";



const Skills = ({skill}) => {
    const icon = {
        Java: <FaJava/>,
        SpringBoot : <SiSpringboot />,
        Mysql : <SiMysql />,
        Json: <SiJson />,
        Swagger : <SiSwagger />,
        React: <FaReact/>,
        Html : <FaHtml5 />,
        Css : <FaCss3Alt />,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Postman : <SiPostman/>,
        JsonWebToken : <SiJsonwebtokens />      
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
