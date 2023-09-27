import React from "react";
import "./PageStyles.css";
import { Parallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";

function Page7() {
  return (
    <div className="pageContainer page-2">
      <Parallax speed={100} translateY={[-100, 100, "easeInQuint"]}>
        <TypeAnimation
          className="title"
          sequence={["สรุป", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <div className="sumbox">
        <Parallax speed={5} scale={[1.5, 0.5]} className="textBlock">
          &emsp;&emsp;อาชญากรรมทางเทคโนโลยีเกิดขึ้นได้เพราะมีมิจฉาชีพ และเหยื่อ
          โดยมีเทคโนโลยีเป็นสื่อกลาง ไม่ว่าจะเป็นการแฮ็กข้อมูล
          หรือการหลอกให้โอนเงินเช่นในข่าวนี้
          โดยมิจฉาชีพมีวิธีการมากมายที่จะหลอกลวงเหยื่อ ไม่ว่าจะเป็นคำพูด AI
          ในการสร้างหน้าตาจำลองเป็นตัวรวจ หรือการหว่านแหโทรไปจนกว่าจะเจอเหยื่อ
          ล้วนเป็นผลมาจากเทคโนโลยีทั้งสิ้น
          <br />
          <br />
          &emsp;&emsp;การไม่ตกเป็นเหยื่อคือต้องไม่หลงเชื่ออะไรง่าย ๆ
          และรู้เท่าทันกลโกง โดยใช้เทคโนโลยีในมือให้เป็นประโยชน์
          ไม่ว่าจะเป็นการหาข้อมูล
          การแบ่งปันความรู้แก่ผู้อื่นที่อาจตกเป็นเหยื่อรายต่อไป
          <br />
          <br />
          &emsp;&emsp;ทั้งนี้การหวังพึ่งตำรวจอาจยังไม่พอ ตนจึงเป็นที่พึ่งแห่งตน
        </Parallax>
      </div>
    </div>
  );
}

export default Page7;
