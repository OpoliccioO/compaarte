import React, { forwardRef } from "react";
import RowContent from "../RowContent";
import FooterIcon from "./FooterIcon";

const Footer = forwardRef((props, ref) => (
  <footer
    style={{
      padding: "3%",
      textAlign: "center",
      background: "#1a1a1a",
      color: "#fff"
    }}
    ref={ref}
  >
    <div>
      <FooterIcon
        url="https://www.facebook.com/"
        icon={["fab", "facebook"]}
        size="2x"
      />
      <FooterIcon
        url="https://www.instagram.com/"
        icon={["fab", "instagram"]}
        size="2x"
      />
    </div>
    <p
      style={{
        marginTop: ".5rem",
        fontWeight: "bold",
        fontFamily: "Arial",
        letterSpacing: ".8px"
      }}
    >
      &copy; CompaArte 2019
    </p>
  </footer>
));

export default Footer;
