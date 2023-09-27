import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { ParallaxProvider } from "react-scroll-parallax";
import Vid from "./components/Vid";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";
import Page8 from "./components/Page8";

function App() {
  return (
    <ParallaxProvider className="app">
      <div className="App">
       <div className="name">นาย อนุชา แก้วนิล | รหัสนักศึกษา 661112010014</div>
          <Page1 />
          <Vid />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
          <Page8 />

      </div>
    </ParallaxProvider>
  );
}

export default App;
