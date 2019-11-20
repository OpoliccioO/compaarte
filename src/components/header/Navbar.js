import React, { useState, useEffect } from "react";
import { animated, useSpring, config } from "react-spring";
import { useScroll } from "react-use-gesture";

function Navbar(props) {
  /*const containerNav = {
    width: "100%",
    padding: "1% 6% 1% 5%",
    position: "fixed",
    zIndex: 1,
    background: "#00c070"
  };*/
  const [navPosition, setNavPosition] = useState(0);
  const [{ background }, set] = useSpring(() => ({
    background: "#00c070",
    config: config.stiff
  }));

  const bind = useScroll(
    ({ xy: [x, y] }) => {
      const active = [false, false, false];
      const footerHeight = props.footerRef.current.offsetHeight;
      const [sectionShare, sectionCooperation] = [
        ((document.body.clientHeight - footerHeight) / 3) * 0.9,
        ((document.body.clientHeight - footerHeight) / 3) * 1.9
      ];

      if (y >= 0 && y < sectionShare && !active[0]) {
        active[0] = true;
        active[1] = false;
        set({ background: "#00c070" });
      } else if (y >= sectionShare && y < sectionCooperation && !active[1]) {
        active[1] = true;
        active[0] = false;
        active[2] = false;
        set({ background: "#cb9d82" });
      } else if (!active[2]) {
        active[1] = false;
        active[2] = true;
        set({ background: "#fff" });
      }
    },
    { domTarget: window }
  );

  useEffect(bind, [bind]);

  const navbarStatic = {
    position: "absolute",
    background: background
  };

  const navbarSticky = {
    position: "fixed",
    zIndex: 1,
    background: background
  };

  return (
    <animated.nav
      className="navbar navbar-expand-lg navbar-light"
      style={props.scrolled ? navbarSticky : navbarStatic}
    >
      <span className="navbar-brand" style={navBrand}>
        CompaArte
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <button
            onClick={props.openForm.bind(this, "signIn")}
            className="btn btn-link btn-lg p-0 mx-3"
          >
            Iniciar sesión
          </button>
          <button
            onClick={props.openForm.bind(this, "signUp")}
            className="btn btn-link btn-lg p-0 mx-3"
          >
            Regístrate
          </button>
        </div>
      </div>
    </animated.nav>
  );
}

const navBrand = {
  fontFamily: "Lobster",
  fontSize: "2.5em",
  letterSpacing: 5,
  color: "#ab2135"
};

export default Navbar;
