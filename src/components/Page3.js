import React from "react";
import "./PageStyles.css";
import { Parallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";

function Page3() {
  return (
    <div className="pageContainer page-3">
      <Parallax speed={5}>
        <TypeAnimation
          className="title"
          sequence={["วิธีการหลอกเหยื่อเป็นยังไง ?", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <Parallax speed={100} className="textBlock">
        <ul>
          <li>อ้างตัวเป็นตำรวจเพื่อให้เหยื่อเกรงกลัว (มีการระบุ สน.มุกดาหาร)</li>
          <li>อ้างว่าเหยื่อถูกเอาชื่อไปเปิดบัญชีม้า บอกว่าเป็นความผิดคดีร้ายแรง</li>
          <li>บอกว่าเหยื่อต้องโดนตรวจสอบเงินในบัญชี</li>
          <li>ให้เหยื่อโอนเงินเข้าบัญชีม้า</li>
          <li>โอนจนกว่าเหยื่อจะหมดตัว หรือรู้ตัวว่าโดนหลอก</li>
          <li>และเมื่อรู้ตัว ก็สายไปแล้ว...</li>
        </ul>
      </Parallax>
    </div>
  );
}

export default Page3;
