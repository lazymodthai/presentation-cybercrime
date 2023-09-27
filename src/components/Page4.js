import React from "react";
import "./PageStyles.css";
import { Parallax } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";
import Older from "../images/older.png";
import Unknower from "../images/unknower.png";

function Page4() {
  return (
    <div className="pageContainer page-4">
      <Parallax speed={5}>
        <TypeAnimation
          className="title"
          sequence={["ใครบ้างที่เสี่ยงโดนหลอก ?", 3000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </Parallax>
      <div className="imgBox">
        <Parallax speed={10} translateX={["-600px", "0px"]}>
          <img src={Older} alt="older" style={{ maxWidth: "400px" }} />
        </Parallax>
        <Parallax
          speed={20}
          className="olderText"
          translateX={["600px", "0px"] }
          style={{paddingRight:'200px'}}
        >
          ผู้สูงอายุ
        </Parallax>
      </div>

      <div className="imgBox">
      <Parallax
          speed={50}
          className="olderText"
          translateX={["-400px", "0px"]}
        >
          ผู้ที่ไม่มีความรู้ด้านกฎหมาย
        </Parallax>
        <Parallax speed={10} translateX={["400px", "0px"] } >
          <img src={Unknower} alt="older" style={{ maxWidth: "400px" }} />
        </Parallax>
      </div>
    </div>
  );
}

export default Page4;
