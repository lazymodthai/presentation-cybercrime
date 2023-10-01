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
          sequence={["รูปแบบของฟิชชิ่งมีอะไรบ้าง ?", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <Parallax speed={100} className="textBlock">
        <ul>
          <li>“สเปียร์ฟิชชิง (Spear phishing)” เป็นลักษณะการโจมตีที่มีเป้าหมาย “เฉพาะเจาะจง” ทำให้ การก่อเหตุมีความแนบเนียน เพราะคนร้ายมักจะมีการรวบรวมข้อมูลเกี่ยวกับเหยื่อไว้ก่อนหน้านั้นแล้วนำมา “วิเคราะห์” ในการเพิ่มประสิทธิภาพ และความน่าเชื่อถือในการหลอกลวง</li>
          <li>“วาฬลิง (Whaling)” ที่มีเป้าไปในผู้บริหารระดับสูงเพื่อขโมยเงินก้อนใหญ่</li>
          <li>"ฟิชชิงโทรศัพท์ (Vishing)" โทร.หาเหยื่ออ้างเป็นตัวแทนหน่วยงานรัฐ ข่มขู่ แจ้งปัญหาร้ายแรง และบังคับให้ส่งข้อมูลส่วนตัว</li>
          <li>"ฟิชชิง SMS (Smishing)" การโจมตีด้วยการส่ง SMS หลอกลวงให้กดลิงก์เพื่อดาวน์โหลดแอปพลิเคชั่นแฮกข้อมูล</li>
          <li>"ฟาร์มมิง (Pharming)" ลักษณะคล้ายหว่านเมล็ดพันธุ์รอการเก็บเกี่ยวผลผลิตที่จะได้จำนวนมาก เช่น สร้างแอปพลิเคชันให้ผู้คนดาวน์โหลดฟรี และรอจังหวะการเก็บข้อมูลส่วนตัวของผู้ใช้นั้น ดังนั้นการจะดำเนินการธุรกรรมบนโลกออนไลน์</li>
          <li>"โคลนฟิชชิง (Clone phishing)" ใช้สำเนาของข้อความจริงที่มีไฟล์แนบหรือที่อยู่เว็บไซต์ แทนที่ด้วยลิงก์ปลอมที่เป็นอันตรายไปยังเว็บไซต์หลอกลวง หรือลิงก์ที่สามารถดาวน์โหลดได้อย่างง่ายดาย</li>
          </ul>
      </Parallax>
    </div>
  );
}

export default Page3;
