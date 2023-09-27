import React from "react";
import "./PageStyles.css";
import { Parallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";
import more1 from "../images/more1.jpg";

function Page2() {
  return (
    <div className="pageContainer page-2">
      <Parallax speed={100} translateY={[-100, 100, "easeInQuint"]}>
        <TypeAnimation
          className="title"
          sequence={[
            "แก๊งคอลเซ็นเตอร์อ้างเป็น ตร. คดีฟอกเงิน หลอกโอน 1.5 ล้าน",
            3000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <div className="newsBox">
        <Parallax>
          <img src={more1} alt="news" />
        </Parallax>
        <Parallax speed={5} scale={[1.5, 0.5]} className="textBlock">
        &emsp;&emsp;มิจฉาชีพได้อ้างตัวเป็นเจ้าหน้าที่หน่วยปราบปรามการฟอกเงิน
          และบอกว่าได้จับกุมผู้ต้องหาฟอกเงินได้รายหนึ่ง
          ผู้ต้องหาได้ซัดทอดการกระทำผิดด้วยการซื้อบัญชีธนาคารของตนมาในราคา
          15,000 บาท และมิจฉาชีพต้องการตรวจสอบเส้นทางการเงินของตนทั้งหมด
          เนื่องจากตนมีส่วนในการฟอกเงิน วิธีการตรวจสอบนั้น
          คือโอนเงินทั้งหมดมาให้เจ้าหน้าที่ตรวจสอบ
          <br /><br />
          &emsp;&emsp;ตนจึงโอนเงินให้ครั้งแรกในวันที่ 22 สิงหาคม 2566 เป็นเงิน 700,000 บาท
          และโอนเงินให้ครั้งที่ 2 เป็นเงิน 800,000 บาท และโอนเงินครั้งที่ 3
          ซึ่งเป็นครั้งสุดท้ายอีก 40,000 บาท รวมทั้งสิ้น 1,540,000 บาท
          จนกระทั่งมาเอะใจว่าอาจถูกแก๊งมิจฉาชีพหลอก
        </Parallax>
      </div>
    </div>
  );
}

export default Page2;
