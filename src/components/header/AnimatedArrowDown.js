import React from "react";
import arrowDown from "../../images/arrow_down.png";

function AnimatedArrowDown() {
  const props = null;
  /*const props = useSpring({
    from: {
      transform: "translateY(1px)"
    },
    to: async next => {
      while (1) {
        await next({ transform: "translateY(5%)" });
        await next({
          transform: "translateY(0)"
        });
      }
    }
  });*/

  return (
    <div className="arrowDown-container">
      <a href="#main-container" style={{ textDecoration: "none" }}>
        <span>Sigue hacia abajo para descubrir más!</span>
        <img src={arrowDown} alt="flecha apuntando hacia abajo" />
        {/*Imagen de <a href="https://pixabay.com/es/users/ArtsyBee-462611/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1564326">Oberholster Venita</a> en <a href="https://pixabay.com/es/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1564326">Pixabay</a>
         */}
      </a>
    </div>
  );
}

export default AnimatedArrowDown;
