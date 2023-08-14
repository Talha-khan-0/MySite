import React from "react";
import "../components/Avatar.css";
import profilePic from "../assets/portfolioPic.JPG";

function Avatar(props) {
  return <img className="circle-img" src={profilePic} alt="avatar_img" />;
}

export default Avatar;
