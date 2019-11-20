import React from "react";
import CarrouselCooperation from "./CarrouselCooperation";

function SectionCooperation(props) {
  return (
    <section className="section-cooperation">
      <h2 style={{ padding: "1% 0 3% 4%", width: "50%" }}>
        Lorem ipsum dolor sit amet...
      </h2>
      <CarrouselCooperation />
    </section>
  );
}

/*
      <RowContent
        key={props.rows[1].id}
        colsContent={props.rows[1].colsContent}
      />
      <RowContent
        key={props.rows[2].id}
        colsContent={props.rows[2].colsContent}
      />
      <RowContent
        key={props.rows[3].id}
        colsContent={props.rows[3].colsContent}
      />
*/

export default SectionCooperation;
