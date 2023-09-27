import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Parallax } from "react-scroll-parallax";

function Vid() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [vidWidth, setVidWidth] = useState(1620)
  const [vidHeight, setVidHeight] = useState(1000)
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  useEffect(()=>{
    if(windowSize.innerWidth <= 640){
      setVidWidth(340)
      setVidHeight(240)
    }else if(windowSize.innerWidth <= 1150){
      setVidWidth(960)
      setVidHeight(490)
    }
  },[windowSize])
  return (
    <div className="pageContainer">
      <Parallax speed={50} className="vid">
        <ReactPlayer
          url="https://www.youtube.com/embed/a2mQP4i9OVk"
          width={vidWidth+'px'}
          height={vidHeight+'px'}
          playIcon="true"
        />
      </Parallax>
    </div>
  );
}
function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
export default Vid;
