import React from "react";
import profilePic from "../assets/profilePic.png";
import capstoneShowcase from "../assets/capstoneShowcase.JPG";
import { useEffect } from "react";

import "./PicDisplay.css";

const PicDisplay = ({ imageUrl, height, width, children}) => {
  return (
    <div className="container">
      <div className="pic">
        <img src={imageUrl} alt="Profile Image" height={height} width={width}  />
      </div>

      <div className="paragraph">
        <p >{children}</p>
      </div>
    </div>
    // </div>
  );
};

export default PicDisplay;
