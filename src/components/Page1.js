import React from "react";
import "./PageStyles.css";
import { Parallax } from "react-scroll-parallax";
import Hacker from "../images/hacker.png";
function Page1() {
  return (
    <div className="pageContainer page-1">
      <Parallax speed={10} className="head">
        <h1>ข่าว<span className="gdtext">อาชญากรรม</span>ทางเทคโนโลยี</h1>
      </Parallax>
      <Parallax speed={50} className="hacker">
        <img src={Hacker} alt="hacker" />
      </Parallax>
    </div>
  );
}

export default Page1;
