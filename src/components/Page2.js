import React from "react";
import "./PageStyles.css";
import { Parallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";
import hacker from "../images/hacker.jpg";

function Page2() {
  return (
    <div className="pageContainer page-2">
      <Parallax speed={100} translateY={[-100, 100, "easeInQuint"]}>
        <TypeAnimation
          className="title"
          sequence={["แฮกเกอร์ล้วงข้อมูลขาย ไทยสูญปีละ 3.9 หมื่นล้านบาท", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <div className="newsBox">
        <Parallax>
          <img src={hacker} alt="news" />
        </Parallax>
        <Parallax speed={5} scale={[1.5, 0.5]} className="textBlock">
          &emsp;&emsp;คนไทยยังตกเป็นเหยื่อ “แก๊งมิจฉาชีพบนโลกออนไลน์”
          ที่แฝงตัวเข้ามาอยู่ในทุกแพลตฟอร์มหลากหลายรูปแบบอันมีเป้าหมาย
          “เพื่อหลอกลวงเอาทรัพย์สินของผู้อื่นไม่เว้นแต่ละวัน”
          สร้างความเดือดร้อนเสียหายให้หลายคนหมดเนื้อหมดตัวมานักต่อนัก
          <br />
          <br />
          &emsp;&emsp;ตามข้อมูลสถิติตั้งแต่วันที่ 1 ม.ค.2565-30 มิ.ย.2566
          มีผู้ถูกหลอกลวงแล้วจำนวน 2.8 แสนกรณี มูลค่าความเสียหาย 3.9
          หมื่นล้านบาท หรือเฉลี่ยวันละ 88 ล้านบาท
          ที่สะท้อนผ่านเวทีสร้างความรู้ความเข้าใจ
          และตระหนักเกี่ยวกับความมั่นคงปลอดภัยทางไซเบอร์ โดย
          สนง.คกก.รักษาความมั่นคงปลอดภัยไซเบอร์แห่งชาติ (สกมช.)
          <br />
          <br />
          &emsp;&emsp;ผู้เชี่ยวชาญด้านความมั่นคงปลอดภัยทางไซเบอร์ ให้ข้อมูลว่า
          ตอนนี้เรากำลังอยู่บนโลกไซเบอร์สเปซ
          หรือโลกออนไลน์อันเป็นระบบอิเล็กทรอนิกส์ใช้สื่อสารกันมากขึ้น
          ทำให้นำมาซึ่งภัยออนไลน์พบมากสูงที่สุด คือ <br />
          &emsp;1. คดีหลอกลวงซื้อสินค้า 5.1 หมื่นกว่าเรื่อง คิดเป็นร้อยละ 32.67{" "}
          <br />
          &emsp;2. คดีหลอกโอนเงินเพื่อหารายได้จากกิจกรรม 2.2 หมื่นเรื่อง <br />
          &emsp;3. คดีหลอกให้กู้เงินแต่ไม่ได้เงิน 1.8 หมื่นเรื่อง <br />
          &emsp;4. คดีหลอกให้ลงทุนที่ไม่เข้าข่ายฉ้อโกงประชาชน 1.4 หมื่นเรื่อง{" "}
          <br />
          &emsp;5. คดีแก๊งคอลเซ็นเตอร์ 1.2 หมื่นเรื่อง
          <br />
          <br />
          &emsp;&emsp;โดย "ฟิชชิง (Phishing)"
          เป็นหนึ่งในการหลอกลวงบนออนไลน์ที่พบบ่อยที่สุด อันมีรูปแบบการใช้กลอุบาย
          และการแอบอ้างเป็นเว็บไซต์องค์กร ที่มีเป้าหมายเป็นข้อมูลส่วนบุคคล เช่น
          หมายเลขบัตรเครดิต เลขบัตรประชาชน
          รหัสผ่านสู่การเข้าระบบบัญชีออนไลน์ของเหยื่อ
          <br />
          <br />
          <a href="https://www.thairath.co.th/news/local/2726006">https://www.thairath.co.th/news/local/2726006</a>
        </Parallax>
      </div>
    </div>
  );
}

export default Page2;
