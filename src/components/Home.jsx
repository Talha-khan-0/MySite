import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Avatar from "./Avatar";

const Home = () => {
  return (
    <>
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      
      {/* container */}
      <div className="max-w-[1000] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="homePic">   
          <Avatar />
        </div>
        <p className="text-pink-600">Hello my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Mohammad Talha Khan{" "}
        </h1>
        <h2 className=""></h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am an aspiring software engineer with great ambition in cybersecurity and fullstack devolopment. 
          I am looking for work as a deoloper and I have great interest and ambition to learn. 
          Welcome to my personal website where you can learn more about me!
        </p>

        <div>
          {/* <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View work
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
