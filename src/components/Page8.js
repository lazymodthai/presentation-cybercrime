import React from "react";
import "./PageStyles.css";
import { Parallax } from "react-scroll-parallax";
import Endimage from "../images/peakpx.jpg";
function Page8() {
  return (
    <div className="pageContainer page-1">
      <Parallax speed={10} className="head">
        <h1 className="gdtext">อย่าถูกหลอกกันนะครับ</h1>
      </Parallax>
      <Parallax speed={50}>
        <img src={Endimage} alt="end" style={{maxHeight:"100vh"}}/>
      </Parallax>
    </div>
  );
}

export default Page8;
