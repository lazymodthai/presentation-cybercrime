import React from "react";
import "./PageStyles.css";
import { Parallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";

function Page5() {
  return (
    <div className="pageContainer page-5">
      <Parallax speed={5}>
        <TypeAnimation
          className="title"
          sequence={["ถ้าสงสัยหรือรู้ตัวว่าโดนจะทำยังไงดี ?", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <div className="textCard">
      <ul>
        <Parallax speed={30}>
          <li>
            ตั้งสติให้ดี (อาจจะแกล้งคุยกับมิจฉาชีพก่อนเพื่อให้บัญชีม้าไม่โดนปิด)
          </li>
        </Parallax>
        <Parallax speed={60}>
          <li>รีบแจ้งธนาคารก่อนให้อายัดบัญชีม้าที่โอนไป</li>
        </Parallax>
        <Parallax speed={90}>
          <li>โทรแจ้งตำรวจ</li>
        </Parallax>
      </ul>
      </div>
    </div>
  );
}

export default Page5;
