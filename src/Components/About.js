import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Guhan</b> and I am from Bengaluru,India.
            I'm a <b>Backend Developer</b> and I'm employed as a software developer trainee at  <b>WhyDigit System Private Limited</b>. <br/><br/>
            I am a dedicated software developer fueled by a fervor for turning ideas into reality through elegant and efficient code. With a background in <b>Spring Boot Framework.</b>
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do travelling, you can check out some of my shots here <a href="https://www.instagram.com/v4.boy_" target='_blank'>Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='Java'/>
        <Skills skill='SpringBoot' /> 
        <Skills skill='Mysql'/>
        <Skills skill='Json'/>
        <Skills skill='Swagger'/>
        <Skills skill='React'/>
        <Skills skill='Html'/>
        <Skills skill='Css'/>
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        <Skills skill='JsonWebToken'/>
      </div>
    </>
  )
}

export default About