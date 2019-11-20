import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated, config } from "react-spring";
import TextBox from "../TextBox";

const AnimationShareSection = props => {
  const { animateShare: start } = props;

  const animateShare = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: "translateY(60px)" },
    to: {
      opacity: start ? 1 : 0,
      transform: start ? "translateY(0)" : "translateY(60px)"
    }
  });

  return (
    <animated.div className="share-animation-container" style={animateShare}>
      <div className="guitar-icon share-icons">
        <FontAwesomeIcon icon="guitar" color="#734514d6" />
        <FontAwesomeIcon icon="chevron-down" color="#734514d6" />
      </div>
      <div className="share-textbox">
        <TextBox
          title="Lorem ipsum dolor sit amet dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit euismod volutpat. Phasellus mollis augue at odio finibus, quis tristique eros mollis. Sed lacus mi, rhoncus sed laoreet in, sodales ut risus. Ut nunc nisi, viverra eu tincidunt sit amet, posuere et felis"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit
            euismod volutpat. Phasellus mollis augue at odio finibus, quis
            tristique eros mollis. Sed lacus mi, rhoncus sed laoreet in, sodales
            ut risus. Ut nunc nisi, viverra eu tincidunt
          </p>
        </TextBox>
      </div>
      <div className="camera-icon share-icons">
        <FontAwesomeIcon icon="chevron-up" color="#000" />
        <FontAwesomeIcon icon="camera" color="#000" />
      </div>
    </animated.div>
  );
};

export default AnimationShareSection;
