import React from "react";
import Navbar from "./Navbar";
import TextBox from "../TextBox";
import LoginForm from "../user_form/LoginForm";
import ToggleForm from "../ToggleForm";
import AnimatedArrowDown from "./AnimatedArrowDown";

export default function Header(props) {
  return (
    <header>
      <ToggleForm>
        {({ toggleUI, login, scrolled, closeForm, openForm, changeForm }) => {
          return (
            <>
              <Navbar
                openForm={openForm}
                scrolled={scrolled}
                footerRef={props.footerRef}
              />
              <LoginForm
                toggleUI={toggleUI}
                login={login}
                scrolled={scrolled}
                closeForm={closeForm}
                changeForm={changeForm}
              />
            </>
          );
        }}
      </ToggleForm>
      <div style={{ padding: "13% 0 0 5%", width: "64%" }}>
        <TextBox
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta odio ut magna semper, volutpat molestie dolor laoreet. Vivamus consequat lobortis facilisis. Cras venenatis velit. "
          hStyle={hStyle}
          pStyle={pStyle}
        />
        <AnimatedArrowDown />
      </div>
    </header>
  );
}

const hStyle = {
  fontFamily: "Lobster",
  fontSize: "3.5em",
  color: "#fff",
  letterSpacing: 4
};

const pStyle = {
  fontSize: "1.4em",
  fontFamily: "Montserrat-Medium",
  fontWeight: 500,
  letterSpacing: 1,
  marginTop: "4em",
  width: "80%"
};
