import "./App.css";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import { ParallaxProvider } from "react-scroll-parallax";
import Vid from "./components/Vid";

function App() {
  return (
    <ParallaxProvider className="app">
      <div className="App">
          <Page1 />
          <Vid />
          <Page2 />
          <Page3 />
      </div>
    </ParallaxProvider>
  );
}

export default App;
