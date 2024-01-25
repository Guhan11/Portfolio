import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TouristGuideApplicationDesc : "This project designed for tourists to find hidden places and translate them into their native language. It will be usefull for foreigners and native language tourists. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TouristGuideApplicationGithub : "https://github.com/Guhan11",
    // TindogWebsite : "https://devanshsahni.github.io/tindog/",

    SecuritySystemForAtmUsersDesc : "This project was designed for ATM user to imporve security. our security model would combine a physical access card and electronic facial recognition using a deep Convolutional Neural Network and unknown face forwarder mechanism. This was a group project made in a team of two",
    SecuritySystemForAtmUsersGithub : "https://github.com/Guhan11",
    // RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    ReturnablePackageDesc:" This project was created to cut down on packing waste. We oversee all kit specifics both on the client's end and in the warehouse. I worked on backend development, utilizing MySQL and Spring Boot to store and track the details.",
    ReturnablePackageGithub:"https://github.com/Guhan11",
    // NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    WarehouseManagementDesc:"This project was created for managing the kit warehouse at various locations. I worked on backend development, utilizing MySQL and Spring Boot to store and track the kits in different warehouse.",
    WarehouseManagementGithub:"https://github.com/Guhan11",
    // WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox