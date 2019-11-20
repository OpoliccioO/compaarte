import React from "react";
import handShakeBrown from "../../images/handshakeBrown.png";
import AnimationShareSection from "./AnimationShareSection";

function SectionShareNew(props) {
  return (
    <section className="section-share">
      <div className="row m-0 container-content">
        <div
          className="col-lg-5"
          style={{
            paddingLeft: 0
          }}
        >
          <img src={handShakeBrown} alt="imagen de un apretón de manos" />
        </div>
        <div className="col-lg-7" style={{ paddingTop: "10%" }}>
          <AnimationShareSection animateShare={props.animateShare} />
        </div>
      </div>
    </section>
  );
}

export default SectionShareNew;
