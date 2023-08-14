import { useState } from "react";
import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonalLinesFill } from "react-icons/bs";
///import Logo from ".../assests/logo.png";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          {/* navbar menu */}
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>

      {/* socials Icon
      <div className=" hidden lg:flex flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h[60px] flex justify-between items-center">
            <a
              className="flex justify-betweenitems-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaFacebook size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};
