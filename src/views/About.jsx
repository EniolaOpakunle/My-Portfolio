import React from "react";
import htmlImg from "../assets/images/html.svg";
import cssImg from "../assets/images/css3.svg";
import bootstrapImg from "../assets/images/bootstrap.jpeg";
import tailwindImg from "../assets/images/tailwindcss.svg";
import reactImg from "../assets/images/react.svg";
import reactNativeImg from "../assets/images/reactNative.png";
import gitImg from "../assets/images/git.svg";

export default function About() {
  return (
    <div id="about" className="w-full bg-backgroundBlue  mt-0 py-20">
      <div className="w-[90%] m-auto space-y-10">
        <div className="bg-white p-10">
          <p className="title text-center">About Me</p>
          <div className=" pt-5">
            <p className="text-center">
              I'm a passionate frontend developer with a strong focus on
              creating intuitive and responsive web and mobile applications.
              With expertise in React and React Native, and a growing
              proficiency in TypeScript, I love bringing designs to life through
              clean, scalable code. I'm committed to continuous learning and
              growth, always exploring new technologies and best practices to
              deliver high-quality solutions. For me, anything worth doing is
              worth doing well, and I take pride in crafting user experiences
              that are both functional and enjoyable.
            </p>
          </div>
        </div>
        <div className="bg-white p-10">
          <p className="title mb-4 text-center ">Skills</p>
          <div className="grid grid-cols-2 lg:flex justify-center space-x-5  p-10 rounded-lg">
            <div>
              <p>HTML</p>
              <img src={htmlImg} alt="" />
            </div>
            <div>
              <p>CSS</p>
              <img src={cssImg} alt="" />
            </div>
            <div className="space-y-3">
              <p>Bootstrap</p>
              <img src={bootstrapImg} alt="" width={90} />
            </div>
            <div>
              <p>Tailwind</p>
              <img src={tailwindImg} alt="" />
            </div>
            <div>
              <p>React</p>
              <img src={reactImg} alt="" />
            </div>
            <div>
              <p>React Native</p>
              <img src={reactNativeImg} alt="" width={100} />
            </div>
            <div>
              <p>Git</p>
              <img src={gitImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
