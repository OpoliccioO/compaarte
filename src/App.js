import React, { useRef, useEffect } from "react";
import Header from "./components/header/Header";
import MainContent from "./components/main/MainContent";
import Footer from "./components/footer/Footer";
import SmoothScroll from "smooth-scroll";
import "./index.css";
import { useSpring, animated } from "react-spring";
import { useScroll } from "react-use-gesture";

function App() {
  const footerRef = useRef();
  //let footerHeight = 0;

  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
      easing: "easeOutCubic"
    });
    //footerHeight = footerRef.current.offsetHeight;
  }, []);

  return (
    <div>
      <Header footerRef={footerRef} />
      <MainContent />
      <Footer ref={footerRef} />
    </div>
  );
}

/*
<Header navBackground={background} />
<MainContent ref={mainRef} windowHeight={windowHeight} />
  <Footer />*/
// <ToggleForm>{toggle => <LoginForm toggle={toggle} />}</ToggleForm>

export default App;
