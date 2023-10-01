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
          sequence={["ข้อมูลที่ถูกขโมยไปอยูที่ไหน ?", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <Parallax speed={120} translateX={['-600px', '580px']} className="items">
      4% อยู่ในเว็บไซต์ที่เราใช้งานในชีวิตประจำวันเรียกว่า “Surface Web” ประเภทนี้ค้นหาได้โดยใช้ Search Engine สามารถเข้าถึงได้โดยใช้เว็บเบราเซอร์มาตรฐานที่ไม่ต้องการการกำหนดค่าพิเศษใดๆ
      </Parallax>
      <Parallax speed={120} translateX={['500px', '-480px']} className="items">
      90% อยู่ใน Deep Web เป็นข้อมูลหรือเว็บไซต์ที่ไม่ถูกจัดทํา Index โดย Search Engine มาตรฐานทั่วไป เช่น Google หรือ Yahoo นั่นหมายความว่าผู้ใช้ทั่วไปจะไม่สามารถค้นหาเว็บไซต์เหล่านั้นได้เจอผ่าน Search Engine แต่ยังคงสามารถเข้าผ่าน URL ได้ตามปกติ
      </Parallax>
      <Parallax speed={120} translateX={['-400px', '380px']} className="items">
      6% อยู่ที่ Dark Web เป็นพื้นที่สีเทาแหล่งที่อยู่อาศัยของพวกแฮกเกอร์ และกลุ่มอาชญากรรมทางคอมพิวเตอร์ “เสนอบริการสิ่งผิดกฎหมายมากมาย”
      </Parallax>
    </div>
  );
}

export default Page6;
