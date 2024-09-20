import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import backgroundImage from '../assets/images/background1.jpeg'
import bot from '../assets/images/bot.gif'
import animation from '../assets/images/animation.gif'
import About from "./About";
import Projects from "./Projects";
import Footer from "../components/Footer";


export default function () {
  // style={{backgroundImage:  `url(${backgroundImage})`, backgroundSize:'cover'}}
  return (
    <div className="bg-backgroundBlue w-full h-dvh m-auto">
      <div className="lg:grid grid-cols-2 w-[86%] m-auto pt-48 lg:pt-32 items-center">
        <div className="lg:flex flex-col gap-y-3">
          <p className="text-[14px] font-[500] pl-4">Welcome to my portfolio website!</p>
          <h1 className="text-[40px] font-[700] text-customBlue">Hi! I'm Deborah Opakunle</h1>
          {/* <p className="text-[20px] font-[600]">Frontend Developer</p> */}
          <p className="w-[80%] text-[14px] ">
            A passionate frontend developer with a strong commitment to
            continuous learning and growth. I believe in crafting intuitive and
            efficient user interfaces for both web and mobile platforms using
            technologies like React and React Native.
          </p>
          <div className="flex space-x-2 pt-3">
            <a href="https://www.linkedin.com/in/deborah-opakunle" className="bg-customBlue w-8 h-8 rounded-full flex justify-center items-center">
              <FaLinkedin size={15}  color="white"/>
            </a>
            <a href="https://github.com/EniolaOpakunle" className="bg-customBlue w-8 h-8 rounded-full flex justify-center items-center">
              <FaGithub size={15} color="white"/>
            </a>
            <a href="" className="bg-customBlue w-8 h-8 rounded-full flex justify-center items-center">
              <FaTwitter size={15}  color="white" className="" />
            </a>
          </div>
        </div>
        <div>
          <img src={animation} alt="" width={500} />
        </div>
      </div>
      {/* About */}
      <About/>
      {/* Projects */}
      <Projects/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
