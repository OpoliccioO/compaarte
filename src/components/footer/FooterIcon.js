import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterIcon(props) {
  return (
    <>
      <a href={props.url} style={{ margin: ".5rem", color: "#00e68a" }}>
        <FontAwesomeIcon icon={props.icon} size={props.size} />
      </a>
    </>
  );
}

export default FooterIcon;
