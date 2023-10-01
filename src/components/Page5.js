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
          sequence={["จุดอ่อนของมนุษย์ที่จะทำให้ถูกหลอก ?", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <div className="textCard">
      <ul>
        <Parallax speed={70}>
          <li>
          ความกลัว
          </li>
        </Parallax>
        <Parallax speed={70}>
          <li>ความเร่งรีบ</li>
        </Parallax>
        <Parallax speed={70}>
          <li>ความโลภ</li>
        </Parallax>
        <Parallax speed={70}>
          <li>ความอยากรู้อยากเห็น</li>
        </Parallax>
        <Parallax speed={50}>
          <li>ใช้ความน่าเชื่อถือ</li>
        </Parallax>
        <Parallax speed={50}>
          <li>การเบี่ยงเบนความสนใจ</li>
        </Parallax>
        <Parallax speed={50}>
          <li>หลอกให้รัก</li>
        </Parallax>
      </ul>
      </div>
    </div>
  );
}

export default Page5;
