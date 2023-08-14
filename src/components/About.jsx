import React from "react";
import profilePic from "../assets/profilePic.png";
// import { useEffect } from "react";
import PicDisplay from "./PicDisplay";
import capstoneShowcase from "../assets/capstoneShowcase.JPG";
import Training from "../assets/TrainingPic.JPG";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 ">
      <div class="max-w-[1000] mx-auto px-8 flex flex-col justify-center h-full">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "auto",
          }}
        >
          <PicDisplay imageUrl={profilePic} width="55%">
            {" "}
            Currently I am an application support engineer at Fusion Health. My
            responsibilities are to communcate and trouble shoot issues with end
            users and make sure the application runs smoothly. This involves
            server side maintanance,querying through the Database to update
            tables or other information.
          </PicDisplay>

          <PicDisplay imageUrl={capstoneShowcase}>
            I have a Bachlors of Science from The New Jersey Instiute of
            Technology in Information Technology with a specialty in Networking
            Security. I learned a variety of skills from the school which
            include Programming and Networking. I even took first in the Senior
            captsone Networking project.
          </PicDisplay>

          <PicDisplay imageUrl={Training}>
            On my free time I train and practice in MMA I am skilled in
            Ju-jitsu,Muy Thai and wrestling. I loved playing sports growing up
            as a kid,wrestling was my favorite.
          </PicDisplay>
        </div>
      </div>
    </div>
  );
};

export default About;
