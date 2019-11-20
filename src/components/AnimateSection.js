import React, { useState, useEffect } from "react";
import { useScrollPosition } from "./hooks/UseScrollPosition";

function AnimateSection(props) {
  const [animateShare, setAnimateShare] = useState(false);

  useEffect(() => {
    checkScrollBar(document.body.getBoundingClientRect());
  }, []);

  useScrollPosition(
    ({ currPos }) => {
      checkScrollBar(currPos);
    },
    [animateShare],
    null,
    false,
    300
  );

  const checkScrollBar = currPos => {
    const isSectionShare = currPos.y < -725;
    if (isSectionShare) setAnimateShare(isSectionShare);
  };

  return <React.Fragment>{props.children({ animateShare })}</React.Fragment>;
}

export default AnimateSection;
