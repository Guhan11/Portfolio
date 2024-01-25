import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4> by Guhan</h4>
      <h4>Copyright &copy; 2023 G</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Guhan11" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/guhanpadmanathan/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:mrguhan2302@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/guhanpadmanathan/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer