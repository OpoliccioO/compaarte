import React, { useEffect } from "react";
import { useTransition, animated, config } from "react-spring";

import SignUp from "./SignUp";
import SignIn from "./SignIn";

const LoginForm = props => {
  const { toggleUI, changeForm, closeForm, scrolled, login } = props;
  const animateLogin = useTransition(toggleUI, null, {
    config: config.slow,
    from: { transform: "translateX(35%)", opacity: 0.5 },
    enter: { transform: "translateX(0)", opacity: 1 },
    leave: { transform: "translateX(35%)", opacity: 0 }
  });

  const { marginLogin, textLogin, formLogin } =
    login === "signIn"
      ? {
          marginLogin: "45%",
          textLogin: "Regístrate",
          formLogin: <SignIn />
        }
      : {
          marginLogin: "20%",
          textLogin: "Iniciar sesión",
          formLogin: <SignUp />
        };

  return animateLogin.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} className="login-form" style={props}>
          <div className="text-right" style={{ marginBottom: marginLogin }}>
            <button className="btn btn-link btn-lg p-0" onClick={changeForm}>
              {textLogin}
            </button>
            {scrolled && (
              <button
                onClick={closeForm}
                className={`btn btn-light btn-lg p-0 ml-4 ${scrolled |
                  `invisible`}`}
              >
                <span className="font-weight-bold">X</span>
              </button>
            )}
          </div>
          {formLogin}
        </animated.div>
      )
  );
};

export default LoginForm;
