import React, { useState, useEffect } from "react";
import { useScrollPosition } from "./hooks/UseScrollPosition";

function ToggleUI(props) {
  const [toggleUI, setToggleUI] = useState(null);
  const [login, setLogin] = useState("signUp");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.innerWidth > 991
      ? checkScrollBar(document.body.getBoundingClientRect())
      : setScrolled(true);
  }, []);

  useScrollPosition(
    ({ currPos }) => {
      window.innerWidth > 991 ? checkScrollBar(currPos) : setScrolled(true);
    },
    [scrolled],
    null,
    false,
    300
  );

  const checkScrollBar = currPos => {
    const isScrolled = currPos.y < -150;
    if (isScrolled !== scrolled) setScrolled(isScrolled);
    isScrolled ? closeForm() : openForm(login);
  };

  const closeForm = () => {
    setToggleUI(false);
  };

  const openForm = form => {
    form !== login && setLogin(form);
    setToggleUI(true);
  };

  const changeForm = () => {
    setLogin(prevLogin => {
      return prevLogin === "signUp" ? "signIn" : "signUp";
    });
  };

  return (
    <React.Fragment>
      {props.children({
        toggleUI,
        login,
        scrolled,
        closeForm,
        openForm,
        changeForm
      })}
    </React.Fragment>
  );
}

export default ToggleUI;
