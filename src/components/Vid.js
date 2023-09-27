import React from "react";
import ReactPlayer from "react-player";
import { Parallax } from "react-scroll-parallax";

function Vid() {
  return (
    <div className="pageContainer">
      <Parallax speed={50} className="vid">
        <ReactPlayer
          url="https://www.youtube.com/embed/a2mQP4i9OVk"
          width="1620px"
          height="1080px"
          playIcon="true"
        />
      </Parallax>
    </div>
  );
}

export default Vid;
