import React from "react";
import "./PageStyles.css";
import { Parallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";

function Page6() {
  return (
    <div className="pageContainer page-5">
      <Parallax speed={100}>
        <TypeAnimation
          className="title"
          sequence={["วิธีการป้องกันล่ะ ?", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <Parallax speed={120} translateX={['-600px', '580px']} className="items">
        อย่าหลงเชื่ออะไรง่าย ๆ โดยเฉพาะที่เกี่ยวกับเงิน ๆ ทอง ๆ
      </Parallax>
      <Parallax speed={120} translateX={['500px', '-480px']} className="items">
        หากไม่แน่ใจให้โทรหาตำรวจก่อน 191 ก็ได้
      </Parallax>
      <Parallax speed={120} translateX={['-400px', '380px']} className="items">
        หรือปรึกษาคนที่มีความรู้ ก่อนการตัดสินใจทำอะไรด้วยตัวเอง
      </Parallax>
      <Parallax speed={120} translateX={['300px', '-280px']} className="items">
        รู้จักระวังตัวและติดตามข่าวให้รู้เท่าทันมิจฉาชีพอยู่เสมอ
      </Parallax>
    </div>
  );
}

export default Page6;
