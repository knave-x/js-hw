import React from "react";
// import "./VideoStyles.css";
import gameVideo from "../assest/gamevideo2.mp4";
import TestNavbar from "./TestNavbar";

const Video = () => {
  return (
    <div className="gameVideo">
      <video autoPlay loop muted id="video">
        <source src={gameVideo} type="video/mp4" />
      </video>
      <div className="content" >
            <h1>gamercv</h1>
            
        </div>
    </div>
  );
};

export default Video;
