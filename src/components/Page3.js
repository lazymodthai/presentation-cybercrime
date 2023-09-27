import React from "react";
import "./PageStyles.css";
import { Parallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";

function Page3() {
  return (
    <div className="pageContainer page-3">
      <Parallax speed={50} translateY={[-100, 100, "easeInQuint"]}>
        <TypeAnimation
          className="title"
          sequence={["วิธีการหลอกเหยื่อเป็นยังไง ?", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <Parallax speed={5} className="textBlock">
        <ul>
          <li>เลือกเหยื่อที่อายุมาก หรือไม่มีความรู้ด้านกฎหมาย</li>
          <li>อ้างตัวเป็นตำรวจเพื่อให้เหยื่อเกรงกลัว , มีการระบุ สน.มุกดาหาร</li>
          <li>อ้างว่าเหยื่อทำผิดคดีร้ายแรง ต้องโดนตรวจสอบ</li>
          <li>ให้เหยื่อโอนเงินเข้าบัญชีม้า</li>
          <li>ให้โอนจนกว่าเหยื่อจะหมดตัว หรือรู้ตัว</li>
          <li>และเมื่อรู้ตัว ก็สายไปแล้ว...</li>
        </ul>
      </Parallax>
    </div>
  );
}

export default Page3;
