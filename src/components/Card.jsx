import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function Card({ title, image, Glink, Llink, Details }) {
  return (
    <div className="relative group lg:w-[30%] h-80 bg-gray-300 overflow-hidden rounded-lg">
      {/* Background content, e.g., an image */}
      <img src={image} alt="Coming soon" className="w-full h-full object-cover" />

      {/* Overlay that appears on hover */}
      <div className="absolute inset-0 bg-customBlue bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 ease-in-out flex justify-center items-center">
        <div className="text-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
          <h2 className="text-white text-xl font-bold mb-4">{title}</h2>
          <p className="text-white px-1">{Details}</p>
          <div className="flex justify-center space-x-3">
            <a href={Glink}>
              <FaGithub color="white" size="25" />
            </a>
            <a href={Llink} target="_blank" rel="noopener noreferrer">
              <FaLink color="white" size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
