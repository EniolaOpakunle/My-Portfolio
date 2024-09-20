import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-backgroundBlue" id="contact">
      <div className="w-[86%] m-auto lg:flex justify-between items-center py-10">
        <div>
          <p className="text-[20px] font-[600] text-customBlue">
            Deborah Opakunle
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex space-x-2 pt-3">
            <a
              href="https://www.linkedin.com/in/deborah-opakunle"
              className="bg-customBlue w-8 h-8 rounded-full flex justify-center items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={15} color="white" />
            </a>
            <a
              href="https://github.com/EniolaOpakunle"
              className="bg-customBlue w-8 h-8 rounded-full flex justify-center items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={15} color="white" />
            </a>
            <a
              href=""
              className="bg-customBlue w-8 h-8 rounded-full flex justify-center items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={15} color="white" className="" />
            </a>
          </div>
          <p className="text-[14px] font-[500]">
            Copyright 2024. By Deborah Opakunle
          </p>
        </div>
      </div>
    </div>
  );
}
