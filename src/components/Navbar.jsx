import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");

  const toggleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground("bg-white");
      } else {
        setNavbarBackground("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`w-full fixed z-50 ${navbarBackground} transition-colors duration-300`}
      >
        <div className="py-8 flex m-auto items-center justify-between w-[86%]">
          <div>
            <a href="#" className="text-[20px] text-customBlue">
              Deborah Opakunle
            </a>
          </div>
          <button className="lg:hidden" onClick={toggleNav}>
            <FaBars />
          </button>
          {isOpenNav && (
            <div className="fixed inset-0 h-full w-full bg-black bg-opacity-80">
              <div className="fixed bg-white w-4/6 h-full p-6">
                <FaXmark onClick={toggleNav} />
                <div className="mt-10 flex flex-col gap-y-4">
                  <a href="#" className="text-[14px]" onClick={toggleNav}>
                    Home
                  </a>
                  <a href="#about" className="text-[14px]" onClick={toggleNav}>
                    About
                  </a>
                  <a
                    href="#project"
                    className="text-[14px]"
                    onClick={toggleNav}
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="text-[14px]"
                    onClick={toggleNav}
                  >
                    Contacts
                  </a>
                  <button className="bg-customBlue text-white text-[14px]">
                    <a
                      href="https://drive.google.com/file/d/1rpDisnVbL2BjARkQoqYke1MIUOfqW3IB/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="hidden lg:flex space-x-10">
            <a href="#" className="text-[14px]">
              Home
            </a>
            <a href="#about" className="text-[14px]">
              About
            </a>
            <a href="#project" className="text-[14px]">
              Projects
            </a>
            <a href="#" className="text-[14px]">
              Contacts
            </a>
          </div>
          <div className="hidden lg:flex space-x-4">
            <button className="bg-customBlue text-white text-[14px]">
              <a
                href="https://drive.google.com/file/d/1rpDisnVbL2BjARkQoqYke1MIUOfqW3IB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
